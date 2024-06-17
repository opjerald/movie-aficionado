import { QueryItem } from "@/types";

export const TMDB_IMAGE_BASE_THUMBNAIL = "https://image.tmdb.org/t/p/original";
export const TMDB_IMAGE_BASE_ORIGINAL = "https://image.tmdb.org/t/p/original";
export const TMDB_API_URL = "https://api.themoviedb.org/3";

export const QUERY_LIST = {
  movie: <QueryItem[]>[
    { type: "movie", title: "Popular Movies", query: "popular" },
    { type: "movie", title: "Top Rated Movies", query: "top_rated" },
    { type: "movie", title: "Upcoming Movies", query: "upcoming" },
    { type: "movie", title: "Now Playing Movies", query: "now_playing" },
  ],
  tv: <QueryItem[]>[
    { type: "tv", title: "Popular TV Shows", query: "popular" },
    { type: "tv", title: "Top Rated TV Shows", query: "top_rated" },
    { type: "tv", title: "TV Shows Airing Today", query: "airing_today" },
  ],
};

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Movie",
    path: "/movie",
  },
  {
    name: "TV Series",
    path: "/tv",
  },
];
