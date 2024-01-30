// Carts.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cardsData from "./CardsData";
import "./style.css";

const Carts = () => {
  const [data, setData] = useState(cardsData);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center"> Pizza List</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <Card
              key={id}
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
            >
              <Card.Img
                variant="top"
                src={element.imgdata}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>Price: ₹{element.price}</Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button
                    variant="primary"
                    className="col-lg-12"
                    onClick={() => addToCart(element)}
                  >
                    {/* Use Link inside the Button's onClick event */}
                    <Link
                      to="/cart"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Add To Cart
                    </Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Carts;
