import { gsap } from "gsap";
import SplitTextJS from "./utils/splitText";

export function loader() {
  const title = document.querySelector(".loading-text");
  const splitTitle = new SplitTextJS(title);
  console.log(splitTitle.chars);

  const loaderTimeline = gsap
    .timeline()
    .to(title, {
      opacity: 1,
      ease: "power3.out",
    })
    .to(splitTitle.chars, {
      duration: 2.5,
      yPercent: -100,
      stagger: 0.09,
      opacity: 1,
      ease: "elastic.out(1, 0.75)",
    })
    .to(".ocean", {
      duration: 3,
      height: "100%",
      ease: "power3.out",
    })
    .to(
      ".ocean",
      {
        opacity: 0,
        ease: "slow(0.1, 0.1, false)",
      },
      "<+=1.25"
    )
    .to(
      "#container",
      {
        opacity: 1,
        ease: "slow(0.1, 0.1, false)",
      },
      "<"
    )
    .to(
      ".page",
      {
        opacity: 1,
        duration: 3,
        ease: "power3.out",
      },
      "<"
    );
  return loaderTimeline;
}
