import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
const Layout = () => {
  return (
    <div className=" bg-gradient-to-r from-brown-light-30 to-brown-light-20 min-h-screen -z-50">
      <Navigation />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
