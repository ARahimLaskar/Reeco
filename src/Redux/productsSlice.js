import { createSlice } from "@reduxjs/toolkit";
import data from "../db.json";

const initialState = {
  data: JSON.parse(localStorage.getItem("foodData")) || data,
  selectedItem: null,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: () => {},
    updateSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
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
    updateQuantityAndPrice: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.data.findIndex((e) => e.id === id);

      if (itemIndex !== -1) {
        const item = state.data[itemIndex];
        const price = parseFloat(item.price);
        const newQuantity = parseInt(quantity);
        const newTotal = (price * newQuantity).toFixed(2);

        state.data[itemIndex] = {
          ...item,
          quantity: newQuantity.toString(),
          total: newTotal,
          status: "Quantity updated",
        };
        state.selectedItem = { ...state.data[itemIndex] };
        localStorage.setItem("foodData", JSON.stringify(state.data));
      }
    },
  },
});

export const {
  addProducts,
  updateSelectedItem,
  updateProducts,
  updateStatus,
  updateQuantityAndPrice,
} = productReducer.actions;
export default productReducer.reducer;
