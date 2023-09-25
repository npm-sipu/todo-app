import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./components/RootLayout";
import Homescreen from "./screens/Homescreen";
import Completed from "./screens/Completed";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Homescreen />} />
        <Route path='completed' element={<Completed />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
