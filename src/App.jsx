import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./Pages.jsx/Homepage";
import SignUp from "./Pages.jsx/SignUp";
import Login from "./Pages.jsx/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
