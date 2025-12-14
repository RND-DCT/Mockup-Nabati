import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import { Columns, Search, Upload, Edit, Trash2, FileUp } from 'lucide-react';
import { RiFileExcel2Fill } from "react-icons/ri";

const AssignVIPCard = () => {
    // Mock data for the table
    const [vipData, setVipData] = useState([
        { id: 1, personelId: '60129', cardName: 'VIP CARD 29', assignName: '' },
        { id: 2, personelId: '60130', cardName: 'VIP CARD 30', assignName: '' },
        { id: 3, personelId: '60131', cardName: 'VIP CARD 31', assignName: '' },
        { id: 4, personelId: '60132', cardName: 'VIP CARD 32', assignName: '' },
        { id: 5, personelId: '60133', cardName: 'VIP CARD 33', assignName: '' },
        { id: 6, personelId: '60134', cardName: 'VIP CARD 34', assignName: '' },
        { id: 7, personelId: '60135', cardName: 'VIP CARD 35', assignName: '' },
        { id: 8, personelId: '60136', cardName: 'VIP CARD 36', assignName: '' },
        { id: 9, personelId: '60137', cardName: 'VIP CARD 37', assignName: '' },
        { id: 10, personelId: '60138', cardName: 'VIP CARD 38', assignName: '' },
        { id: 11, personelId: '60139', cardName: 'VIP CARD 39', assignName: '' },
        { id: 12, personelId: '60140', cardName: 'VIP CARD 40', assignName: '' },
        { id: 13, personelId: '60141', cardName: 'VIP CARD 41', assignName: '' },
        { id: 14, personelId: '60142', cardName: 'VIP CARD 42', assignName: '' },
        { id: 15, personelId: '60143', cardName: 'VIP CARD 43', assignName: '' },
        { id: 16, personelId: '60060', cardName: 'VIP CARD 01', assignName: 'ADI KURNIADI' },
        { id: 17, personelId: '60061', cardName: 'VIP CARD 02', assignName: 'ALDO HERISKO WIRATAMA' },
        { id: 18, personelId: '60122', cardName: 'VIP CARD 22', assignName: 'ADI KURNIADI' },
        { id: 19, personelId: '60123', cardName: 'VIP CARD 23', assignName: 'ALDO HERISKO WIRATAMA' },
        { id: 20, personelId: '60065', cardName: 'VIP CARD 06', assignName: '' },
        { id: 21, personelId: '60200', cardName: 'VIP CARD 11', assignName: 'JHON SIREGAR' },
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
        setVipData(prev => prev.filter(item => item.id !== selectedItem.id));
        setIsDeleteModalOpen(false);
    };

    const handleSaveEdit = () => {
        // Mock save logic (would update state here in reality)
        console.log("Saving edit for:", selectedItem);
        setIsEditModalOpen(false);
    };

    return (
        <Layout>
            <div className="mb-6 flex justify-between items-end">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Assign VIP Card</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <span>Master Data</span>
                        <span className="text-gray-400">›</span>
                        <span className="text-gray-700">Assign VIP Card</span>
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
                <div className="overflow-x-auto">
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
                            {vipData.map((item, index) => (
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
            </div>

            {/* Upload Modal */}
            <Modal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} title="Upload Data VIP Card">
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
            <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit VIP Card">
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

export default AssignVIPCard;
