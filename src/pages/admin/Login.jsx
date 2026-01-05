import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../components/ContactCTA.css'; // Re-use some styles

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded password for now - acceptable for simple landing page admin
        if (password === 'creto1234!') {
            localStorage.setItem('admin_auth', 'true');
            const from = location.state?.from?.pathname || '/admin/dashboard';
            navigate(from, { replace: true });
        } else {
            setError('비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-white)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '2rem',
                    backgroundColor: 'var(--color-card)',
                    borderRadius: '16px',
                    border: '1px solid var(--color-glass-border)'
                }}
            >
                <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Admin Password"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid var(--color-border)',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>
                    {error && <p style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.875rem' }}>{error}</p>}
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                    >
                        Login
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
