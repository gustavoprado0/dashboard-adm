'use client'

import { Sidebar } from "@/components/sidebar/sidebar";

export default function Home() {

  return (
    <main>
      <div className="flex gap-2">
        <Sidebar />
        <div className="m-3">
          <p className="text-slate-950 font-semibold text-lg">DASHBOARD ADMINISTRATIVO</p>
        </div>
      </div>
    </main>
  );
}
