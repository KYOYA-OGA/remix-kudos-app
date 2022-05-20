import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full bg-blue-900 font-mono">{children}</div>
  );
}
