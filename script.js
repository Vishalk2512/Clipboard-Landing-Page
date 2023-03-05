const sr = ScrollReveal({
  delay: 200,
  reset: true,
  origin: "top",
  distance: "30px",
  duration: 1200,
});

sr.reveal(".header__logo", {
  duration: 1000,
  rotate: {
    z: 90,
  },
  distance: "100px",
});

sr.reveal(".header__title", { delay: 250 });

sr.reveal(".header__text", { delay: 300 });

sr.reveal(`.btn--ios`, {
  delay: 450,
  origin: "left",
  scale: 0.9,
});

sr.reveal(`.btn--mac`, {
  delay: 450,
  origin: "right",
  scale: 0.9,
});

sr.reveal(
  `.section1__title, .section2__title, .section3__title, .section5__title`,
  {
    distance: "10px",
    delay: 300,
    duration: 1000,
  }
);
sr.reveal(
  `.section1__text, .section2__text, .section3__text, .section5__text`,
  {
    distance: "10px",
    delay: 400,
    duration: 1000,
  }
);

sr.reveal(`.section2__image`, {
  distance: "0px",
  scale: 0.8,
});

sr.reveal(`.section1__feature-left, .footer__logo`, {
  duration: 1000,
  origin: "left",
});

sr.reveal(`.section1__feature-right`, {
  duration: 1000,
  origin: "right",
});

sr.reveal(`.section3__feature`, {
  duration: 700,
  origin: "left",
  interval: 300,
});

sr.reveal(`.footer__link-item, .company-icon`, {
  duration: 600,
  origin: "bottom",
  interval: 200,
});

sr.reveal(".footer__social-icon i", {
  duration: 600,
  origin: "right",
  interval: 200,
});
