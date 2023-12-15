import { Button, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import img from "../assets/Avocado Hass.jpg";
import { MissingModal } from "./MissingModal";
import { EditModal } from "./EditModal";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedItem, updateStatus } from "../Redux/productsSlice";

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

  const [mediaState, setMediaState] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 780px)");

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setMediaState(true);
      } else {
        setMediaState(false);
      }
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addListener(handleMediaQueryChange); //listener for changes

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange); // Clean up the listener on unmount
    };
  }, []);

  const handleMissing = (item) => {
    setSelectedItem(item);
    onMissingOpen();
  };

  const handleApprove = (item) => {
    dispatch(updateStatus({ id: item.id, status: "Approved" }));
  };

  const handleEdit = (item) => {
    dispatch(updateSelectedItem(item));
    onEditOpen();
  };

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

        <div className="products-table-container">
          {mediaState ? (
            <table className="products-table1">
              <tbody>
                {data &&
                  data.map((e) => {
                    let statusColor = "";
                    if (e.status === "Approved") {
                      statusColor = "green";
                    } else if (e.status === "Missing") {
                      statusColor = "tomato";
                    } else if (e.status === "Urgent-Missing") {
                      statusColor = "red";
                    }
                    return (
                      <div
                        style={{
                          padding: ".2rem",
                          marginBottom: "1rem",
                          boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                        }}
                      >
                        <tr>
                          <td>
                            <img
                              style={{ maxWidth: "80px" }}
                              src={img}
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Product name&nbsp;: </span> {e.name}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Brand : </span> {e.brand}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Price : </span> ${e.price} / 6*1LB
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Quantity : </span> {e.quantity} x 6 * 1LB
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Total : </span> {e.total}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Status : </span>{" "}
                            <p
                              style={{
                                background: statusColor,
                                padding: "0.5rem",
                                borderRadius: "1rem",
                                textAlign: "center",
                                color: "white",
                              }}
                            >
                              {e.status}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              background: "#e3e8ec ",
                              boxShadow: "0 4px 8px",
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1rem",
                              }}
                            >
                              <span
                                onClick={() => handleApprove(e)}
                                style={{ cursor: "pointer", color: "green" }}
                                class="material-symbols-outlined"
                              >
                                done
                              </span>
                              <span
                                onClick={() => {
                                  handleMissing(e);
                                }}
                                style={{ cursor: "pointer", color: "red" }}
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
                      </div>
                    );
                  })}
              </tbody>
            </table>
          ) : (
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
                    let statusColor = "";
                    if (e.status === "Approved") {
                      statusColor = "green";
                    } else if (e.status === "Missing") {
                      statusColor = "tomato";
                    } else if (e.status === "Urgent-Missing") {
                      statusColor = "red";
                    }
                    return (
                      <tr>
                        <td>
                          <img style={{ minWidth: "40px" }} src={img} alt="" />
                        </td>
                        <td>{e.name}</td>
                        <td>{e.brand}</td>
                        <td>${e.price} / 6*1LB</td>
                        <td>{e.quantity} x 6 * 1LB</td>
                        <td>{e.total}</td>
                        <td>
                          <p
                            style={{
                              background: statusColor,
                              padding: "0.5rem",
                              borderRadius: "1rem",
                              textAlign: "center",
                              color: "white",
                            }}
                          >
                            {e.status}
                          </p>
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span
                              onClick={() => {
                                handleApprove(e);
                              }}
                              style={{ cursor: "pointer", color: "#1e633f" }}
                              class="material-symbols-outlined"
                            >
                              done
                            </span>
                            <span
                              onClick={() => handleMissing(e)}
                              style={{ cursor: "pointer", color: "red" }}
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
          )}
        </div>
      </div>
      <MissingModal
        item={selectedItem}
        isOpen={isMissingOpen}
        onClose={onMissingClose}
      />
      <EditModal isOpen={isEditOpen} onClose={onEditClose} />
    </div>
  );
};
