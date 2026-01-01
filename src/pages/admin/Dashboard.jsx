import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { supabase } from '../../lib/supabase';
import { MessageSquare, TrendingUp, Users, Clock } from 'lucide-react';

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalInquiries: 0,
        todayInquiries: 0,
        pendingInquiries: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            // Fetch total inquiries
            const { count: total } = await supabase
                .from('inquiries')
                .select('*', { count: 'exact', head: true });

            // Fetch today's inquiries
            const today = new Date().toISOString().split('T')[0];
            const { count: todayCount } = await supabase
                .from('inquiries')
                .select('*', { count: 'exact', head: true })
                .gte('created_at', today);

            // Fetch pending inquiries
            const { count: pending } = await supabase
                .from('inquiries')
                .select('*', { count: 'exact', head: true })
                .eq('status', 'pending');

            setStats({
                totalInquiries: total || 0,
                todayInquiries: todayCount || 0,
                pendingInquiries: pending || 0,
            });
        } catch (error) {
            console.error('Error fetching stats:', error);
        } finally {
            setLoading(false);
        }
    };

    const statCards = [
        {
            title: '전체 문의',
            value: stats.totalInquiries,
            icon: MessageSquare,
            color: 'text-blue-400',
            bgColor: 'bg-blue-500/10',
        },
        {
            title: '오늘 문의',
            value: stats.todayInquiries,
            icon: TrendingUp,
            color: 'text-green-400',
            bgColor: 'bg-green-500/10',
        },
        {
            title: '대기 중',
            value: stats.pendingInquiries,
            icon: Clock,
            color: 'text-orange-400',
            bgColor: 'bg-orange-500/10',
        },
    ];

    return (
        <AdminLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">대시보드</h1>
                    <p className="text-text-muted">CretoWorks 관리자 대시보드에 오신 것을 환영합니다</p>
                </div>

                {loading ? (
                    <div className="text-white">Loading...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {statCards.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-grad-surface border border-glass-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                                            <Icon className={stat.color} size={24} />
                                        </div>
                                    </div>
                                    <h3 className="text-text-muted text-sm mb-1">{stat.title}</h3>
                                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className="bg-grad-surface border border-glass-border rounded-xl p-6">
                    <h2 className="text-xl font-bold text-white mb-4">빠른 시작</h2>
                    <div className="space-y-3">
                        <a
                            href="/admin/inquiries"
                            className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-white font-medium mb-1">문의 관리</h3>
                            <p className="text-text-muted text-sm">고객 문의를 확인하고 관리합니다</p>
                        </a>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
