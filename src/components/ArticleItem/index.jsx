import cls from 'classnames';
import './article-item.css';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemStats from './ArticleItemStats';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  post,
}) {
  
  if(!post) return <></>;
  const { id, title, slug, thumb, pubDate, authorName, authorAvatar, desc, categoriesId} = post;

  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  });

  return (
    <article className={classes}>
      <ArticleItemThumb thumb={thumb} title={title}/>
      <div className="article-item__content">
        {isShowCategoies && <ArticleItemCategories categoriesId={categoriesId}/>}
        {isShowCategoies && <ArticleItemStats />}

        <ArticleItemTitle slug={slug} title={title}/>

        {isShowDesc && <ArticleItemDesc desc={desc} />}

        <ArticleItemInfo authorName={authorName} pubDate={pubDate} authorAvatar={authorAvatar}  isShowAvatar={isShowAvatar} />
      </div>
    </article>
  );
}
