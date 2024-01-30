import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./style.css";

const CartsDetails = () => {
  const [selectedSize, setSelectedSize] = useState("Large"); // Default size
  const [quantity, setQuantity] = useState(1); // Default quantity
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // Track order placement
  const [timeLeft, setTimeLeft] = useState(600); // Initial time left in seconds (10 minutes)

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity >= 1 ? newQuantity : 1); // Ensure minimum quantity is 1
  };

  const priceMap = {
    Large: 600,
    Small: 400,
    Rest: 800,
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    window.alert("Order placed successfully!");
  };

  useEffect(() => {
    let timer;
    if (isOrderPlaced && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isOrderPlaced, timeLeft]);

  const formatTime = (seconds) => {
    const preparingTime = 5 * 60; // 5 minutes in seconds
    const packingTime = 5 * 60; // 5 minutes in seconds
    const pickingTime = 5 * 60; // 5 minutes in seconds
    const deliveryTime = 5 * 60; // 5 minutes in seconds

    if (seconds <= preparingTime) {
      // Preparing
      return `Preparing: ${formatInterval(seconds, preparingTime)}`;
    } else if (seconds <= preparingTime + packingTime) {
      // Packing
      return `Packing: ${formatInterval(seconds - preparingTime, packingTime)}`;
    } else if (seconds <= preparingTime + packingTime + pickingTime) {
      // Picking
      return `Picking: ${formatInterval(
        seconds - (preparingTime + packingTime),
        pickingTime
      )}`;
    } else if (
      seconds <=
      preparingTime + packingTime + pickingTime + deliveryTime
    ) {
      // Delivering
      return `Delivering: ${formatInterval(
        seconds - (preparingTime + packingTime + pickingTime),
        deliveryTime
      )}`;
    } else {
      return "Order Delivered";
    }
  };

  const formatInterval = (elapsedSeconds, totalSeconds) => {
    const remainingSeconds = totalSeconds - elapsedSeconds;
    const minutes = Math.floor(remainingSeconds / 60);
    const remainingSecondsWithinMinute = remainingSeconds % 60;
    return `${minutes}:${
      remainingSecondsWithinMinute < 10 ? "0" : ""
    }${remainingSecondsWithinMinute}`;
  };

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Item Details Page</h2>
        <section className="container mt-3">
          <div className="itemsdetails d-flex">
            <div className="items_img">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg"
                alt="Item"
              />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong> : Masala Theoryy
                    </p>
                    <p>
                      <strong>Price</strong> : {priceMap[selectedSize]}
                    </p>
                    <p>
                      <strong>Dishes</strong> : Masala Theoryy
                    </p>
                    <p>
                      <strong>Total</strong> :{" "}
                      {priceMap[selectedSize] * quantity}
                    </p>
                    <p>
                      <strong>Size</strong> :
                      <select value={selectedSize} onChange={handleSizeChange}>
                        <option value="Large">Large</option>
                        <option value="Small">Small</option>
                        <option value="Rest">Rest</option>
                      </select>
                    </p>
                    <p>
                      <strong>Quantity</strong> :
                      <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                      />
                    </p>
                    <p>
                      <strong>Remove</strong> :{" "}
                      <span>
                        <i
                          className="fas fa-trash"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                        ></i>
                      </span>
                    </p>
                    <button
                      style={{
                        background: "green",
                        borderRadius: "25%",
                        color: "white",
                      }}
                      onClick={handlePlaceOrder}
                      disabled={isOrderPlaced}
                    >
                      Place Order!
                    </button>
                  </td>
                </tr>
              </Table>
            </div>
            <div>
              <p style={{ fontSize: "16" }}>Order Status</p>
              {isOrderPlaced && <p>{formatTime(timeLeft)} Left for Delivery</p>}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CartsDetails;
