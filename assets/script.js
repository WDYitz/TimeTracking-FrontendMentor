
import { elements } from "./mod.js";

window.addEventListener('onload', timeTrack());

async function timeTrack() {

  const res = await fetch('data.json')
  const data = await res.json();

  elements.cards.forEach(() => {
    for (let i in data) {
      elements.title[i].innerHTML = data[i].title;
      elements.hours[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
      elements.lwHours[i].innerHTML = `${data[i].timeframes.weekly.previous}hrs`;
    }
  });

  console.log(data);
}