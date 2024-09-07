import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
    
  )
}

export default Layout;
