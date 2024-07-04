import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Master from "./admin";
import Book from "./admin/book";
import BookForm from "./admin/book/form";
import User from "./admin/user";
import UserForm from "./admin/user/form";
import Home from "./public/home";
import Login from "./public/login";
import Register from "./public/register";
import SingupDonar from "./public/signupdonor";
import LoginSeeker from "./public/loginseeker";
import SignupSeeker from "./public/signupseeker";
import DonorsPage from "./public/donorspage";
import Contact from "./public/contact";
import SeekersPage from "./public/seekerspage";
import SuggestionsPage from "./public/suggestion";





const queryClient = new QueryClient();

function App() {
  const privateRoutes = [
    {
      path: "/admin",
      element: <Master />,
      children: [
        { path: "/admin/book", element: <Book /> },
        { path: "/admin/book/add", element: <BookForm /> },
        { path: "/admin/book/edit/:id", element: <BookForm /> },
        { path: "/admin/user", element: <User /> },
        { path: "/admin/user/add", element: <UserForm /> },
      ],
    },
  ];

  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {path:"/singupdonar",element:<SingupDonar/>},
    {path:"/loginseeker",element:<LoginSeeker/>},
    {path:"/signupseeker",element:<SignupSeeker/>},
    {path:"/donorspage",element:<DonorsPage/>},
    {path:"/seekerspage",element:<SeekersPage/>},
    {path:"/suggestions",element:<SuggestionsPage/>},
    {path:"/contact",element:<Contact/>},
    { path: "*", element: <>Unauthorized</> },
  ];

  
  const isLoggedIn = false;

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={createBrowserRouter(isLoggedIn ? privateRoutes : publicRoutes)}
      />
    </QueryClientProvider>
  );
}

export default App;
