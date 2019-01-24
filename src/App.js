import React, { Component } from 'react';
import Posts from './components/Posts';
import Favorites from './components/Favorites';
import Header from './components/Header';

import './App.css';



class App extends Component {
  
  state = {
    posts:[
      {
        id:1,
        title:'This is post 1',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum et ducimus. Magni, ex tempore.',
        liked:false
      },
      {
        id:2,
        title:'This is post 2',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum et ducimus. Magni, ex tempore.',
        liked:false
      },
      {
        id:3,
        title:'This is post 3',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum et ducimus. Magni, ex tempore.',
        liked:false
      }
    ],
    favs:[]
  }



addFavs = (id)=>{
  const postId = this.state.posts.find(post => post.id ===id);
  this.setState((prevState,id)=> ({    
      favs:[
        ...prevState.favs,{
         id:postId
        }
      ]
     
    }));
    
}  
  
  render() {  
    console.log(this.state.favs);
    console.log(this.state.posts) 
    return (
      <div className="App">
        <Header/>  
      <h1>Hello from App</h1>
        <Posts 
        posts={this.state.posts}
        addFavs={this.addFavs}
        />
        <Favorites 
        favs={this.state.favs}
        />
      </div>
    );
  }
}

export default App;
