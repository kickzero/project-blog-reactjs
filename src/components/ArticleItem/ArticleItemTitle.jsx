// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom";

export default function ArticleItemTitle({title, slug}) {
  return (
    <h2 className="article-item__title">
      <Link to={`post/${slug}`}>{title}</Link>
    </h2>
  );
}