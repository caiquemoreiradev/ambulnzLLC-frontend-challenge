import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Home } from "./pages/Home"
import { CompletedOrder } from "./pages/CompletedOrder"

export const Router = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/completed-order',
            element: <CompletedOrder />
        }
    ])

    return (
        <RouterProvider router={routes} />
    )
}