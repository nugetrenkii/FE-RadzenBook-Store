import { memo } from "react";
import BreadcrumbUS from "pages/users/theme/breadcrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { categories } from "utils/common";
import { ROUTERS } from "utils/router";
// import featured product
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
import { ProductCard } from "component";

const ProductsPage = () => {
  const products = [
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
        name: "My Hero Academia",
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

  const sorts = [
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];

  return (
    <>
      <BreadcrumbUS name={"Sản phẩm"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
              <div className="sidebar__item">
                <h2>Tìm kiếm</h2>
                <input type="text" />
              </div>
              <div className="sidebar__item">
                <h2>Mức giá</h2>
                <div className="price-range-wrap">
                  <div>
                    <p>Từ:</p>
                    <input min={0} type="number" />
                  </div>
                  <div>
                    <p>Đến:</p>
                    <input min={0} type="number" />
                  </div>
                </div>
              </div>
              <div className="sidebar__item">
                <h2>Sắp xếp</h2>
                <div className="tags">
                  {sorts.map((item, key) => (
                    <div
                      className={`tag ${key === 0 ? "active" : ""}`}
                      key={key}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar__item">
                <h2>Thể loại khác</h2>
                <ul>
                  {categories.map((name, key) => (
                    <li key={key}>
                      <Link to={ROUTERS.USER.PRODUCTS} key={key}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className="row pl-10">
              {products.map((item, key) => (
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={key}>
                  <ProductCard
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductsPage);
