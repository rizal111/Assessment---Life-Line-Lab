import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "page/Main";
import Friends from "page/Friends";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
