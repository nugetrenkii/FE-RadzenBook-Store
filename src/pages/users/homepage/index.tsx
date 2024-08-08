import feaImg2 from "../../../assets/users/images/featured/jjk-vol11.jpg";
import feaImg3 from "../../../assets/users/images/featured/kny.jpg";
import feaImg4 from "../../../assets/users/images/featured/hero-academy.jpg";
import feaImg11 from "../../../assets/users/images/featured/fire_force.jpg";
import feaImg12 from "../../../assets/users/images/featured/doraemon.jpg";

import React, { memo } from "react";
import Carousel from "react-multi-carousel";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./style.scss";
import { featProducts } from "../../../utils/common";
import { ProductCard } from "../../../component";

interface Product {
  id: number;
  img: string[];
  name: string;
  price: number;
  quantity: number;
}

interface FeaturedProducts {
  [key: string]: {
    title: string;
    products: Product[];
  };
}

const HomePage: React.FC = () => {
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

  const renderFeaturedProducts = (data: FeaturedProducts) => {
    const tabList: JSX.Element[] = [];
    const tabPanels: JSX.Element[] = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel: JSX.Element[] = [];
      data[key].products.forEach((item, productIndex) => {
        tabPanel.push(
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={productIndex}>
            <ProductCard id={item.id} img={item.img} name={item.name} price={item.price} quantity={item.quantity} />
          </div>
        );
      });

      tabPanels.push(
        <TabPanel key={index}>
          <div className="row">{tabPanel}</div>
        </TabPanel>
      );
    });

    return (
      <Tabs defaultIndex={0}>
        <TabList>{tabList}</TabList>
        {tabPanels}
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
        <Carousel responsive={responsive} className="categories__slider">
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
    </>
  );
};

export default memo(HomePage);
