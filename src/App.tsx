import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import InitialPage from "./pages/initialPage/InitialPage";
import GlobalStyles from "./styles/GlobalStyles";
import TestPage from "./pages/testPage/TestPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<InitialPage />} />
      <Route path="testPage/:id" element={<TestPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
