import { Link } from "react-router";
import { useContext, useState } from "react";
import GlobalApi from "../../Api/GlobalApi";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { user, setUser } = useContext(authContext);
    const navigate = useNavigate();
    function loginUser() {
        const data = {
            email: email,
            password: password
        }
        GlobalApi.CheckLogin(data)
            .then(res => {
                console.log("login successfully", res.data)
                setEmail("");
                setPassword("");
                localStorage.setItem('token', JSON.stringify(res.data));
                setUser(res.data);
                localStorage.setItem("isAuthenticated", true);
                navigate('/');
            })
            .catch(err => {
                console.error("login failed", err.response?.data)
                setError(err.response?.data);
                if (err.response?.data?.message) {
                    alert(`❌ ${err.response.data.message}`);
                } else {
                    alert("❌ Something went wrong. Please try again.");
                }
            });
    }
    return (
        <div>
            {user ? navigate('/') :
                <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">Login Your Account</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                                autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                            <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                            <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>

                                        <div className="relative">
                                            <button
                                                onClick={loginUser}
                                                className="w-full bg-cyan-400 text-white rounded-full px-5 py-1 my-2">login</button>
                                        </div>
                                        <p>Don't have account ? <Link className="text-[15px] bg-red-300 rounded-xl px-5 py-1" to="/signup">signin</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}
export default Login;