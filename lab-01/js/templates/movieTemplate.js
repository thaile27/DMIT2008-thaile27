import { toElement } from "../utils/toElements";

function movieTemplate(movie) {
  return toElement(
    `
    <ul class="max-w-xs flex flex-col">
    <li class="items-center  gap-x-2 py-3 px-4 text-center font-medium font-bold bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
      ${movie.title}
    </li>
    <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
    Release year: ${movie.release_year}
    </li>
    <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
    Director: ${movie.director_name}
    </li>
    <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
    Rating: ${movie.rating}
  </li>
  </ul>
        `
  );
}

export { movieTemplate };
