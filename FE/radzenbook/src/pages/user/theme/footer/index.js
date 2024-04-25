import { memo } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram
} from "react-icons/fa";

const Footer = () => {
    return (<footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'>
                    <div className='footer_about'>
                        <h1 className='footer_about_logo'>RadzenBook</h1>
                        <ul>
                            <li>Address: 313 Truong Chinh</li>
                            <li>Phone: 0398204444</li>
                            <li>Email: taikhoancuaban203@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                    <div className='footer_widget'>
                        <h6>Store</h6>
                        <ul>
                            <li>
                                <Link to="">Contact</Link>
                            </li>
                            <li>
                                <Link to="">About us</Link>
                            </li>
                            <li>
                                <Link to="">Business Products</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="">Account Infomation</Link>
                            </li>
                            <li>
                                <Link to="">Cart</Link>
                            </li>
                            <li>
                                <Link to="">Wish List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                    <div className='footer_widget'>
                        <h6>Promotions & offers</h6>
                        <p>Sign up to receive information here</p>
                        <form action="#">
                            <div className='input-group'>
                                <input type="text" placeholder='Enter Email'/>
                                <button type="submit" className='button-submit'>
                                    Register
                                </button>
                            </div>
                            <div className='footer_widget_social'>
                                <div>
                                    <FaFacebookF/>
                                </div>
                                <div>
                                    <FaYoutube/>
                                </div>
                                <div>
                                    <FaInstagram/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </footer>)



}

export default memo(Footer);