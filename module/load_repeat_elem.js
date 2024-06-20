import kits from "../data/kits_cards.json" assert { type: "json" };
import innovators from "../data/innovators_cards.json" assert { type: "json" };
import skills from "../data/skills_courses.json" assert { type: "json" };

export function loadRepeatElem() {
  const containerKitsElem = document.getElementById("container_kits");
  const containerCardsInnovatorsElem = document.getElementById(
    "container_cards_innovators"
  );
  const containerCardsAdvantagesElem = document.getElementById(
    "container_cards_advantages"
  );

  const render = () => {
    kits.map((item) => {
      containerKitsElem.insertAdjacentHTML(
        "beforeend",
        `
        <div class="item_card_kits">
            <img src="${item.img}" alt="kits_img" />
            <div class="container_text">
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </div> 
           <div class="container_btn">
            <button class="btn_view">Посмотреть</button>
           </div>
          </div>
                `
      );
    });
    innovators.map((item) => {
      containerCardsInnovatorsElem.insertAdjacentHTML(
        "beforeend",
        `
          <div class="item_card_innovators">
            <div class="container_img">
                <img src="${item.img}" alt="innovators_img" />
            </div>
            <h4>${item.title}</h4>
            <p>${item.text}</p>
            <button class="btn_view">Посмотреть</button>
          </div>
            `
      );
    });
    skills.map((item) => {
      containerCardsAdvantagesElem.insertAdjacentHTML(
        "beforeend",
        `<div class="item_card">
            <img src="${item.img}" alt="advantages_icon_img" />
            <h4>${item.title}</h4>
            <p>${item.text}</p>
          </div>`
      );
    });
  };
  render();
}
