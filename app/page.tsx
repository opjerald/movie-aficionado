import { listMedia } from "@/actions/tmdb";

import { QUERY_LIST } from "@/lib/constants";

import HeroCarousel from "@/components/hero-carousel";
import MediaCarousel from "@/components/media-carousel";

const HomePage = async () => {
  const queries = [QUERY_LIST.movie[0], QUERY_LIST.tv[0]];
  const movie = await listMedia("movie", queries[0].query);
  const tv = await listMedia("tv", queries[1].query);

  return (
    <div className="h-screen">
      <HeroCarousel medias={movie.results} />
      <MediaCarousel
        medias={movie.results}
        title="Popular Movies"
        keyName="title"
      />
      <MediaCarousel
        medias={tv.results}
        title="Popular TV Series"
        keyName="name"
      />
    </div>
  );
};

export default HomePage;
