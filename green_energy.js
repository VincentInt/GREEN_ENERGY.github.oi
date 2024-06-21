import { advantagesBanner } from "./module/advantages_banner.js";
import { btnScroll } from "./module/btn_scroll.js";
import { loadRepeatElem } from "./module/load_repeat_elem.js";
import { mainBanner } from "./module/main_banner.js";

async function main() {
  const jsonFetchFunc = async (url) => {
    return await fetch(url)
      .then((prev) => prev.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  };
  const data = {};
  data.mainBanner = await jsonFetchFunc("./data/main_banner.json");
  data.advantagesBanner = await jsonFetchFunc("./data/advantages_banner.json");
  data.loadRepeatElem = await jsonFetchFunc("./data/kits_cards.json");
  data.kits = await jsonFetchFunc("./data/kits_cards.json");
  data.innovators = await jsonFetchFunc("./data/innovators_cards.json");
  data.skills = await jsonFetchFunc("./data/skills_courses.json");

  mainBanner(data.mainBanner);
  advantagesBanner(data.advantagesBanner);
  loadRepeatElem(data.kits, data.innovators, data.skills);
  btnScroll()
}
main();
