import { createSlice } from "@reduxjs/toolkit";
import data from "../db.json";

const loadDataFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("myData");
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error loading data from localStorage:", error);
  }
  return [];
};

const initialState = {
  data: JSON.parse(localStorage.getItem("foodData")) || data,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: () => {},
    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      const itemIndex = state.data.findIndex((e) => e.id === id);
      if (itemIndex !== -1) {
        state.data[itemIndex] = {
          ...state.data[itemIndex],
          status: status,
        };
        localStorage.setItem("foodData", JSON.stringify(state.data));
      }
    },
    updateProducts: (state, action) => {
      const updatedItem = action.payload;
      const itemIndex = state.data.findIndex((e) => e.id === updatedItem.id);
      if (itemIndex !== -1) {
        state.data[itemIndex] = {
          ...updatedItem,
        };
        localStorage.setItem("foodData", JSON.stringify(state.data));
      }
    },
  },
});

export const { addProducts, updateProducts, updateStatus } =
  productReducer.actions;
export default productReducer.reducer;
