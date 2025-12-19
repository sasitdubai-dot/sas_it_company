'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAdmin } from '@/contexts/AdminContext';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, loading } = useAdmin();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !isAuthenticated && pathname !== '/admin') {
      router.push('/admin');
    }
  }, [isAuthenticated, loading, router, pathname]);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4a9eff] mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  // For admin login page, don't apply admin layout
  if (pathname === '/admin') {
    return <>{children}</>;
  }

  // For authenticated admin pages, apply special layout
  if (isAuthenticated) {
    return (
      <div className="bg-[#1a1a2e] min-h-screen">
        {children}
      </div>
    );
  }

  // Redirect to login if not authenticated
  return null;
}

