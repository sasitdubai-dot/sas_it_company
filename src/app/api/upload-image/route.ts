import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const storageBucket = process.env.SUPABASE_STORAGE_BUCKET || 'properties';

// Create admin client with service role key (bypasses RLS)
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error('Missing Supabase configuration:', {
        hasUrl: !!supabaseUrl,
        hasServiceKey: !!supabaseServiceRoleKey,
      });
      return NextResponse.json(
        { error: 'Server configuration error: Missing Supabase credentials' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const projectId = formData.get('projectId') as string;
    const index = formData.get('index') as string;

    if (!file || !projectId || !index) {
      return NextResponse.json(
        { error: 'Missing required fields: file, projectId, or index' },
        { status: 400 }
      );
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${projectId}-${index}.${fileExt}`;
    const filePath = `projects/${fileName}`;

    // Upload using admin client (bypasses RLS)
    const { data, error } = await supabaseAdmin.storage
      .from(storageBucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Storage upload error:', {
        error: error.message,
        bucket: storageBucket,
        filePath: filePath,
      });
      
      // Provide more helpful error messages
      let errorMessage = 'Failed to upload image';
      if (error.message.includes('not found') || error.message.includes('404')) {
        errorMessage = `Storage bucket '${storageBucket}' not found. Please create it in Supabase Storage.`;
      } else if (error.message.includes('policy') || error.message.includes('RLS')) {
        errorMessage = `Permission denied. Please check storage bucket policies for '${storageBucket}'.`;
      } else {
        errorMessage = error.message || 'Failed to upload image';
      }
      
      return NextResponse.json(
        { error: errorMessage, details: error.message },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: { publicUrl } } = supabaseAdmin.storage
      .from(storageBucket)
      .getPublicUrl(filePath);

    return NextResponse.json({ url: publicUrl }, { status: 200 });
  } catch (error) {
    console.error('Error in upload-image API:', error);
    return NextResponse.json(
      { error: 'Failed to upload image', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

