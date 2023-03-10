import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home';
import Register from './components/Auth/register';
import Login from "./components/Auth/login";
import Analytics from './components/user/analytics';
import HabitsList from "./components/habit/habitsList";
import Profile from "./components/user/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    index: true
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        // path: '/habits',
        index: true,
        element: <HabitsList />
      },
      {
        path: 'analytics',
        element: <Analytics></Analytics>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      }
    ]
  }
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
