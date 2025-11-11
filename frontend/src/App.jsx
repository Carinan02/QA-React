import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import NotFoundPage from "./NotFoundPage";
import "./App.css";
import LandingForm from "./pages/form/LandingForm";
import FormPage from "./pages/form/FormPage";
import ConnectionTest from "./ConnectionTest";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <h1>Home Page</h1>,
      },
      {
        path: "/audit",
        element: <h1>Audits Page</h1>,
      },
      {
        path: "/report",
        element: <h1>Reports page</h1>,
      },
      {
        path: "/form",
        element: <LandingForm />,
      },
      {
        path: "/form/:agentName/:formName",
        element: <FormPage />,
      },
      {
        path: "/dashboard",
        element: (
          <>
            <h1 className="text-red-500">Dashboard page</h1>
          </>
        ),
      },
      {
        path: "/profile",
        element: <h1>Profile Page</h1>,
      },
      {
        path: "/connection",
        element: <ConnectionTest />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
