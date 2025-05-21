import { Link } from "react-router-dom";

import Iconlogo from "../assets/logo2.png";

function Navbar() {
  return (
    <div className=" flex overflow-x-hidden">
      <div className=" flex bg-teal-600 dark:bg-teal-900 gap-96 justify-between px-60 -ml-26 w-max ">
        <div className=" flex gap-6 p-2 w-max text-white text-lg">
          <div className=""></div>
          <div className=" size-12 justify-center items-center p-2 hover:fill-teal-500">
            <a href="">
              <img src={Iconlogo} alt="" />
            </a>
          </div>
          <div className=" flex gap-1.5  justify-center items-center p-1  hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500 ">
            <i class="bx bx-home"></i>
            <Link to="/Page2">
              <a className=" flex gap-1.5" href="">
                <h1>home</h1>
              </a>
            </Link>
          </div>
          <div className=" flex gap-1.5  justify-center items-center p-2 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500   ">
            <i class="bx bx-play-circle"></i>
            <Link to="/Page2">
              <a className=" flex gap-1.5 " href="">
                <h1>Kelas</h1>
              </a>
            </Link>
          </div>
          <div className=" flex gap-1.5  justify-center items-center p-2 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500   ">
            <i class="bx bxs-file-doc"></i>
            <Link to="/Page2">
              <a className=" flex gap-1.5 " href="">
                <h1>Tutorial</h1>
              </a>
            </Link>
          </div>
          <div className=" flex gap-1.5  justify-center items-center p-2 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500   ">
            <i class="bx bx-book-open"></i>
            <Link to="/Page2">
              <a className=" flex gap-1.5 " href="">
                <h1>Buku</h1>
              </a>
            </Link>
          </div>
          <div className=" flex gap-1.5  justify-center items-center p-2 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500   ">
            <i class="bx bxl-discord-alt"></i>
            <Link to="/Page2">
              <a className=" flex gap-1.5 " href="">
                <h1>Discord</h1>
              </a>
            </Link>
          </div>
        </div>
        <div className=" flex gap-5 p-1 w-max   justify-center items-center text-white ">
          <Link to="/Page2">
            <a href="">
              <i className="  hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-full active:bg-teal-500 p-3 text-base bx bx-search"></i>
            </a>
          </Link>
          <Link to="/Page2">
            <a href="">
              <i className="  hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-full active:bg-teal-500 p-3 text-base bx bx-sun"></i>
            </a>
          </Link>
          <div className=" bg-teal-500 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500 p-1.5 text-base text-center">
            <h1>
              <a href="">Join Newsletter</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
