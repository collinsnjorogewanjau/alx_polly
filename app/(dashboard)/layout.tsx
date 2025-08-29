import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-background">
      <div className="container mx-auto">
        {children}
      </div>
    </div>
  );
}
