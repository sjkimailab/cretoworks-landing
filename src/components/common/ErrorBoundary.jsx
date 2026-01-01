import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary-state" style={{ padding: '40px', color: '#ff4d4d', background: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong.</h1>
                    <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>We apologize for the inconvenience. Please try refreshing the page.</p>
                    <pre style={{ background: '#0f172a', padding: '20px', borderRadius: '12px', overflow: 'auto', maxWidth: '100%', color: '#64748b', fontSize: '0.875rem' }}>
                        {this.state.error?.toString()}
                    </pre>
                    <button
                        onClick={() => window.location.reload()}
                        style={{ marginTop: '2rem', padding: '12px 24px', background: '#f97316', color: 'white', borderRadius: '100px', fontWeight: 'bold' }}
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
