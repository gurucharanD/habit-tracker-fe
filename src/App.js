import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home';
import Register from './components/Auth/register';
import Login from "./components/Auth/login";
import Analytics from './components/user/analytics';
import HabitsList from "./components/habit/habitsList";
import Profile from "./components/user/profile";
import PageNotFound from "./components/pageNotFound";
import { useSelector } from "react-redux";


function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const router = createBrowserRouter([
    {
      path: "/",
      element: !isLoggedIn ? <Login /> : <Navigate to="home" />,
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
    },
    {
      path: "*",
      element: <PageNotFound></PageNotFound>
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
