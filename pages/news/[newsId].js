import { useRouter } from "next/router";

// our-domain.com/news/details

const Details = () => {
  const route = useRouter();
  console.log(route.query.newsId);
  return <h1>The {route.query.newsId} Page</h1>;
};

export default Details;
