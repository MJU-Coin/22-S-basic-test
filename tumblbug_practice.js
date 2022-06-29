window.onload = function () {
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
