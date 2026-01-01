/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    950: '#020617',
                    900: '#0f172a',
                    800: '#1e293b',
                    700: '#334155',
                },
                primary: {
                    DEFAULT: '#f97316',
                    hover: '#ea580c',
                },
                accent: {
                    DEFAULT: '#06b6d4',
                    blue: '#0ea5e9',
                },
                surface: '#0f172a',
                'navy-light': '#1e293b',
                'text-main': '#f8fafc',
                'text-muted': '#94a3b8',
                'text-dim': '#64748b',
                glass: {
                    bg: 'rgba(15, 23, 42, 0.6)',
                    border: 'rgba(255, 255, 255, 0.08)',
                }
            },
            backgroundImage: {
                'grad-primary': 'linear-gradient(135deg, #f97316 0%, #06b6d4 100%)',
                'grad-surface': 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(2, 6, 23, 1) 100%)',
                'grad-border': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
                'grad-accent': 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
            },
            borderRadius: {
                'sm': '8px',
                'md': '16px',
                'lg': '32px',
                'xl': '48px',
            },
            boxShadow: {
                'premium': '0 20px 50px rgba(0, 0, 0, 0.5)',
            },
            blur: {
                'glass': '16px',
            }
        },
    },
    plugins: [],
}
