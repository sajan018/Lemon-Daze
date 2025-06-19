import { useContext } from "react";
import { authContext } from "./context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
function Header({children}) {
  const { user, setUser } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const currentpath = location.pathname;

  
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  }

function checkPath(){
    if(currentpath!='/addProduct'){
    return (
      <button className="py-2 bg-lime-500 px-5 rounded-full text-[12px] xs:text-sm  text-gray-700 font-semibold hover:font-bold"><Link to='/addProduct'>Want to Sell ?</Link></button>
    )
  }
}


  return (
    <div className="max-w-[1500px] mx-auto">
     <div className="h-[40px] flex items-center justify-between px-3 sm:px-10 py-10">
      <Link to='/' className="font-bold text-xl"><span className="opacity-60">Lemon</span>Daze</Link>
      <div>
        {user ? (
            <div className="flex items-center gap-2">
                <div>{checkPath()}</div>
                 <button onClick={logout} className="flex italic ... items-center justify-center gap-1 px-4 py-1 border text-gray-800 border-gray-500 rounded-2xl text-sm hover:bg-red-500 hover:text-white">Logout <FaArrowAltCircleRight /></button>
            </div>
         
        ) : (
          <Link to="/login">
            <button className="px-8 py-1 bg-black rounded-xl text-white">Login</button>
          </Link>
        )}
      </div>
    </div>
    {children}
    </div>
   
  );
}

export default Header;
