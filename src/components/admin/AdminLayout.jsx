import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, LogOut, MessageSquare } from 'lucide-react';

const AdminLayout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('admin_auth');
        navigate('/admin');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            {/* Sidebar */}
            <aside style={{
                width: '260px',
                borderRight: '1px solid var(--color-glass-border)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ marginBottom: '3rem', fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    CretoWorks Admin
                </div>

                <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <NavItem to="/admin/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
                    <NavItem to="/admin/inquiries" icon={<MessageSquare size={20} />} label="Inquiries" />
                    {/* <NavItem to="/admin/posts" icon={<FileText size={20} />} label="Posts" /> */}
                    {/* <NavItem to="/admin/settings" icon={<Settings size={20} />} label="Settings" /> */}
                </nav>

                <button
                    onClick={handleLogout}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem',
                        color: 'var(--color-text-muted)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left'
                    }}
                >
                    <LogOut size={20} />
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                <Outlet />
            </main>
        </div>
    );
};

const NavItem = ({ to, icon, label }) => (
    <Link
        to={to}
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem',
            borderRadius: '8px',
            color: 'var(--color-white)',
            textDecoration: 'none',
            transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
        {icon}
        <span>{label}</span>
    </Link>
);

export default AdminLayout;
