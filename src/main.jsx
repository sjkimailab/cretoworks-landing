import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import './i18n'

console.log("App initializing...");
const rootElement = document.getElementById('root');
console.log("Root element found:", !!rootElement);

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
  console.log("App render called.");
} else {
  console.error("Root element not found!");
}
