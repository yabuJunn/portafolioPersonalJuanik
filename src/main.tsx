import './main.css'

import { StrictMode } from 'react'
import { RouterProvider } from 'react-router'
import { createRoot } from 'preact/compat/client'
import { createHashRouter } from 'react-router'
import { mainRoutes } from './routes/mainRoutes'

const router = createHashRouter([
    ...mainRoutes
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)