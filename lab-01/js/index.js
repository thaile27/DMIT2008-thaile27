/*
    RTDB returns an object of Objects....
    [objects]

    Object.keys() => will return the keys of the collection list
    Object.values() => will return list of objects value from the collection list of Objects

    // to get the values from the object, we use the Object.values(object), Object.keys(object), Object.entries(object)
*/

/*
    find() will return the first object it found

    filter() will return a list of items it found
*/

import { getMovieData } from "./lib/firebase/api";
import { movieTemplate } from "./templates/movieTemplate";

async function appInit() {
  const appData = await getMovieData();
  const movieItems = Object.values(appData).map((movie) => {
    return movieTemplate(movie);
  });

  // <ul class="max-w-xs flex flex-col">

  const div = document.createElement("div");
  movieItems.forEach((item) => {
    item.classList.add("mb-3");
    div.appendChild(item);
  });

  console.log(div);

  document.querySelector("#app").append(div);
}

appInit();
