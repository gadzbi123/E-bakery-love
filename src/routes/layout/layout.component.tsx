import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation/navigation.component";
const Layout = () => {
  return (
    <div className=" bg-gradient-to-r from-brown-light-30 to-brown-light-20 min-h-screen">
      <Navigation />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
