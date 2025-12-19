// Mock image upload for testing when Supabase is not configured
export async function mockUploadImage(file: File, projectId: string, index: number): Promise<string> {
  // Simulate upload delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Create a mock URL using a placeholder service
  const mockUrl = `https://picsum.photos/600/400?random=${projectId}-${index}`;
  
  console.log(`Mock upload: ${file.name} -> ${mockUrl}`);
  
  return mockUrl;
}

// Check if Supabase is properly configured
export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  return !!(url && key && key !== 'your_supabase_anon_key');
}



