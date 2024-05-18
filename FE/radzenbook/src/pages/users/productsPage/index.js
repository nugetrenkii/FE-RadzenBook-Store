import { memo } from "react";
import BreadcrumbUS from "pages/users/theme/breadcrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { categories } from "utils/common";
import { ROUTERS } from "utils/router";
import { ProductCard } from "component";
import { allProducts } from "utils/allProducts";

const ProductsPage = () => {

  const sorts = [
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];

  const handleAddToCart = (id) => {
    // Xử lý thêm sản phẩm vào giỏ hàng ở đây
    console.log(`Added product ${id} to cart`);
  };

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
              {allProducts.map((item, key) => (
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={key}>
                  <ProductCard
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    onAddToCart={handleAddToCart}
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
