import { memo, useState } from 'react'
import './style.scss'
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaUserCircle,
    FaShoppingCart,
    FaPhone,
} from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { formatter } from '../../../../utils/fomater';
import { ROUTER } from 'utils/router';

const Header = () => {
    const [isShowCategories, setShowCategories] = useState(true);
    const [menus] = useState([
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

    const [activeKey, setActiveKey] = useState(0); 

    const handleMenuClick = (menuKey) => {
        setActiveKey(menuKey); 
    };

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
                                    <li key={menuKey} className={menuKey === activeKey ? "active" : ""}>
                                        <Link to={menu?.path} onClick={() => handleMenuClick(menuKey)}>
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
            <div className='container'>
                <div className='row hero_category_container'>
                    <div className='col-lg-3 hero_category'>
                        <div className='hero_category_all' onClick={() => setShowCategories(!isShowCategories)}>
                            <IoMenuOutline />
                            Product List
                        </div>
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to="#">Manga/Comic</Link>
                            </li>
                            <li>
                                <Link to="#">Knowledge, science</Link>
                            </li>
                            <li>
                                <Link to="#">Foreign literature</Link>
                            </li>
                            <li>
                                <Link to="#">Vietnamese literature</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-9 hero_search_container'>
                        <div className='hero_search'>
                            <div className='hero_search_form'>
                                <form>
                                    <input type='text' placeholder='What do you want to search?'></input>
                                    <button type='submit'>Search</button>
                                </form>
                            </div>
                            <div className='hero_search_phone'>
                                <div className='hero_search_phone_icon'>
                                    <FaPhone />
                                </div>
                                <div className='hero_search_phone_text'>
                                    <p>039.820.4444</p>
                                    <span>Support 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className='hero_items'>
                            <div className='hero_text'>
                                <span>new book</span>
                                <h2>Promotional discounts <br />up to 50%</h2>
                                <p>Free ship extra</p>
                                <Link to="" className='primary-btn'>
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default memo(Header);