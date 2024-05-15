import BreadcrumbUS from "pages/users/theme/breadcrumb";
import { memo } from "react";
import "./style.scss";
import { Quantity } from "component";
import cate1 from 'assets/users/images/categories/jjk1.jpg'
import cate2 from 'assets/users/images/categories/jjk2.jpg'
import cate3 from 'assets/users/images/categories/jjk3.jpg'
import cate4 from 'assets/users/images/categories/jjk4.jpg'
import { AiOutlineClose } from "react-icons/ai";
import { formatter } from "utils/formater";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";

const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const carts = [
    {
      img: cate1,
      name: "Sản phẩm",
      price: 200000,
      quantity: 1,
    },
    {
      img: cate2,
      name: "Sản phẩm",
      price: 10000,
      quantity: 1,
    },
    {
      img: cate3,
      name: "Sản phẩm",
      price: 240500,
      quantity: 1,
    },
    {
      img: cate4,
      name: "Sản phẩm",
      price: 330000,
      quantity: 1,
    },
  ];

  return (
    <>
      <BreadcrumbUS name={"Giỏ hàng"} />
      <div className="container">
        <div className="table__cart">
          <table>
            <thead>
              <tr>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {carts.map((item, key) => (
                <tr key={key}>
                  <td className="shoping__cart__item">
                    <img src={item.img} alt="product-pic" />
                    <h4>{`${item.name} ${key + 1}`}</h4>
                  </td>
                  <td>{formatter(item.price)}</td>
                  <td>
                    <Quantity hasAddToCart={false} />
                  </td>
                  <td>{formatter(item.price * item.quantity)}</td>
                  <td className="icon_close">
                    <AiOutlineClose />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping__continue">
              <h3>Mã giảm giá:</h3>
              <div className="shopping__discount">
                <input placeholder="Nhập mã giảm giá" />
                <button type="button" className="button-submit">
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping__checkout">
              <h2>Tổng đơn:</h2>
              <ul>
                <li>
                  Giá: <span>{formatter(9000000)}</span>
                </li>
                <li>
                  Số lượng: <span>4</span>
                </li>
                <li>
                  Thành tiền: <span>{formatter(34000000)}</span>
                </li>
              </ul>
              <button
                type="button"
                className="button-submit"
                onClick={() => navigate(ROUTERS.USER.CHECKOUT)}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ShoppingCartPage);
