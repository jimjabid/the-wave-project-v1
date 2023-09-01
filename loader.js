import { gsap } from "gsap";

export function loader() {
  const container = document.querySelector("#container");
  const pages = document.querySelectorAll(".page");

  const loaderTimeline = gsap
    .timeline()
    .to(".loading-text", {
      duration: 3,
      top: 50,
      opacity: 1,
      ease: "power3.out",
    })
    .to(".ocean", {
      duration: 3,
      height: "100%",
      // ease: "slow(0.1, 0.1, false)",
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
      container,
      {
        opacity: 1,
        // ease: "power3.out",
        ease: "slow(0.1, 0.1, false)",
      },
      "<"
    )
    .to(
      pages,
      {
        opacity: 1,
        duration: 3,
        ease: "power3.out",
      },
      "<"
    );

  //4,85

  return loaderTimeline;
}
