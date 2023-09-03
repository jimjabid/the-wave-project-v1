import { gsap } from "gsap";
import SplitTextJS from "./utils/splitText";

export function loader() {
  const title = document.querySelector(".loading-text");
  const splitTitle = new SplitTextJS(title);

  const loaderTimeline = gsap.timeline();

  loaderTimeline
    .fromTo(
      title,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power3.out",
      }
    )
    .fromTo(
      splitTitle.chars,
      { yPercent: 100, opacity: 0 },
      {
        duration: 2.5,
        yPercent: -100,
        opacity: 1,
        stagger: 0.09,
        ease: "elastic.out(1, 0.75)",
      }
    )
    .fromTo(
      ".ocean",
      { height: "50%" },
      {
        duration: 3,
        height: "100%",
        ease: "power3.out",
      }
    )
    .fromTo(
      ".ocean",
      { opacity: 1 },
      {
        duration: 1.5,
        opacity: 0,
        ease: "slow(0.1, 0.1, false)",
      },
      "<+=1.25"
    )
    .fromTo(
      "#container",
      { opacity: 0 },
      {
        duration: 2,
        opacity: 1,
        ease: "slow(0.1, 0.1, false)",
      },
      "<-=0.25"
    )
    .fromTo(
      ".page",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "slow(0.1, 0.1, false)",
      },
      "<"
    );

  return loaderTimeline;
}
