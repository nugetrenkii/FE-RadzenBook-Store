import { memo } from 'react'
import './style.scss'
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaUserCircle,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header_top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 header_top_left'>
                        <ul>
                            <li>
                                <Link to={""}>
                                    <CiMail />
                                    taikhoancuaban203@gmail.com
                                </Link>
                            </li>
                            <li>
                               Heheheheehehehe
                            </li>
                        </ul>
                    </div>
                    <div className='col-6 header_top_right'>
                        <ul>
                            <li>
                                <Link to={""}>
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaYoutube />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaUserCircle />
                                </Link>
                                <span>Sign In</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Header);