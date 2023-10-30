import { Outlet } from "react-router-dom";
import {Header,Footer} from "../../components"

const Root = () => {
  return (
    <>
      <Header />
      {/* for sharing in between components */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
