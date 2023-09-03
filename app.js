import { loader } from "./src/loader";
import Sketch from "./src/sketch";
import { smoothScroll } from "./src/utils/smoothSCroll";

if (window.innerWidth >= 601) {
  new Sketch({
    dom: document.getElementById("container"),
  });

  smoothScroll();
}

loader();
