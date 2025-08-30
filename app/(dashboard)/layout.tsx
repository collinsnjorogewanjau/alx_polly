'use client';

import { ReactNode, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { session } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/sign-in');
    }
  }, [session, router]);

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-56px)] bg-background">
      <div className="container mx-auto">
        {children}
      </div>
    </div>
  );
}
