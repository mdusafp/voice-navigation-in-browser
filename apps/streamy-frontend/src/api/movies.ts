import { faker } from '@faker-js/faker';

const CATEGORIES = [
  'Drama',
  'Comedy',
  'Series',
  'Trending',
  'New & Popular',
  'Animation',
] as const;

const randomCategory = () =>
  CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

const filmsDatabase = Array.from({ length: 2000 }, (v, k) => ({
  title: faker.music.songName(),
  category: randomCategory(),
  imageUrl: faker.image.url({ width: 300, height: 300 }),
})).sort((a, b) => {
  return a.title.localeCompare(b.title);
});

const myFilms = [
  ...filmsDatabase.slice(10, 20),
  ...filmsDatabase.slice(100, 110),
  ...filmsDatabase.slice(500, 510),
  ...filmsDatabase.slice(700, 710),
];

const filmByCategory = filmsDatabase.reduce((acc, cur) => {
  if (acc[cur.category]) {
    acc[cur.category].push(cur);
  } else {
    acc[cur.category] = [cur];
  }
  return acc;
}, {} as Record<CategoryKeys, Film[]>);

export const useMyListMovies = () => {
  return {
    data: myFilms,
  };
};

const sanitizeRegex = (input: string) =>
  input.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&');

export const useSearchMovies = (term: string) => {
  const regex = new RegExp(sanitizeRegex(term), 'gi');
  return {
    data: filmsDatabase.filter((film) => regex.test(film.title)),
  };
};

function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  const ret: any = {};
  keys.forEach((key) => {
    ret[key] = obj[key];
  });
  return ret;
}

export type CategoryKeys = (typeof CATEGORIES)[number];
type Film = (typeof filmsDatabase)[number];

export const useMoviesByCategories = (category?: CategoryKeys) => {
  return {
    data: category ? pick(filmByCategory, category) : filmByCategory,
  };
};

export const useMovies = () => {};
