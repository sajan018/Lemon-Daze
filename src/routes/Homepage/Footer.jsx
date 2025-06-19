import { BiX } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { DiGithub } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { Link } from "react-router";

function Footer() {
    return (
        <div class="text-center py-6">
            <Link to='/' className="font-bold text-xl"><span className="opacity-60">Lemon</span>Daze</Link>
            <span class="block text-sm text-center text-gray-500">© 2021-2022 Landwind™. All Rights Reserved.
            </span>

            <ul class="flex justify-center mt-5 space-x-5">
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <ImInstagram />
                </li>
                <li>
                    <BsTwitter />
                </li>
                <li>
                    <DiGithub />
                </li>
                <li>
                    <BiX />
                </li>
            </ul>
        </div>
    )
}
export default Footer;