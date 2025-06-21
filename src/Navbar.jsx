import { useContext, useState } from "react";
import { authContext } from "./context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaArrowAltCircleRight, FaLongArrowAltLeft } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import Footer from "./Footer";
import { useLoader } from "./context/LoaderContext";
function Header({ children }) {
  const { user, setUser } = useContext(authContext);
  const [toggle, setToggle] = useState(false);
  const { loader } = useLoader();
  const navigate = useNavigate();
  const location = useLocation();
  const currentpath = location.pathname;
  function Toggle() {
    setToggle(!toggle);
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    Toggle();
  }

  function checkPathForCart() {
    if (currentpath != '/Cart') {
      return (
        <div>
          <button className="flex italic items-center justify-center gap-1 px-6 py-1 border text-gray-800 border-gray-500 rounded-2xl text-sm hover:bg-red-500 hover:text-white"><Link className="flex gap-2 items-center" to='/Cart'>   Cart<GiSelfLove />  </Link></button>
        </div>
      )
    }
  }

  function checkPathForHome() {
    if (currentpath != '/') {
      return (
        <div>
          <button
            onClick={() => navigate(-1)}  // go back to the previous page
            className="px-2 py-2 text-[10px] xs:text-sm text-white rounded-full hover:bg-gray-600 bg-black transition"
          >
            <FaLongArrowAltLeft />
          </button>
        </div>
      )
    }
  }

  function checkPathForAddProduct() {
    if (currentpath != '/addProduct') {
      return (
        <div>
          <button className="py-2 bg-lime-500 px-5 rounded-full text-[12px] xs:text-sm  text-gray-700 font-semibold hover:font-bold"><Link to='/addProduct'>Want to Sell ?</Link></button>
        </div>
      )
    }
  }

  return (
    <div className={loader ? "hidden" : "flex flex-col max-w-[1500px] mx-auto "}>
      <div className="h-[40px] flex items-center justify-between px-3 sm:px-10 md:px-32 py-10">
        <div className="flex gap-1 items-center">
          {checkPathForHome()}
        <Link to='/' className="font-bold text-xl"><span className="opacity-60">Lemon</span>Daze</Link>
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-2 xs:gap-5">
              <div className="flex items-center gap-3">
                <div className="hidden md:flex">{checkPathForCart()}</div>
                <div>{checkPathForAddProduct()}</div>

              </div>

              <button onClick={Toggle} className="flex items-center justify-center rounded-full bg-gray-600 text-white w-[30px] h-[30px]">{user.user.name[0]}</button>
              {toggle && (
                <div className="absolute md:px-20 mt-32 md:mt-16 md:top-0 flex flex-col justify-center items-center gap-3 right-3">
                  <button
                    onClick={logout}
                    className="flex italic items-center justify-center gap-1 px-4 py-1 border text-gray-800 border-gray-500 rounded-2xl text-sm hover:bg-red-500 hover:text-white"
                  >
                    Logout <FaArrowAltCircleRight />
                  </button>
                  <div onClick={Toggle} className="md:hidden">{checkPathForCart()}</div>
                </div>

              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="px-8 py-1 bg-black rounded-xl text-white">Login</button>
            </Link>
          )}
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Header;
