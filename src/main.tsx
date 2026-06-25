import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './routers/Router.tsx' // Importamos a rota que criamos isolada
import './index.css'
import { RouterProvider } from "react-router-dom";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)