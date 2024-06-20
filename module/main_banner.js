import banner from "../data/main_banner.json" assert { type: "json" };

export function mainBanner() {
  const containerPagesBannerElement = document.getElementById(
    "container_pages_window_main_banner"
  );
  const stateBannerElem = document.getElementById("main_banner_state_page");
  const lineBannerElem = document.getElementById("main_banner_line");

  const leftBtnElem = document.getElementById("main_banner_left_btn");
  const rightBtnElem = document.getElementById("main_banner_right_btn");

  leftBtnElem.onclick = () => moveBanner(-1);
  rightBtnElem.onclick = () => moveBanner(1);

  document.getElementById("main_banner_max_page").innerText = `${
    banner.length < 9 ? "0" + banner.length : banner.length
  }`;
  let indexSlide = 0;

  const renderPages = () => {
    containerPagesBannerElement.innerHTML = "";
    banner.map((item) => {
      containerPagesBannerElement.insertAdjacentHTML(
        "beforeend",
        `
              <div class="page_banner">
                  <div class="container_img_page">
                    <img
                      src="${item.img}"
                      alt="img_page_banner"
                    />
                  </div>
                  <div class="container_info_page">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                    <div class="container_btn">
                      <button class="green_btn">Позвонить</button>
                      <button class="yellow_btn">Обратная связь</button>
                    </div>
                  </div>
                </div>
                  `
      );
    });
  };
  const moveBanner = (move) => {
    clearInterval(moveBannerInterval);
    indexSlide += move;

    if (indexSlide < 0) {
      indexSlide = banner.length - 1;
      return moveBanner(0);
    }
    if (indexSlide >= banner.length) {
      indexSlide = 0;
      return moveBanner(0);
    }
    stateBannerElem.innerText =
      indexSlide + 1 < 9 ? "0" + (indexSlide + 1) : indexSlide + 1;
    containerPagesBannerElement.style.transform = `translateX(-${
      indexSlide * 100
    }%)`;
    lineBannerElem.style.width = `${(indexSlide / (banner.length - 1)) * 100}%`;

    moveBannerInterval = setInterval(() => {
      moveBanner(1);
    }, 5000);
  };
  let moveBannerInterval = setInterval(() => {
    moveBanner(1);
  }, 5000);
  renderPages();
}
