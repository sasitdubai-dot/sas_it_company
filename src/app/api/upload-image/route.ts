import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    { error: 'Image upload is not configured.' },
    { status: 501 }
  );
}
