import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./Layout"
import './App.css';
import LandingForm from "./pages/form/landingForm";

const routes = [{
  path: "/",
    element: <Layout />,
      errorElement: <h1>Page not Found!</h1>,
        children: [
      {
            path: "/",
            element: <h1>Home Page</h1>
      },{
            path:"/audit",
            element:<h1>Audits Page</h1>
      },{
            path:"/report",
            element:<h1>Reports page</h1>
      },{
            path:"/form",
            element:<LandingForm />
      },{
            path:"/dashboard",
            element: (<><h1 className="text-red-500">Dashboard page</h1></>)
      }]

      }];
const router = createBrowserRouter(routes);
function App() {
return (<RouterProvider router={router} /> )
}
export default App
                                                                                                                        