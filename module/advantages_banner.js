import users from "../data/advantages_banner.json" assert { type: "json" };

export function advantagesBanner() {
  const containerBannerAdvantagesElem = document.getElementById(
    "container_banner_advantages"
  );
  const pointStateElem = document.getElementById("point_state");
  const textCommentElem = document.getElementById("text_comment");
  const containerUserElem = document.getElementById("container_user");

  const leftBtnAdvantagesElem = document.getElementById("left_btn_advantages");
  const rightBtnAdvantagesElem = document.getElementById(
    "right_btn_advantages"
  );

  leftBtnAdvantagesElem.onclick = () => moveBanner(-1);
  rightBtnAdvantagesElem.onclick = () => moveBanner(1);

  let indexSlide = 0;

  const renderBanner = () => {
    pointStateElem.innerHTML = "";
    containerUserElem.innerHTML = "";
    textCommentElem.innerHTML = "";

    users.map((item, index) => {
      let stylePoint = "";
      if (indexSlide === index) {
        stylePoint = "selected";
      }
      pointStateElem.insertAdjacentHTML(
        "beforeend",
        `<div class="state_point ${stylePoint}"></div>`
      );
    });
    textCommentElem.innerText = users[indexSlide].comment;
    containerUserElem.innerHTML = `
      <img src="${users[indexSlide].img}" alt="user_avatar_img" />
      <div>
        <h4>${users[indexSlide].userName}</h4>
        <p>${users[indexSlide].job}</p>
      </div> 
        `;
  };
  const moveBanner = (move) => {
    indexSlide += move;
    if (indexSlide >= users.length) {
      indexSlide = 0;
      return moveBanner(0);
    }
    if (indexSlide < 0) {
      indexSlide = users.length - 1;
      return moveBanner(0);
    }
    clearInterval(moveInterval);
    containerBannerAdvantagesElem.style.opacity = 0;

    setTimeout(() => {
      renderBanner();
      containerBannerAdvantagesElem.style.opacity = 1;
      moveInterval = setInterval(() => moveBanner(1), 5000);
    }, 500);
  };
  let moveInterval = setInterval(() => moveBanner(1), 5000);
  renderBanner();
}
