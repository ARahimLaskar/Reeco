import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Order } from "./components/Order";
import { ActiveOrder } from "./components/ActiveOrder";
import { OrderList } from "./components/OrderList";
import { EditModal } from "./components/EditModal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Order />
      <ActiveOrder />
      <OrderList />
      <EditModal />
    </>
  );
}

export default App;
