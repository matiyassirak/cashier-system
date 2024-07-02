// import data from "./data.js";

// import firebase from "./db.js";

// const ordersRef = firebase.ref(firebase.database, "orders");
// const menuItemsRef = firebase.ref(firebase.database, "menuItems");

// firebase.onValue(ordersRef, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
// });
// console.log(data);

import data from "./data.js";

const menuItems = data.menuItems;

const tableContainer = document.querySelectorAll(".table-container");
const colRight = document.querySelector(".col-right");

tableContainer.forEach((table) =>
  table.addEventListener("click", function () {
    document.querySelector(".item-table-id").textContent =
      this.querySelector(".table-id").textContent;
    colRight.classList.remove("hide");
  })
);

menuItems.forEach(function (item) {
  console.log(item);

  const imgURL = item.imageUrl;
  const name = item.name;
  const price = item.price;

  const html = `
          <div class="item">
            <img
              src="${imgURL}"
              alt="Food Image"
              class="item-img"
            />
            <div class="item-desc">
              <p class="item-name">${name}</p>
              <p class="price">${price}</p>
            </div>
          </div>
  `;

  document.querySelector(".items").insertAdjacentHTML("beforeend", html);
});
