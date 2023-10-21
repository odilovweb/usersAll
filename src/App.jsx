import Home from "./pages/Home";
import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import RooterLayout from "./layouts/RooterLayout";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RooterLayout />}>
        <Route index element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;
