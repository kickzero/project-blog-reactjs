import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostDetailContent from '../components/PostDetail/PostDetailContent';
import PostDetailHead from '../components/PostDetail/PostDetailHead';
import PostDetailSidebar from '../components/PostDetail/PostDetailSidebar';
import { actFetchArticleDetailAsync } from '../store/post/action';

function PostDetailPage() {
  const {slug} = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.POST.articlesDetail);

  useEffect(()=>{
    dispatch(actFetchArticleDetailAsync(slug));
  }, [slug, dispatch])

  if(!post) return <></>;

  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead post={post}/>

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent thumb={post.thumb} contentHTML={post.contentHTML} />

            <PostDetailSidebar post={post}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
