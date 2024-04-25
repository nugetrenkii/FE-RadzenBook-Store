import { memo } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import catImg1 from "assets/user/image/categories/jjk.jpg";
import catImg2 from "assets/user/image/categories/aot.jpg";
import catImg3 from "assets/user/image/categories/frieren.jpg";
import catImg4 from "assets/user/image/categories/dragon-ball.jpg";
import catImg5 from "assets/user/image/categories/bocchi-the-rock.jpg";

import feaImg1 from "assets/user/image/featured-product/conan.jpg";
import feaImg2 from "assets/user/image/featured-product/jjk-vol11.jpg";
import feaImg3 from "assets/user/image/featured-product/kny.jpg";

import './style.scss';

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
            ]
        },
        trendByDay: {
            title: "Trends by day",
            product: [
                {
                    img: feaImg3,
                    name: "Kimetsu no Yaiba",
                    price: 35000,
                }
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
                tabPanel.push(<div key={i}>{item.name}</div>);
            });
            tabPanels.push(tabPanel);
        })
        return (
            <Tabs>
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