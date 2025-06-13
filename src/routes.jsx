import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layout';
import Home from './page/Home';
import Product from './page/Product';
import ProductDetails from './page/ProductDetails';


export default function Routes() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "product", element: <Product /> },
                { path: "product-details", element: <ProductDetails /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />
}