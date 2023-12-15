import React from "react";

export const ActiveOrder = () => {
  return (
    <div className="active">
      <div className="active_order_container">
        <div>
          <p>Supplier</p>
          <p>East coast fruits & vegetables</p>
        </div>
        <div>
          <p>Shipping date</p>
          <p>Thu, Feb 10</p>
        </div>
        <div>
          <p>Total</p>
          <p>$15,028.3</p>
        </div>
        <div>
          <p>Category</p>
          <p id="categories_icons">
            <span class="material-symbols-outlined">tapas</span>
            <span class="material-symbols-outlined">liquor</span>
            <span class="material-symbols-outlined">tapas</span>
            <span class="material-symbols-outlined">icecream</span>
            <span class="material-symbols-outlined">breakfast_dining</span>{" "}
            <span class="material-symbols-outlined">grocery</span>
            <span class="material-symbols-outlined">bakery_dining</span>
            <span class="material-symbols-outlined">cooking</span>
          </p>
        </div>
        <div>
          <p>Department</p>
          <p>300-444-678</p>
        </div>
        <div>
          <p>Status</p>
          <p>Awaiting your approvel</p>
        </div>
      </div>
    </div>
  );
};
