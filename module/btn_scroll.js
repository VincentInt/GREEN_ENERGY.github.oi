export function btnScroll() {
  const sectionElements = document.getElementsByClassName("section");
  const btnHeaderElements = document.getElementsByClassName("btn_header");
  const btnFooterElements = document.getElementsByClassName("btn_footer");
  for (const key in [...sectionElements]) {
    btnHeaderElements[key].onclick = () =>
      scrollPage(sectionElements[key].offsetTop);
    btnFooterElements[key].onclick = () =>
      scrollPage(sectionElements[key].offsetTop);
  }

  const scrollPage = (px) => {
    window.scroll({
      top: px - 50,
      behavior: "smooth",
    });
  };
}
