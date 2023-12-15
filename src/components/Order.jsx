import React from "react";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
export const Order = () => {
  return (
    <div className="order">
      <div className="order_container">
        <div className="order_loop">
          <p>Orders</p>
          <p>{`>`}</p>
          <p id="order_no">Order 32457ABC</p>
        </div>
        <div className="order_actions">
          <Heading>Order 32457ABC</Heading>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button borderRadius="2rem" colorScheme="teal" variant="outline">
              Back
            </Button>
            <Button borderRadius="2rem" colorScheme="teal" variant="solid">
              Approve order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
