import AccountPage from "./pages/accountPage";
import Homepage from "./pages/homePage";

    const routes = [
      {
        path:"/",
        element: <Homepage/>
      },
      {
        path:"/accounts",
        element:<AccountPage />
      }
    ];
  
  export default routes;
  