import { Button, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import img from "../assets/Avocado Hass.jpg";
import { MissingModal } from "./MissingModal";
import { EditModal } from "./EditModal";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../Redux/productsSlice";

export const OrderList = () => {
  const {
    isOpen: isMissingOpen,
    onOpen: onMissingOpen,
    onClose: onMissingClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  const handleMissing = (item) => {
    setSelectedItem(item);
    onMissingOpen();
  };

  const handleApprove = () => {
    dispatch(updateStatus({ id: selectedItem.id, status: "Approved" }));
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    onEditOpen();
  };

  useEffect(() => {}, []);

  return (
    <div className="order-list">
      <div className="order_list_container">
        <div className="order_list_top">
          <div className="input_box">
            <input type="text" placeholder="Search..." />
            <span id="search_icon" class="material-symbols-outlined">
              search
            </span>
          </div>
          <div>
            <Button borderRadius="2rem" colorScheme="teal" variant="outline">
              Add item
            </Button>

            <span id="printer_icon" class="material-symbols-outlined">
              print
            </span>
          </div>
        </div>
        <div>
          <div className="products-table-container">
            <table className="products-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((e) => {
                    return (
                      <tr>
                        <td>
                          <img style={{ width: "50px" }} src={img} alt="" />
                        </td>
                        <td>{e.name}</td>
                        <td>{e.brand}</td>
                        <td>${e.price} / 6*1LB</td>
                        <td>{e.quantity} x 6 * 1LB</td>
                        <td>{e.total}</td>
                        <td>{e.status}</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span
                              onClick={() => handleApprove(setSelectedItem(e))}
                              style={{ cursor: "pointer" }}
                              class="material-symbols-outlined"
                            >
                              done
                            </span>
                            <span
                              onClick={() => handleMissing(e)}
                              style={{ cursor: "pointer" }}
                              class="material-symbols-outlined"
                            >
                              close
                            </span>
                            <span
                              onClick={() => handleEdit(e)}
                              style={{ cursor: "pointer" }}
                            >
                              Edit
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <MissingModal
        item={selectedItem}
        isOpen={isMissingOpen}
        onClose={onMissingClose}
      />
      <EditModal
        item={selectedItem}
        isOpen={isEditOpen}
        onClose={onEditClose}
      />
    </div>
  );
};
