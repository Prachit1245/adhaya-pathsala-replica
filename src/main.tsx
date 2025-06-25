
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Starting application...');

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found");
  document.body.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui; background: #f3f4f6;">
      <div style="text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #dc2626; margin-bottom: 1rem;">App Loading Error</h1>
        <p style="color: #374151; margin-bottom: 1rem;">Unable to initialize the application.</p>
        <button onclick="window.location.reload()" style="background: #ea580c; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">
          Reload Page
        </button>
      </div>
    </div>
  `;
} else {
  const root = createRoot(rootElement);
  
  try {
    root.render(<App />);
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Failed to render app:', error);
    rootElement.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui; background: #f3f4f6;">
        <div style="text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #dc2626; margin-bottom: 1rem;">Render Error</h1>
          <p style="color: #374151; margin-bottom: 1rem;">Failed to load the application. Please refresh the page.</p>
          <button onclick="window.location.reload()" style="background: #ea580c; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      </div>
    `;
  }
}
