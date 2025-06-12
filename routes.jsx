import { createBrowserRouter, RouterProvider } from 'react-router'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "post", element: <Post /> },
            { path: "post/:id", element: <Post /> },
            { path: "postId/", element: <PostId /> },
        ],
    },
]);
