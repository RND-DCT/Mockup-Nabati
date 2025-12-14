import React from 'react';
import { Users } from 'lucide-react';
import Layout from '../components/Layout';

const Dashboard = () => {
    const buildings = ['A', 'B', 'C', 'E'];

    return (
        <Layout>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Dashboard Gedung</h2>
                <p className="text-gray-500 text-sm">Monitor, mengelola akses serta jumlah orang di dalam gedung</p>
            </div>

            {/* Karyawan Section */}
            <div className="mb-8">
                <div className="inline-flex items-center bg-pink-100 text-pink-600 px-3 py-1 rounded-md text-sm font-bold mb-4 gap-2">
                    <Users className="w-5 h-5" />
                    <span>Karyawan</span>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {buildings.map((gedung, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 border-l-4 border-l-emerald-500 relative overflow-hidden">
                            <h3 className="text-emerald-600 font-bold text-sm mb-1">GEDUNG {gedung}</h3>
                            <div className="flex items-end justify-between mb-2">
                                <span className="text-4xl font-bold text-emerald-800">{[1630, 547, 577, 644][idx]}</span>
                                <div className="text-xs text-right space-y-1">
                                    <div className="flex justify-between w-24">
                                        <span className="text-emerald-600 font-semibold">Masuk</span>
                                        <span className="text-red-500 font-semibold">Keluar</span>
                                    </div>
                                    <div className="flex justify-between w-24 font-bold text-lg">
                                        <span className="text-emerald-600">0</span>
                                        <span className="text-red-500">0</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-emerald-700 font-medium mb-4">Total Orang di Gedung</p>
                            <button className="w-full bg-pink-50 hover:bg-pink-100 text-pink-500 text-xs font-bold py-1.5 rounded transition-colors">
                                Detail
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pengunjung Section */}
            <div className="mb-8">
                <div className="inline-flex items-center bg-pink-100 text-pink-600 px-3 py-1 rounded-md text-sm font-bold mb-4 gap-2">
                    <Users className="w-5 h-5" />
                    <span>Pengunjung</span>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {buildings.map((gedung, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 border-l-4 border-l-emerald-500 relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                            <div>
                                <h3 className="text-emerald-600 font-bold text-lg mb-4">GEDUNG {gedung}</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex flex-col">
                                        <span className="text-emerald-600 font-bold text-[11px] mb-1">Direncanakan</span>
                                        <span className="text-4xl font-bold text-emerald-600 text-center">0</span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-red-500 font-bold text-[11px] mb-1 text-right leading-tight">Tidak Direncanakan</span>
                                        <span className="text-4xl font-bold text-red-500 text-center w-full">{[3, 2, 0, 9][idx]}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-emerald-600 font-medium mt-4">Total Orang di Gedung</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Panel - Employee/Visitor Summary & Latency */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FFF0F7] rounded-xl border border-pink-100 flex flex-col">
                    {/* Header without continuous border */}
                    <div className="flex gap-12 p-6 pb-3">
                        <div className="flex-1 flex items-center gap-2 text-pink-600 font-bold text-xs">
                            <Users className="p-1 bg-pink-200 rounded w-6 h-6" /> EMPLOYEE
                        </div>
                        <div className="flex-1 flex items-center gap-2 text-pink-600 font-bold text-xs">
                            <Users className="p-1 bg-pink-200 rounded w-6 h-6" /> VISITOR
                        </div>
                    </div>

                    {/* Separator with margin */}
                    <div className="px-6">
                        <hr className="border-pink-200" />
                    </div>

                    {/* Content */}
                    <div className="flex gap-12 p-6 pt-3">
                        <div className="flex-1 space-y-2 ml-1">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-emerald-600">• Total Occupants</p>
                                <p className="text-[10px] text-gray-500 pl-2">Total karyawan yang ada di dalam gedung</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-green-600">• In</p>
                                <p className="text-[10px] text-gray-500 pl-2">Total transaksi IN karyawan shift saat ini</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-red-600">• Out</p>
                                <p className="text-[10px] text-gray-500 pl-2">Total transaksi OUT shift saat ini</p>
                            </div>
                        </div>

                        <div className="flex-1 space-y-2 ml-1">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-emerald-600">• Planned</p>
                                <p className="text-[10px] text-gray-500 pl-2">Total pengunjung "Planned" yang ada di dalam gedung</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-red-600">• Unplanned</p>
                                <p className="text-[10px] text-gray-500 pl-2">Total pengunjung "Unplanned" yang ada di dalam gedung</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative border-l-4 border-l-emerald-500">
                    <p className="text-gray-500 text-sm mb-1">Average Latency</p>
                    <p className="text-4xl font-bold text-emerald-600 mb-2">7m</p>
                    <p className="text-xs text-gray-500">Min: <span className="text-emerald-600 font-bold">5m</span> Max: <span className="text-red-500 font-bold">10m</span></p>

                    <div className="absolute top-6 right-6 text-emerald-500">
                        {/* Pulse icon or similar */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
