import "./css/reset.css";
import "./css/style.css";
import {
  info,
  menu,
  homeTitle,
  menuTitle,
  aboutTitle,
  review,
} from "./assets/config";
import { loadMain, coverBtn } from "./assets/loadPage";

//Set globals
let content = document.getElementById("content");
let btnNames = ["home", "menu", "about"];
let currentTab = btnNames[0];

//default load home page
loadMain("home", content, review, homeTitle, info);

//set clickEvents for tabs
btnNames.forEach((btnName) => {
  var btn = document.getElementById(btnName);

  btn.addEventListener("click", () => {
    currentTab = coverBtn(currentTab, btn.id);
    if (btn.id == "home") {
      loadMain(btn.id, content, review, homeTitle, info);
    } else if (btn.id == "menu") {
      loadMain(btn.id, content, menu, menuTitle);
    } else {
      loadMain(btn.id, content, "about stuff", aboutTitle);
    }
  });
});
