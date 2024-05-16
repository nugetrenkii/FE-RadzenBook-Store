import BreadcrumbUS from "pages/users/theme/breadcrumb";
import { memo } from "react";
import "./style.scss";
import { formatter } from "utils/formater";

const CheckoutPage = () => {
  return (
    <>
      <BreadcrumbUS name={"Thanh Toán"} />
      <div className="container">
        <h2>Thông tin đặt hàng:</h2>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="checkout__input">
              <label>
                Họ và tên: <span className="required">*</span>
              </label>
              <input type="text" placeholder="Nhập họ và tên" />
            </div>
            <div className="checkout__input">
              <label>
                Địa chỉ: <span className="required">*</span>
              </label>
              <input type="text" placeholder="Nhập địa chỉ" />
            </div>
            <div className="checkout__input__group">
              <div className="checkout__input">
                <label>
                  Điện thoại: <span className="required">*</span>
                </label>
                <input type="text" placeholder="Nhập số điện thoại" />
              </div>
              <div className="checkout__input">
                <label>
                  Email: <span className="required">*</span>
                </label>
                <input type="email" placeholder="Nhập email" />
              </div>
            </div>
            <div className="checkout__input">
              <label>Ghi chú:</label>
              <textarea rows={15} placeholder="Ghi chú về đơn hàng" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="checkout__order">
              <h3>Đơn hàng </h3>
              <ul>
                <li>
                  <span>Conan</span>
                  <b>{formatter(25000)} (1)</b>
                </li>
                <li>
                  <span>Jujutsu Kaisen</span>
                  <b>{formatter(30000)} (1)</b>
                </li>
                <li>
                  <span>Kimetsu no Yaiba</span>
                  <b>{formatter(30000)} (1)</b>
                </li>
                <li>
                  <span>My Hero Academia</span>
                  <b>{formatter(30000)} (1)</b>
                </li>
                <li>
                  <h4>Mã giảm giá</h4>
                  <b>BOKS24</b>
                </li>
                <li className="checkout__order__subtotal">
                  <h3>Tổng đơn</h3>
                  <b>{formatter(115000)}</b>
                </li>
              </ul>
              <button type="type" className="button-submit">
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CheckoutPage);
