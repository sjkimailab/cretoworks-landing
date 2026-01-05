import React from 'react';

const Inquiries = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-white)' }}>Inquiries</h1>
            <div style={{
                backgroundColor: 'var(--color-card)',
                borderRadius: '12px',
                border: '1px solid var(--color-glass-border)',
                padding: '2rem',
                color: 'var(--color-text-muted)'
            }}>
                <p>문의 내역 리스트가 여기에 표시됩니다. (Supabase 연동 필요)</p>
            </div>
        </div>
    );
};

export default Inquiries;
