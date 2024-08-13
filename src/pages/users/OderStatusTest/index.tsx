// src/components/OrderStatus.js
import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import { Tab, Tabs, Box } from "@mui/material";
import "./styles.scss";

const OrderStatusTest = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const statusList = [
    "Chờ xác nhận",
    "Chờ giao hàng",
    "Đang giao",
    "Đã giao",
    "Đã hủy",
    "Trả hàng",
  ];

  const fakeData = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpIB2GjEDm7Jx6673kUWjFocuTa9H4t08HA&s",
      name: "Sachs sachs va sachs",
      quantity: 1,
      price: 8000000,
      status: "Đã giao",
      statusTab: "choxuly",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3MEvncGVrRr47pb3FwEwBfcxoQdIWNUnEg&s",
      name: "Truyen",
      quantity: 1,
      price: 28000000,
      status: "Chờ xác nhận",
      statusTab: "danggiao",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3MEvncGVrRr47pb3FwEwBfcxoQdIWNUnEg&s",
      name: "Chu thuat hoi chien",
      quantity: 10,
      price: 99999,
      status: "Chờ xác nhận",
      statusTab: "dagiao",
    },
  ];

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        // const response = await axios.get('https://api.example.com/orders'); // Thay thế bằng URL API thực tế
        setOrderDetails(fakeData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredOrders = orderDetails.filter(
    (order) => order.status === statusList[selectedTab]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      // justifyContent="center"
      // minHeight="100vh"
      p={3}
    >
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="primary"
      >
        {statusList.map((status, index) => (
          <Tab key={index} label={status} />
        ))}
      </Tabs>
      <Box p={3}>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div className="order-item" key={order.id}>
              <img className="order-image" src={order.image} alt={order.name} />
              <div className="order-info">
                <div>{order.name}</div>
                <div>x{order.quantity}</div>
                <div className="order-price">
                  {order.price.toLocaleString()}đ
                </div>
                <div>{order.status}</div>
                <button type="button">Hủy đơn hàng</button>
              </div>
            </div>
          ))
        ) : (
          <p>No orders found for this status.</p>
        )}
      </Box>
    </Box>
  );
};

export default memo(OrderStatusTest);
