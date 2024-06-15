import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./home";
import Book from "./admin/book";
import BookForm from "./admin/book/form";
import User from "./admin/user";
import UserForm from "./admin/user/form";
import Login from "./public/login";
import Register from "./public/register";
import Index from "./admin/seeker";

import SeekerForm from "./admin/seeker/form";

const queryClient = new QueryClient();

function App() {
  const privateRoutes = [
    {
      path: "/admin",
      element: <Index />,
      children: [
        { path: "book", element: <Book /> },
        { path: "book/add", element: <BookForm /> },
        { path: "book/edit/:id", element: <BookForm /> },
        { path: "user", element: <User /> },
        { path: "user/add", element: <UserForm /> },
      ],
    },
  ];

  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <>Unauthorized</> },
  ];

  // TODO: Check accessToken then return true or false
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
