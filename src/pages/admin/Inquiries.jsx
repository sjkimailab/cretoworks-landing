import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Search, Mail, Phone, Calendar, CheckCircle, Clock, Trash2 } from 'lucide-react';

const Inquiries = () => {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    useEffect(() => {
        fetchInquiries();
    }, []);

    const fetchInquiries = async () => {
        try {
            let query = supabase
                .from('inquiries')
                .select('*')
                .order('created_at', { ascending: false });

            if (filterStatus !== 'all') {
                query = query.eq('status', filterStatus);
            }

            const { data, error } = await query;

            if (error) throw error;
            setInquiries(data || []);
        } catch (error) {
            console.error('Error fetching inquiries:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id, newStatus) => {
        try {
            const { error } = await supabase
                .from('inquiries')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;
            fetchInquiries();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const deleteInquiry = async (id) => {
        if (!confirm('정말 삭제하시겠습니까?')) return;

        try {
            const { error } = await supabase
                .from('inquiries')
                .delete()
                .eq('id', id);

            if (error) throw error;
            fetchInquiries();
        } catch (error) {
            console.error('Error deleting inquiry:', error);
        }
    };

    const filteredInquiries = inquiries.filter((inquiry) =>
        inquiry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.subject?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">문의 관리</h1>
                    <p className="text-text-muted">고객 문의를 확인하고 관리합니다</p>
                </div>

                {/* Filters */}
                <div className="bg-grad-surface border border-glass-border rounded-xl p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-dim" size={20} />
                            <input
                                type="text"
                                placeholder="이름, 이메일, 제목으로 검색..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-primary"
                            />
                        </div>
                        <select
                            value={filterStatus}
                            onChange={(e) => {
                                setFilterStatus(e.target.value);
                                fetchInquiries();
                            }}
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                        >
                            <option value="all">전체 상태</option>
                            <option value="pending">대기 중</option>
                            <option value="completed">완료</option>
                        </select>
                    </div>
                </div>

                {/* Inquiries List */}
                {loading ? (
                    <div className="text-white">Loading...</div>
                ) : filteredInquiries.length === 0 ? (
                    <div className="bg-grad-surface border border-glass-border rounded-xl p-12 text-center">
                        <p className="text-text-muted">문의가 없습니다</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredInquiries.map((inquiry) => (
                            <div
                                key={inquiry.id}
                                className="bg-grad-surface border border-glass-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-white font-bold text-lg mb-1">{inquiry.subject}</h3>
                                                <div className="flex items-center gap-4 text-sm text-text-muted">
                                                    <span className="flex items-center gap-1">
                                                        <Mail size={14} />
                                                        {inquiry.email}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={14} />
                                                        {new Date(inquiry.created_at).toLocaleDateString('ko-KR')}
                                                    </span>
                                                </div>
                                            </div>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${inquiry.status === 'completed'
                                                        ? 'bg-green-500/20 text-green-400'
                                                        : 'bg-orange-500/20 text-orange-400'
                                                    }`}
                                            >
                                                {inquiry.status === 'completed' ? '완료' : '대기 중'}
                                            </span>
                                        </div>

                                        <p className="text-text-muted">{inquiry.message}</p>

                                        <div className="flex gap-2">
                                            {inquiry.status === 'pending' && (
                                                <button
                                                    onClick={() => updateStatus(inquiry.id, 'completed')}
                                                    className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors text-sm"
                                                >
                                                    <CheckCircle size={16} />
                                                    완료 처리
                                                </button>
                                            )}
                                            {inquiry.status === 'completed' && (
                                                <button
                                                    onClick={() => updateStatus(inquiry.id, 'pending')}
                                                    className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors text-sm"
                                                >
                                                    <Clock size={16} />
                                                    대기 중으로 변경
                                                </button>
                                            )}
                                            <button
                                                onClick={() => deleteInquiry(inquiry.id)}
                                                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-sm"
                                            >
                                                <Trash2 size={16} />
                                                삭제
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default Inquiries;
