import { TMDB_IMAGE_BASE_ORIGINAL } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";

interface GETProps {
  params: {
    image: string;
  };
}

export async function GET(req: NextRequest, { params }: GETProps) {
  const res = await fetch(`${TMDB_IMAGE_BASE_ORIGINAL}/${params.image}`, {
    method: "GET",
    headers: {
      "Content-Type": "image/jpeg",
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw Error("Something wrong fetching image");
  }

  const blob = await res.arrayBuffer();

  const resp = new NextResponse(blob);
  resp.headers.set("Content-Type", "image/jpeg");
  return resp;
}
