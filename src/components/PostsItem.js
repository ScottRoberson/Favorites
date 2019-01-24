import React, { Component } from 'react'

 class PostsItem extends Component {
  render() {
    
    const {title, body,id} = this.props.post;
    // console.log(this.props.post);
    
    return (
      <div style={{width:'500px',margin:'0 auto'}}>
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={(e)=>this.props.addFavs(id) } style={btnStyle}>x</button>
      </div>
    )
  }
}

const btnStyle = {
  background:'#3b5998',
  color:'#fff',
  padding:'5px 8px',
  fontSize:'1rem'
}

export default PostsItem;
