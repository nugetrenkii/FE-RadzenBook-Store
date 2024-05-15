import cate1 from 'assets/users/images/categories/jjk1.jpg'
import cate2 from 'assets/users/images/categories/jjk2.jpg'
import cate3 from 'assets/users/images/categories/jjk3.jpg'
import cate4 from 'assets/users/images/categories/jjk4.jpg'
import BreadcrumbUS from "pages/users/theme/breadcrumb";
import { memo } from "react";
import {
  AiOutlineCopy,
  AiOutlineEye,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { formatter } from "utils/formater";
import "./style.scss";
import { featProducts } from "utils/common";
import { ProductCard, Quantity } from "component";

const ProductsDetailPage = () => {
  const imgs = [cate1, cate2, cate3];
  return (
    <>
      <BreadcrumbUS name={"Chi tiết sản phẩm"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 product__details__pic">
            <img src={cate4} alt="product-pic" />
            <div className="main">
              {imgs.map((item, key) => (
                <img key={key} src={item} alt="product-pic" />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 product__details__text">
            <h2>Jujutsu Kaisen</h2>
            <div className="seen-icon">
              <AiOutlineEye />
              {` 10.123.434 (lượt đã xem)`}
            </div>
            <h3 className="product__details__quantity">{formatter(20000000)}</h3>
            <p>
            BookStack nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống BookStack trên toàn quốc.
            </p>
            <Quantity />
            <ul>
              <li>
                <b>Tình trạng:</b> <span>Còn hàng</span>
              </li>
              <li>
                <b>Số lượng:</b> <span>20</span>
              </li>
              <li>
                <b>Chia sẻ:</b>{" "}
                <span>
                  <AiOutlineFacebook />
                  <AiOutlineLinkedin />
                  <AiOutlineCopy />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="product__details__tab">
          <h4>Thông tin chi tiết</h4>
          <ul>
            <li>
              <p>
              Tác giả: 	芥見 下々&nbsp;
              </p>
            </li>
            <li>
              <p>NXB:	Shueisha</p>
            </li>
            <li>
              <p>
              Năm XB:	2020
              </p>
            </li>
            <li>
              <p>Ngôn Ngữ:	Tiếng Nhật</p>
            </li>
            <li>
              <p>Số trang:	192</p>
            </li>
            <li>
              <p>Hình thức:	Bìa Mềm</p>
            </li>
            <li>
              <p>Sản phẩm bán chạy nhất: 	Top 100 sản phẩm Manga Books bán chạy của tháng</p>
            </li>
          </ul>
        </div>
        <div className="section-title">
          <h2>Sản phẩm tương tự</h2>
        </div>
        <div className="row">
          {featProducts.all.products.map((item, key) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={key}>
              <ProductCard img={item.img} name={item.name} price={item.price} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(ProductsDetailPage);
