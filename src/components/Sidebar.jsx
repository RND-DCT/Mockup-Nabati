import React, { useState } from 'react';
import { LayoutDashboard, Database, ArrowRightLeft, FileText, Settings, Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import nabatiLogo from '../assets/nabati-logo.png';

const Sidebar = () => {
    const location = useLocation();
    const [isMasterDataOpen, setIsMasterDataOpen] = useState(location.pathname.includes('/master-data'));

    const toggleMasterData = () => {
        setIsMasterDataOpen(!isMasterDataOpen);
    };

    return (
        <aside className="w-64 bg-[#14B8A6] text-white flex flex-col fixed h-full z-10 transition-all duration-300">
            <div className="p-6 flex items-center gap-2">
                <div className="w-24">
                    <img src={nabatiLogo} alt="Nabati" className="w-full h-auto" />
                </div>
                <button className="ml-auto p-1 hover:bg-white/10 rounded">
                    <Menu className="h-5 w-5 text-white" />
                </button>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                <div className="flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-white/10 rounded-lg cursor-pointer">
                    <LayoutDashboard className="h-5 w-5" />
                    <span className="font-medium">Dashboard All</span>
                </div>

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${isActive ? 'bg-[#DB2777] text-white shadow-sm' : 'text-white/80 hover:bg-white/10'
                        }`
                    }
                >
                    <div className={`${location.pathname === '/dashboard' ? 'bg-white/20' : ''} p-1 rounded`}>
                        <LayoutDashboard className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Dashboard</span>
                </NavLink>

                {/* Master Data Group */}
                <div className="space-y-1">
                    <div
                        onClick={toggleMasterData}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors ${location.pathname.includes('/master-data') ? 'bg-[#DB2777] text-white' : 'text-white/80 hover:bg-white/10'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <Database className="h-5 w-5" />
                            <span className="font-medium">Master Data</span>
                        </div>
                        {isMasterDataOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4 opacity-50" />}
                    </div>

                    {/* Submenu */}
                    {isMasterDataOpen && (
                        <div className="pl-4 space-y-1 bg-[#0F9D8D] rounded-lg py-2 mx-2">
                            <NavLink
                                to="/master-data/assign-vip-card"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-colors ${isActive ? 'bg-[#DB2777] text-white' : 'text-white/80 hover:bg-white/10'
                                    }`
                                }
                            >
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                <span className="font-medium">Assign VIP Card</span>
                            </NavLink>
                            <NavLink
                                to="/master-data/assign-security-card"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-colors ${isActive ? 'bg-[#DB2777] text-white' : 'text-white/80 hover:bg-white/10'
                                    }`
                                }
                            >
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                <span className="font-medium">Assign Security Card</span>
                            </NavLink>
                            <div className="flex items-center gap-3 px-4 py-2 text-white/80 hover:bg-white/10 text-sm rounded-md cursor-pointer">
                                <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                                <span className="font-medium">Employee</span>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-2 text-white/80 hover:bg-white/10 text-sm rounded-md cursor-pointer">
                                <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                                <span className="font-medium">Employee Data</span>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-2 text-white/80 hover:bg-white/10 text-sm rounded-md cursor-pointer">
                                <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                                <span className="font-medium">Visitor</span>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-2 text-white/80 hover:bg-white/10 text-sm rounded-md cursor-pointer">
                                <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                                <span className="font-medium">Mapping Access</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between px-4 py-3 text-white/80 hover:bg-white/10 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                        <ArrowRightLeft className="h-5 w-5" />
                        <span className="font-medium">Transaksi</span>
                    </div>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </div>

                <div className="flex items-center justify-between px-4 py-3 text-white/80 hover:bg-white/10 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5" />
                        <span className="font-medium">Laporan</span>
                    </div>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </div>

                <div className="flex items-center justify-between px-4 py-3 text-white/80 hover:bg-white/10 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                        <Settings className="h-5 w-5" />
                        <span className="font-medium">Pengaturan</span>
                    </div>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
