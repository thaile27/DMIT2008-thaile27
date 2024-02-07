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
import { movieTemplate } from "./templates/movieListItem";

async function appInit() {
  const appData = await getMovieData();
  const movieItems = Object.values(appData).map((movie) => {
    return movieTemplate(movie);
  });

  const ul = document.createElement("ul");
  ul.classList.add("divide-y");
  ul.classList.add("text-center");

  movieItems.forEach((markup) => {
    ul.appendChild(markup);
  });

  // customize the app a bit
  const app = document.querySelector("#app");
  app.classList.add("mt-5");
  app.classList.add("flex");
  app.classList.add("justify-center");
  app.append(ul);
}

appInit();
