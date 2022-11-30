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
import { loadMain } from "./assets/loadPage";

//Set globals
let content = document.getElementById("content");
loadMain("home", content, review, homeTitle, info);
