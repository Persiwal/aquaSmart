import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import ModulesPage from './pages/ModulesPage'
import ModuleDetailsPage from './pages/ModuleDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/base/layout/Layout'

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/modules" replace />,
      },
      {
        path: '/modules',
        element: <ModulesPage />,
      },
      {
        path: '/modules/:moduleId',
        element: <ModuleDetailsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
