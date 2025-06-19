import { useContext } from "react";
import { authContext } from "./context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
      <button className="px-2"><Link to='/addProduct'>Want to Sell</Link></button>
    )
  }
}


  return (
    <div className="max-w-[1500px] mx-auto">
     <div className="h-[40px] bg-slate-100 flex items-center justify-between px-10 py-8">
      <Link to='/' className="font-bold text-xl">Lemon Daze</Link>
      <div>
        {user ? (
            <div className="flex items-center gap-2">
                <div>{checkPath()}</div>
                 <button onClick={logout} className="px-4 py-1 bg-red-500 text-white rounded">Logout</button>
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
