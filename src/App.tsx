import React, { useState, useEffect } from "react";
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
import Chatbot from "./public/chatbot";
import Article from "./public/article";
import BookLoader from "./public/BookLoader";
import Chat from "./public/ChatDonorSeeker";
import ChatDonorSeeker from "./public/ChatDonorSeeker";
import TeamSection from "./public/aboutsection";
import AdminPathSala from "./public/adminpathsala";
import DonorsDashboard from "./public/donorsdashboard";
import DonorsProfile from "./public/donorsprofile";
import Settings from "./public/settings";
import SellersPage from "./public/sellerspage";
import DataVisualization from "./public/donorvisualization";
import JobPage from "./public/jobpage";
import ChatBox from "./public/chatbox";
import BuyerDashboard from "./public/buyerdashboard";
import Payment from "./public/payment";
import Esewa from "./public/esewa";
import CashPayment from "./public/cashpayment";


const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

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
    { path: "/singupdonar", element: <SingupDonar /> },
    { path: "/loginseeker", element: <LoginSeeker /> },
    { path: "/signupseeker", element: <SignupSeeker /> },
    { path: "/donorspage", element: <DonorsPage /> },
    { path: "/seekerspage", element: <SeekersPage /> },
    { path: "/suggestions", element: <SuggestionsPage /> },
    { path: "/chatbot", element: <Chatbot /> },
    { path: "/contact", element: <Contact /> },
    { path: "/chatdonorseeker", element: <ChatDonorSeeker /> },
    { path: "/article", element: <Article /> },
    {path:"/teamsection",element:<TeamSection/>},
    {path:"/donorsdashboard",element:<DonorsDashboard/>},
    {path:"/donorsprofile",element:<DonorsProfile/>},
    {path:"/settings",element:<Settings/>},
    {path:"/sellerspage",element:<SellersPage/>},
    {path:"/donorvisualization",element:<DataVisualization/>},
    {path:"/jobpage",element:<JobPage/>},
    {path:"/chatbox",element:<ChatBox/>},
    {path:"/buyerdashboard",element:<BuyerDashboard/>},
    {path:"/payment",element:<Payment/>},
    {path:"/esewa",element:<Esewa/>},
    {path:"/cashpayment",element:<CashPayment/>},
  
  
    
    
    
    
    

    { path: "*", element: <>Unauthorized</> },
  ];

  const isLoggedIn = false;

  const routes = isLoading
    ? [{ path: "*", element: <BookLoader /> }]
    : isLoggedIn
    ? privateRoutes
    : publicRoutes;

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </QueryClientProvider>
  );
}

export default App;
