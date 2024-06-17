"use server";

import { TMDB_API_URL } from "@/lib/constants";
import { Media, MediaType, PageResult } from "@/types";
import queryString from "query-string";

async function _fetchTMDB(
  query: string,
  params: Record<string, string | number | boolean | undefined> = {},
): Promise<any> {
  const url = queryString.stringifyUrl({
    url: `${TMDB_API_URL}/${query}`,
    query: { ...params },
  });
  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });

  if (!res.ok) {
    throw Error("Something wrong fetching data");
  }

  return await res.json();
}

export async function listMedia(
  type: MediaType,
  query: string,
  page: number = 1,
): Promise<PageResult<Media>> {
  return await _fetchTMDB(`${type}/${query}`, { page });
}

export async function getMedia(type: MediaType, id: string): Promise<Media> {
  return await _fetchTMDB(`${type}/${id}`, {
    append_to_response:
      "videos,credits,images,external_ids,release_dates,combined_credits",
    include_image_language: "en",
  });
}

export async function getGenreList(media: MediaType): Promise<{name: string, id: number}> {
  return await _fetchTMDB(`genre/${media}/list`)
}