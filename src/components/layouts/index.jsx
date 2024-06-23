import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";
const Layout = () => {
  window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden");
  });
  return (
    <div className="App">
      <Sidebar />
      <div className="Page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
      <div className="loader"></div>
    </div>
  );
};
export default Layout;
