import API from './api';

const commentService = {
  getList({ page = 1, per_page = 5, post = null, parent = 0 }) {
    return API.call().get('/wp/v2/comments', {
      params: {
        per_page,
        page,
        post,
        parent,
        order: 'asc',
      },
    });
  },
  addNewItem( author, content, post = null, parent = 0 ){
    return API.callWithToken().post('/wp/v2/comments', {
      authorId: author, 
      content: content, 
      postId: post, 
      parent: parent
    })
  }
};

export default commentService;