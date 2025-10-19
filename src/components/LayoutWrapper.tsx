"use client"
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-20 md:ml-64 w-full max-w-full overflow-x-hidden">
        <Navbar />
        <div className="pt-20 md:pt-24 px-4 md:px-10">{children}</div>
      </main>
    </div>
  );
}