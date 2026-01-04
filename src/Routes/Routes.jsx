import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home';
import ProjectDetails from '../pages/ProjectDetails';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Component এর বদলে element ব্যবহার করুন
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "project/:id", // / কেটে শুধু project/:id ও রাখা যায়
            element: <ProjectDetails />
        }
    ]
  },
]);