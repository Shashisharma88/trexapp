import BackgroundImg from "../../assets/bgImg.png";
import { NavBar } from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div
        className="body_bg"
        style={{
          backgroundImage: `url(${BackgroundImg.src})`,
          width: "100%",
          backgroundSize: "cover",
            backgroundPosition: "top",
        }}>
        <div className="max-w-[1170px] mx-auto overflow-x-hidden">
          <NavBar />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
