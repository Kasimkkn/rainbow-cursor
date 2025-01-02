import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RainBowCursor from './components/RainBowCursor';
import './styles.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RainBowCursor />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
