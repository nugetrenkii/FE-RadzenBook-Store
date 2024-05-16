import feaImg1 from "assets/users/images/featured/conan.jpg";
import feaImg2 from "assets/users/images/featured/jjk-vol11.jpg";
import feaImg3 from "assets/users/images/featured/kny.jpg";
import feaImg4 from "assets/users/images/featured/hero-academy.jpg";
import feaImg5 from "assets/users/images/featured/naruto.jpg";
import feaImg6 from "assets/users/images/featured/onepiece.jpg";
import feaImg7 from "assets/users/images/featured/spyXfamily.jpg";
import feaImg8 from "assets/users/images/featured/thi-tran-meo.jpg";
import feaImg9 from "assets/users/images/featured/solo_level.jpg";
import feaImg10 from "assets/users/images/featured/duoc-su-tu-su.jpg";
import feaImg11 from "assets/users/images/featured/fire_force.jpg";
import feaImg12 from "assets/users/images/featured/doraemon.jpg";

import cate4 from 'assets/users/images/categories/jjk4.jpg'

// import banner
import banner1Img from "assets/users/images/banner/banner-1.jpg";
import banner2Img from "assets/users/images/banner/banner-2.jpg";

import { memo } from "react";
import Carousel from "react-multi-carousel";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./style.scss";
import { featProducts } from "utils/common";
import { ProductCard } from "component";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, index) => {
        tabPanel.push(
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
            <ProductCard img={item.img} name={item.name} price={item.price} />
          </div>
        );
      });

      tabPanels.push(tabPanel);
    });

    return (
      <Tabs defaultChecked={1}>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, index) => (
          <TabPanel key={index}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  const sliderItems = [
    {
      bgImage: feaImg2,
      name: "Jujutsu Kaisen",
    },
    {
      bgImage: feaImg3,
      name: "Kimetsu no Yaiba",
    },
    {
      bgImage: feaImg12,
      name: "Doraemon",
    },
    {
      bgImage: feaImg11,
      name: "Fire Force",
    },
    {
      bgImage: feaImg4,
      name: "My Hero Academia",
    },
  ];

  return (
    <>
      {/* Categories Begin */}
      <div className="container container__categories__slider">
        <Carousel
          responsive={responsive}
          className="categories__slider"
          // autoPlay
        >
          {sliderItems.map((item, key) => (
            <div
              key={key}
              className="categories__slider__item"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Categories  End */}
      {/* Featured Begin */}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
      {/* Featured End */}
      {/* Banner Begin */}
      {/* <div className="container">
        <div className="banner">
          <div className="banner__pic">
            <img src={banner1Img} alt="banner" />
          </div>
          <div className="banner__pic">
            <img src={banner2Img} alt="banner" />
          </div>
        </div>
      </div> */}
      {/* Banner End */}
    </>
  );
};

export default memo(HomePage);
