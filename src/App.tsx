import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InitialPage from "./pages/initialPage/InitialPage";
import GlobalStyles from "./styles/GlobalStyles";
import TestPage from "./pages/testPage/TestPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <InitialPage />,
      },
      {
        path: "testPage/:id",
        element: <TestPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
