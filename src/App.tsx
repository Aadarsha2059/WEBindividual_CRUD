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
