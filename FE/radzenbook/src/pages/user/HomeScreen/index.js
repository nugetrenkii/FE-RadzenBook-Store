import { memo } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { FaRegEye, FaShoppingCart  } from "react-icons/fa";

import catImg1 from "assets/user/image/categories/jjk.jpg";
import catImg2 from "assets/user/image/categories/aot.jpg";
import catImg3 from "assets/user/image/categories/frieren.jpg";
import catImg4 from "assets/user/image/categories/dragon-ball.jpg";
import catImg5 from "assets/user/image/categories/bocchi-the-rock.jpg";

import feaImg1 from "assets/user/image/featured-product/conan.jpg";
import feaImg2 from "assets/user/image/featured-product/jjk-vol11.jpg";
import feaImg3 from "assets/user/image/featured-product/kny.jpg";
import feaImg4 from "assets/user/image/featured-product/hero-academy.jpg";
import feaImg5 from "assets/user/image/featured-product/naruto.jpg";
import feaImg6 from "assets/user/image/featured-product/onepiece.jpg";
import feaImg7 from "assets/user/image/featured-product/spyXfamily.jpg";
import feaImg8 from "assets/user/image/featured-product/thi-tran-meo.jpg";
import feaImg9 from "assets/user/image/featured-product/solo_level.jpg";
import feaImg10 from "assets/user/image/featured-product/duoc-su-tu-su.jpg";
import feaImg11 from "assets/user/image/featured-product/fire_force.jpg";
import feaImg12 from "assets/user/image/featured-product/doraemon.jpg";

import './style.scss';
import { Link } from 'react-router-dom';
import { formatter } from 'utils/fomater';

const HomeScreen = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const sliderItems = [
        {
            bgImg: catImg1,
            name: 'Jujutsu Kaisen'
        },
        {
            bgImg: catImg2,
            name: 'Attack on Titan'
        },
        {
            bgImg: catImg3,
            name: 'Frieren - Pháp Sư Tiễn Táng'
        },
        {
            bgImg: catImg4,
            name: 'Dragon Ball'
        },
        {
            bgImg: catImg5,
            name: 'Bocchi The Rock!'
        },
    ]

    const featuredProducts = {
        all: {
            title: "All",
            product: [
                {
                    img: feaImg1,
                    name: "Conan",
                    price: 25000,
                },
                {
                    img: feaImg2,
                    name: "Jujutsu Kaisen",
                    price: 30000,
                },
                {
                    img: feaImg3,
                    name: "Kimetsu no Yaiba",
                    price: 30000,
                },
                {
                    img: feaImg4,
                    name: "Hero Academy",
                    price: 30000,
                },
                {
                    img: feaImg5,
                    name: "Naruto",
                    price: 30000,
                },
                {
                    img: feaImg6,
                    name: "One Piece",
                    price: 30000,
                },
                {
                    img: feaImg7,
                    name: "Spy X Family",
                    price: 30000,
                },
                {
                    img: feaImg8,
                    name: "Thi Tran Meo",
                    price: 30000,
                },
                {
                    img: feaImg9,
                    name: "Solo Leveling",
                    price: 397100,
                },
                {
                    img: feaImg10,
                    name: "Dược Sư Tự Sự",
                    price: 36660,
                },
                {
                    img: feaImg11,
                    name: "Fire Force",
                    price: 40850,
                },
                {
                    img: feaImg12,
                    name: "ドラえもん 26 - Doraemon 26",
                    price: 143450,
                },
            ]
        },
        trendByDay: {
            title: "Trends by day",
            product: [
                {
                    img: feaImg3,
                    name: "Kimetsu no Yaiba",
                    price: 35000,
                },
                {
                    img: feaImg1,
                    name: "Conan",
                    price: 25000,
                },
                {
                    img: feaImg2,
                    name: "Jujutsu Kaisen",
                    price: 30000,
                },
                {
                    img: feaImg9,
                    name: "Solo Leveling",
                    price: 397100,
                },
            ]
        },
        sale: {
            title: "Sale",
            product: [
                {
                    img: feaImg3,
                    name: "Kimetsu no Yaiba",
                    price: 35000,
                },
                {
                    img: feaImg6,
                    name: "One Piece",
                    price: 30000,
                },
                {
                    img: feaImg7,
                    name: "Spy X Family",
                    price: 30000,
                },
                {
                    img: feaImg8,
                    name: "Thi Tran Meo",
                    price: 30000,
                },
                {
                    img: feaImg9,
                    name: "Solo Leveling",
                    price: 397100,
                },
                {
                    img: feaImg10,
                    name: "Dược Sư Tự Sự",
                    price: 36660,
                },
                {
                    img: feaImg11,
                    name: "Fire Force",
                    price: 40850,
                },
                {
                    img: feaImg12,
                    name: "ドラえもん 26 - Doraemon 26",
                    price: 143450,
                },
            ]
        },
    }

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);

            const tabPanel = [];
            data[key].product.forEach((item, i) => {
                tabPanel.push(<div className='col-lg-3' key={i}>
                    <div className='featured_item'>
                        <div className='featured_item_pic' 
                        style={{
                            backgroundImage: `url(${item.img})`
                        }}>
                            <ul className='featured_item_pic_hover'>
                                <li>
                                    <FaRegEye/>
                                </li>
                                <li>
                                    <FaShoppingCart />
                                </li>
                            </ul>

                        </div>
                        <div className='featured_item_text'>
                            <h6>
                                <Link to="">{item.name}</Link>
                            </h6>
                            <h5>{formatter(item.price)}</h5>
                        </div>
                    </div>
                    </div>);
            });
            tabPanels.push(tabPanel);
        })
        return (
            <Tabs defaultChecked={1}>
                <TabList>{tabList}</TabList>
                {
                    tabPanels.map((item, key) => (
                        <TabPanel key={key}>
                            <div className='row'>{item}</div>
                        </TabPanel>
                    ))
                }

            </Tabs>
        )

    }

    return (
        <>
            {/*Categories begin*/}
            <div className='container container_categories_slider'>
                <Carousel responsive={responsive} className='categories_slider'>
                    {
                        sliderItems.map((item, key) => (
                            <div className='categories_slider_item' style={{ backgroundImage: `url(${item.bgImg})` }}
                                key={key}
                            >
                                <p>{item.name}</p>
                            </div>
                        ))
                    }

                </Carousel>
            </div>
            {/*Categories end*/}
            {/* Featured begin */}
            <div className='container'>
                <div className='featured'>
                    <div className='section-title'>
                        <h2>Featured books</h2>
                    </div>
                    {renderFeaturedProducts(featuredProducts)}
                </div>
            </div>
            {/* Featured end */}
        </>
    );
}

export default memo(HomeScreen);