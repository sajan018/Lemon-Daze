import { useContext, useState } from "react";
import GlobalApi from "../../Api/GlobalApi";
import { Link, useNavigate } from "react-router";
import { authContext } from "../../context/authContext";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUser } = useContext(authContext);
    const navigate = useNavigate();
    function registerUser() {
        const User = {
            name: username,
            email: email,
            password: password
        }
        if (!username || !email || !password) {
            alert("⚠️ All fields are required!");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Invalid email format');
            return;
        }
        GlobalApi.createUser(User)
            .then(res => {
                console.log("User registered", res.data)
                setUsername("");
                setEmail("");
                setPassword("");
                localStorage.setItem('token', JSON.stringify(res.data));
                setUser(res.data);
                localStorage.setItem("isAuthenticated", true);
                navigate('/');
            })
            .catch(err => {
                console.error("Registration failed", err.response?.data)
                if (err.response?.data?.message) {
                    alert(`❌ ${err.response.data.message}`);
                } else {
                    alert("❌ Something went wrong. Please try again.");
                }
            });
    }


    return (
        <div className="">
            {user ? navigate('/')
                :
                <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">Create Your Account</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                autocomplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Full Name" />
                                            <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name</label>
                                        </div>
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
                                                onClick={registerUser}
                                                className="w-full bg-cyan-400 text-white rounded-full px-5 py-1 my-2">Sign Up</button>
                                        </div>
                                        <p>already have account ? <Link className="text-[15px] bg-red-300 rounded-xl px-5 py-1" to="/login">login</Link></p>
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
export default Register;