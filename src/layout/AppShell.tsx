import React from 'react';
import LeftMenu from '@/layout/LeftMenu';
import RightMenu from '@/layout/RightMenu';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <LeftMenu />
      <main className="flex-1 overflow-auto p-4">{children}</main>
      <RightMenu />
    </div>
  );
}
