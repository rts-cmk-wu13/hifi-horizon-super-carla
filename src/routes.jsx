import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './page/Home';
import About from './page/About';
import Post from './page/Post';
import Layout from './layout';


export default function Routes() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "post", element: <Post /> },
                { path: "post/:id", element: <Post /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />
}