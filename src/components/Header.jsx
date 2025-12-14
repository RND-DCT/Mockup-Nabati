import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between z-20 relative sticky top-0">
            <h1 className="text-xl font-bold text-gray-700">People Movement Management System (PMMS)</h1>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                    <img src="https://flagcdn.com/id.svg" width="20" alt="Indonesia" />
                    <span>ID</span>
                    <ChevronDown className="h-3 w-3" />
                </div>
                <div className="text-right">
                    <p className="text-xs font-bold text-gray-800">Halo, PMMS.ADMIN@NABATISNACK.CO.ID</p>
                    <p className="text-[10px] text-blue-500">PMMS.ADMIN@NABATISNACK.CO.ID</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
