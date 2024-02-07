/*
     template is JSX

     React Component
     jsx + data
*/
import { toElement } from "../utils/toElements";

function movieTemplate(movie) {
  const template = `
  <li class="px-4 py-4 sm:px-0">
    ${movie.title}
  </li>
    `;

  return toElement(template);
}

export { movieTemplate };
