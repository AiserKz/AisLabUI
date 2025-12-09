import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Layout/AppLayout";
import Home from "./pages/Home";
import Tests from "./pages/Tests";
import Themes from "./pages/Themes";
import NativeUi from "./pages/NativeUi";
import Animations from "./pages/Animations";
import ComponentView from "./pages/ComponentView";
import Labs from "./pages/Labs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/labs",
        element: <Labs />,
      },
      {
        path: "/animate",
        element: <Animations />,
      },
      {
        path: "/native",
        element: <NativeUi />,
      },
      {
        path: "/theme",
        element: <Themes />,
      },
      {
        path: "/tests",
        element: <Tests />,
      },
      {
        path: "*",
        element: <Home />,
      },
      {
        path: "/view/:type/:id",
        element: <ComponentView />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
