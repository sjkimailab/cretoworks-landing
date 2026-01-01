import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n'

console.log("App initializing...");
const rootElement = document.getElementById('root');
console.log("Root element found:", !!rootElement);

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  console.log("App render called.");
} else {
  console.error("Root element not found!");
}
