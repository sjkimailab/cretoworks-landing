import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-white)' }}>Dashboard</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <StatCard title="Total Visitors" value="1,234" change="+12.5%" />
                <StatCard title="Inquiries" value="28" change="+4.2%" />
                <StatCard title="Active Projects" value="4" change="0%" />
            </div>

            <div style={{ marginTop: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-white)' }}>Recent Activity</h2>
                <div style={{
                    backgroundColor: 'var(--color-card)',
                    borderRadius: '12px',
                    border: '1px solid var(--color-glass-border)',
                    padding: '2rem',
                    color: 'var(--color-text-muted)'
                }}>
                    No recent activity to display.
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, change }) => (
    <div style={{
        backgroundColor: 'var(--color-card)',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid var(--color-glass-border)'
    }}>
        <h3 style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{title}</h3>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--color-white)' }}>{value}</span>
            <span style={{ color: '#4ade80', fontSize: '0.875rem', marginBottom: '0.4rem' }}>{change}</span>
        </div>
    </div>
);

export default Dashboard;
