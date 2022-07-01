window.onload = function () {
  clock();
  let list_category = document.getElementById("category_list");

  let category_list = document.getElementById("category");

  list_category.addEventListener("mouseover", function () {
    category_list.style.display = "inline";
  });

  category_list.addEventListener("mouseover", function () {
    category_list.style.display = "inline";
  });

  category_list.addEventListener("mouseout", function () {
    category_list.style.display = "none";
  });

  let search = document.getElementsByClassName("Navigation_Search");
  search[0].addEventListener("click", function () {
  })

};
function clock() {
  let target = document.getElementById("clock");
  let time = new Date();

  let year = time.getFullYear();
  let month = time.getMonth();
  let date = time.getDate();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  target.innerText =
    `${year}.${month + 1}.${date} ${hours}.${minutes} 기준`;
}
