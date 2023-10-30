import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Root,
  Dashboard,
  AddEmployee,
  NotFound,
  Employers,
  SingleEmployer,
} from "./routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/addEmployee",
        element: <AddEmployee />,
      },
      {
        path: "/addEmployee/:empId",
        element: <AddEmployee />,
      },
      {
        path: "/employers",
        element: <Employers />,
      },
      {
        path: "/employers/:devName",
        element: <SingleEmployer />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
