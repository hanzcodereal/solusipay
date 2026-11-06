"use client";

import { useState, useEffect } from "react";
import { Reseller } from "./interfaces";

export default function ResellersPage() {
  const [resellers, setResellers] = useState<Reseller[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
 
  useEffect(() => {
    fetchResellers();
  }, []);

  const fetchResellers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/resellers");
      const result = await response.json();

      if (result.success) {
        setResellers(result.data);
      } else {
        setError(result.error || result.message);
      }
    } catch (err: unknown) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const filteredResellers = resellers.filter(
    (r) =>
      r.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.kode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-2">
              Daftar Reseller
            </h1>
            <p className="text-slate-400">Manage and monitor your reseller network</p>
          </div>
          <div className="relative group">
            <input
              type="text"
              placeholder="Cari nama atau kode..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 pl-11 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </header>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-slate-900/40 border border-slate-800/50 rounded-2xl h-48 animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center max-w-2xl mx-auto backdrop-blur-sm">
            <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-red-400 mb-2">Connection Issue</h2>
            <p className="text-slate-400 mb-6">{error}</p>
            <button
              onClick={fetchResellers}
              className="bg-slate-100 text-slate-950 px-6 py-2 rounded-lg font-medium hover:bg-white transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : filteredResellers.length === 0 ? (
          <div className="text-center py-20 opacity-50">
            <p className="text-lg">No resellers found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResellers.map((reseller) => (
              <div
                key={reseller.kode}
                className="group bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-500/20 px-2 py-1 rounded text-[10px] font-bold text-blue-400 tracking-wider uppercase">
                    {reseller.kode}
                  </div>
                  <div className={`h-2 w-2 rounded-full ${reseller.status === '1' ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-slate-600'}`} />
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                  {reseller.nama}
                </h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-1">{reseller.alamat || 'No address provided'}</p>
                <div className="pt-4 border-t border-slate-800/50 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">Balance</span>
                    <div className="text-2xl font-mono font-bold text-emerald-400">
                      {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(reseller.saldo)}
                    </div>
                  </div>
                  <button className="bg-slate-800 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="h-5 w-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
