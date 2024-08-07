//sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// showinfo variable
const showInfo = document.querySelector("aside");

// toogle element info
showInfo.addEventListener("click", () => {
  showInfo.classList.toggle("active");
});

//sidebar toogle function for mobile
sidebarBtn.addEventListener("click", () => {
  sidebarBtn.classList.toggle("active");
});

// select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelector("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");

select.addEventListener("click", () => {
  select.classList.toggle("active");
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    select.classList.toggle("active");
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelector("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].data.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
    console.log(filterItems[i]);

  }
};
