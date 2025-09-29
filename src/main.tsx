import './main.css'

import { StrictMode } from 'react'
import { RouterProvider } from 'react-router'
import { createRoot } from 'preact/compat/client'
import { createHashRouter } from 'react-router'
import { mainRoutes } from './routes/mainRoutes'
import { I18nProvider } from './i18n'

const router = createHashRouter([
    ...mainRoutes
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <I18nProvider>
            <RouterProvider router={router} />
        </I18nProvider>
    </StrictMode>,
)