// Import React and ReactDOM for rendering
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import index.css for styling
import './index.css';

// Import App component for the main application logic
import App from './App';

// Import Canvas from '@react-three/fiber for setting up a 3D canvas
import { Canvas } from '@react-three/fiber'

// Create a root for rendering the application into the 'root' element in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application within a Canvas component for 3D rendering, wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <Canvas shadows>
      <App />
    </Canvas>
  </React.StrictMode>
);
