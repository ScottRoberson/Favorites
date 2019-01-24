import React, { Component } from 'react'
import PostsItem from './PostsItem';
 class Posts extends Component {
  render() {
    
    const{posts}=this.props;
    // console.log(this.props);
    
    return posts.map((post)=> (
      <PostsItem key={post.id} post={post}
      addFavs = {this.props.addFavs}
      />
    ))
        
  }
}

export default Posts;
