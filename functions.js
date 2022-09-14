function load_style() {
  page_style = localStorage.getItem("pg_style", "style_one.css");
  if (page_style === null) {
    page_style = "style_one.css";
  }
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
