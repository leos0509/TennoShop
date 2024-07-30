import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css'; // Ensure you have this CSS file

function App() {
  const [message, setMessage] = useState("");
  const [orderInfoVisible, setOrderInfoVisible] = useState(true); // State to toggle between order info and checkout message

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAPI();

    // Check payment status from URL parameters
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Thanh toán thành công. Cảm ơn bạn đã sử dụng payOS!");
      setOrderInfoVisible(false); // Show checkout message instead of order info
    } else if (query.get("canceled")) {
      setMessage("Thanh toán thất bại. Nếu có bất kỳ câu hỏi nào hãy gửi email tới support@payos.vn.");
      setOrderInfoVisible(false); // Show checkout message instead of order info
    }
  }, []);

  const OrderInformation = () => (
    <div className="main-box">
      <div className="checkout">
        <div className="product">
          <p><strong>Tên sản phẩm:</strong> Mì tôm Hảo Hảo ly</p>
          <p><strong>Giá tiền:</strong> 2000 VNĐ</p>
          <p><strong>Số lượng:</strong> 1</p>
        </div>
        <form action="http://localhost:8080/create-payment-link" method="post">
          <button type="submit" id="create-payment-link-btn">Tạo Link thanh toán</button>
        </form>
      </div>
    </div>
  );

  const CheckoutMessage = ({ message }) => (
    <div className="main-box">
      <div className="checkout">
        <div className="product">
          <p>{message}</p>
        </div>
        <form action="/">
          <button type="submit" id="return-to-checkout-btn">Quay lại trang thanh toán</button>
        </form>
      </div>
    </div>
  );

  return orderInfoVisible ? (
    <OrderInformation />
  ) : (
    <CheckoutMessage message={message} />
  );
}

export default App;
