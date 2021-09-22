import { Fragment } from "React";
import Link from "next/link";
// our-domain.com/news

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="news/news1">News1</Link>
        </li>
        <li>
          <Link href="news/news2">News2</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
