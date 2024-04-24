import { memo, useState } from 'react'
import './style.scss'
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaUserCircle,
    FaShoppingCart
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { formatter } from '../../../../utils/fomater';
import { ROUTER } from 'utils/router';

const Header = () => {

    const [menus, setMenus] = useState([
        {
            name: "Home",
            path: ROUTER.USER.HOME,
        },
        {
            name: "Store",
            path: ROUTER.USER.STORE,
        },
        {
            name: "Product",
            path: ROUTER.USER.PRODUCTS,
            isShowSubmenu: false,
            child: [
                {
                    name: "Product 1",
                    path: "",
                },
                {
                    name: "Product 2",
                    path: "",
                },
                {
                    name: "Product 3",
                    path: "",
                },
            ]

        },
        {
            name: "News",
            path: "",
        },
        {
            name: "Contact",
            path: "",
        }
    ])


    return (
        <>
            <div className='header_top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 header_top_left'>
                            <ul>
                                <li>
                                    <CiMail />
                                    taikhoancuaban203@gmail.com
                                </li>
                                <li>
                                    Free ship up to {formatter(500000)}
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
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3'>
                        <div className='header_logo'>
                            <h1>RadzenBook</h1>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <nav className='header_menu'>
                            <ul>
                                {menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>
                                            {menu?.name}
                                        </Link>
                                        {
                                            menu.child && (
                                                <ul className='header_menu_dropdown'>
                                                    {
                                                        menu.child.map((childItem, childKey) => (
                                                            <li key={`${menuKey}-${childKey}`}>
                                                                <Link to={childItem.path}>
                                                                    {childItem.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            )
                                        }
                                    </li>
                                ))
                                }

                                {/* <li>
                                    <Link to="">Product</Link>
                                    <ul>
                                        <li>
                                            Product 1
                                        </li>
                                        <li>
                                            Product 2
                                        </li>
                                        <li>
                                            Product 3
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className='col-xl-3'>
                        <div className='header_cart'>
                            <div className='header_cart_price'>
                                <span>{formatter(999000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <FaShoppingCart />
                                        <span>10</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default memo(Header);