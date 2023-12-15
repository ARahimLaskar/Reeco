import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import img from "../assets/Avocado Hass.jpg";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts, updateQuantityAndPrice } from "../Redux/productsSlice";

export const EditModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { selectedItem } = useSelector((state) => state);

  useEffect(() => {
    if (selectedItem) {
      localStorage.setItem("itemData", JSON.stringify(selectedItem));
    }
  }, [selectedItem]);

  const handleUpdate = () => {
    dispatch(updateProducts(selectedItem));
    onClose();
  };

  // Dispatch the action to update quantity and price
  const handleQuantity = (type) => {
    let newQuantity = selectedItem.quantity;
    if (type === "plus") {
      newQuantity++;
    } else if (type === "minus" && newQuantity > 0) {
      newQuantity--;
    }

    dispatch(
      updateQuantityAndPrice({ id: selectedItem.id, quantity: newQuantity })
    );
  };

  return (
    <>
      {selectedItem && (
        <Modal onClose={onClose} isOpen={isOpen} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {selectedItem.name}
              <br />
              <Text id="brand-name">{selectedItem.brand}</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box style={{ display: "flex", width: "100%" }}>
                <img style={{ width: "150px" }} src={img} />
                <table className="price_quantity_total">
                  <tr>
                    <td>Price</td>
                    <td>
                      <p>
                        <span>{selectedItem.price}</span> /6* 1LB
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Quantity</td>
                    <td style={{ display: "flex", alignItems: "center" }}>
                      <div
                        onClick={() => handleQuantity("minus")}
                        className="plus_minus"
                      >
                        <span class="material-symbols-outlined ">remove</span>
                      </div>

                      <p>
                        <span>{selectedItem.quantity}</span>
                      </p>
                      <div
                        onClick={() => handleQuantity("plus")}
                        className="plus_minus"
                      >
                        <span className="material-symbols-outlined">add</span>
                      </div>

                      <p id="quantity"> x 6 * 1LB</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>$ {selectedItem.total}</td>
                  </tr>
                </table>
              </Box>
              <Box>
                <Text id="reason">
                  Choose reason <span>(Optional)</span>
                </Text>
                <div className="reason-section">
                  <p>Missing product</p>
                  <p>Quantity is not the same</p>
                  <p>Price is not the same</p>
                  <p>Other</p>
                </div>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} size="sm" mr={3}>
                Close
              </Button>
              <Button onClick={handleUpdate} colorScheme="green" size="sm">
                Send
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
