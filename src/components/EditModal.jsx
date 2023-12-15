import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useAccordion,
  useDisclosure,
  Box,
  Heading,
} from "@chakra-ui/react";
import img from "../assets/Avocado Hass.jpg";
import { useDispatch } from "react-redux";
import { updateProducts } from "../Redux/productsSlice";

export const EditModal = ({ item, isOpen, onClose }) => {
  const [itemsValue, setItemsValue] = useState(item);
  const dispatch = useDispatch();
  // console.log(item.price);

  // const handleQuantity=(q)=>{
  //   setItemsValue({...itemsValue, price: })
  // }

  const handleUpdate = () => {
    dispatch(updateProducts(item));
    onClose();
  };

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Chicken Breast Fillets, Boneless Marinated 6 Ounce Raw, Invived...
            <br />
            <p>American Roland</p>
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
                      <span>{"item.price"}</span> /6* 1LB
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
                      <span>{"item.quantity"}</span>
                    </p>
                    <div
                      onClick={() => handleQuantity("plus")}
                      className="plus_minus"
                    >
                      <span className="material-symbols-outlined">add</span>
                    </div>

                    <p> x 6 * 1LB</p>
                  </td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>${"item.total"}</td>
                </tr>
              </table>
            </Box>
            <Box>
              <Heading>
                Choose reason <span>(Optional)</span>
              </Heading>
              <div className="reason-section">
                <p>Missing product</p>
                <p>Quantity is not the same</p>
                <p>Price is not the same</p>
                <p>Other</p>
              </div>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={handleUpdate}>Send</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
