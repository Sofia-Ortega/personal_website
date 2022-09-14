function load_style() {
  page_style = localStorage.getItem("pg_style");
  if (page_style == null) {
    localStorage.setItem("pg_style", "style_one.css");
    page_style = "style_one.css";
  }
  console.log("page_style: ", page_style);
  document.getElementById("page_style").setAttribute("href", page_style);
}

function handle_click() {
  curr_style = localStorage.getItem("pg_style");
  if (curr_style === null || curr_style === "style_one.css") style_two();
  else style_one();
}

function style_one() {
  localStorage.setItem("pg_style", "style_one.css");

  load_style();
}
function style_two() {
  localStorage.setItem("pg_style", "style_two.css");
  load_style();
}

load_style();
