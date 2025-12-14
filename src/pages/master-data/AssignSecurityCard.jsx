import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import { Columns, Search, Upload, Edit, Trash2, FileUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { RiFileExcel2Fill } from "react-icons/ri";

const AssignSecurityCard = () => {
    // Mock data for Security Card
    const [securityData, setSecurityData] = useState([
        { id: 1, personelId: '60001', cardName: 'CARD A 01', assignName: '' },
        { id: 2, personelId: '60002', cardName: 'CARD A 02', assignName: '' },
        { id: 3, personelId: '60003', cardName: 'CARD B 03', assignName: '' },
        { id: 4, personelId: '60004', cardName: 'CARD B 04', assignName: '' },
        { id: 5, personelId: '60005', cardName: 'CARD C 05', assignName: '' },
        { id: 6, personelId: '60006', cardName: 'CARD C 06', assignName: '' },
        { id: 7, personelId: '60008', cardName: 'CARD E 08', assignName: '' },
        { id: 8, personelId: '60009', cardName: 'CARD E 09', assignName: '' },
    ]);

    // Modal States
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // Selected Item for Edit/Delete
    const [selectedItem, setSelectedItem] = useState(null);

    // Handlers
    const handleEditClick = (item) => {
        setSelectedItem(item);
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = (item) => {
        setSelectedItem(item);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        // Mock delete logic
        setSecurityData(prev => prev.filter(item => item.id !== selectedItem.id));
        setIsDeleteModalOpen(false);
    };

    const handleSaveEdit = () => {
        // Mock save logic
        console.log("Saving edit for:", selectedItem);
        setIsEditModalOpen(false);
    };

    return (
        <Layout>
            <div className="mb-6 flex justify-between items-end">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Assign Security Card</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <span>Master Data</span>
                        <span className="text-gray-400">›</span>
                        <span className="text-gray-700">Assign Security Card</span>
                    </div>
                </div>

                <button
                    onClick={() => setIsUploadModalOpen(true)}
                    className="flex items-center gap-2 bg-white border border-emerald-500 text-emerald-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-50 transition-colors"
                >
                    <Upload className="w-4 h-4" />
                    Upload Data
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                {/* Filters */}
                <div className="flex justify-between items-center mb-4">
                    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <RiFileExcel2Fill className="w-4 h-4 text-gray-600" />
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Menampilkan</span>
                            <select className="border border-gray-200 rounded p-1 text-sm focus:outline-none focus:border-pink-500">
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                            <span>Data</span>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Cari data..."
                                className="pl-9 pr-4 py-1.5 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:border-pink-500"
                            />
                            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto min-h-[400px]">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#F8F9FA] text-gray-700 font-bold border-b border-gray-200">
                            <tr>
                                <th className="py-3 px-4 w-12">#</th>
                                <th className="py-3 px-4">Personel ID</th>
                                <th className="py-3 px-4">Card Name</th>
                                <th className="py-3 px-4 text-left">Assign Name</th>
                                <th className="py-3 px-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {securityData.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="py-2.5 px-4 text-gray-500 text-xs">{item.id}</td>
                                    <td className="py-2.5 px-4 text-gray-600 text-xs">{item.personelId}</td>
                                    <td className="py-2.5 px-4 text-gray-600 text-xs">{item.cardName}</td>
                                    <td className="py-2.5 px-4 text-gray-600 text-xs font-semibold">{item.assignName}</td>
                                    <td className="py-2.5 px-4 text-right flex justify-end gap-2">
                                        <button
                                            onClick={() => handleEditClick(item)}
                                            className="p-1 text-pink-500 hover:bg-pink-50 rounded border border-pink-200"
                                        >
                                            <Edit className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteClick(item)}
                                            className="p-1 text-red-500 hover:bg-red-50 rounded border border-red-200"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
                    <p className="text-xs text-gray-500">Menampilkan 1 sampai 8 dari 8 data</p>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 mr-2">Sebelumnya</span>
                        <button className="w-6 h-6 flex items-center justify-center bg-[#0F172A] text-white rounded text-xs">1</button>
                        <span className="text-xs text-gray-500 ml-2">Selanjutnya</span>
                    </div>
                </div>
            </div>

            {/* Upload Modal */}
            <Modal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} title="Upload Data Security Card">
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="p-3 bg-white rounded-full shadow-sm mb-4">
                        <FileUp className="w-8 h-8 text-emerald-500" />
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">Excel files only (XLSX, XLS)</p>
                </div>
                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={() => setIsUploadModalOpen(false)}
                        className="px-4 py-2 text-gray-600 font-medium text-sm hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => setIsUploadModalOpen(false)}
                        className="px-4 py-2 bg-[#BE123C] text-white font-medium text-sm rounded-lg hover:bg-[#9F1239] transition-colors"
                    >
                        Upload
                    </button>
                </div>
            </Modal>

            {/* Edit Modal */}
            <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit Security Card">
                {selectedItem && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Personel ID</label>
                            <input
                                type="text"
                                defaultValue={selectedItem.personelId}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Card Name</label>
                            <input
                                type="text"
                                defaultValue={selectedItem.cardName}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Assign Name</label>
                            <input
                                type="text"
                                defaultValue={selectedItem.assignName}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm"
                            />
                        </div>
                        <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-gray-100">
                            <button
                                onClick={() => setIsEditModalOpen(false)}
                                className="px-4 py-2 text-gray-600 font-medium text-sm hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveEdit}
                                className="px-4 py-2 bg-emerald-600 text-white font-medium text-sm rounded-lg hover:bg-emerald-700 transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                )}
            </Modal>

            {/* Delete Modal */}
            <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Konfirmasi Hapus" maxWidth="max-w-sm">
                <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trash2 className="w-6 h-6 text-red-600" />
                    </div>
                    <p className="text-gray-600 text-sm mb-6">
                        Apakah anda yakin ingin menghapus data <span className="font-bold text-gray-800">{selectedItem?.cardName}</span>? Tindakan ini tidak dapat dibatalkan.
                    </p>
                    <div className="flex justify-center gap-3">
                        <button
                            onClick={() => setIsDeleteModalOpen(false)}
                            className="px-4 py-2 text-gray-600 font-medium text-sm hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Batal
                        </button>
                        <button
                            onClick={handleConfirmDelete}
                            className="px-4 py-2 bg-red-600 text-white font-medium text-sm rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Hapus Data
                        </button>
                    </div>
                </div>
            </Modal>
        </Layout>
    );
};

export default AssignSecurityCard;
