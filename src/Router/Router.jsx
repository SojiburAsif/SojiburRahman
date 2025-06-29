import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Header from "../Component/Header";
import Banner from "../Component/Banner";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                Component: <Header></Header>
            },
            {
                Component:<Banner></Banner>
                ,
                path: '/banner'
            }
        ]
    },
]);