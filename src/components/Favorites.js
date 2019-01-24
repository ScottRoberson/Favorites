import React, { Component } from 'react'
import FavList from './FavList'
 class Favorites extends Component {
  render() {
    
    // const {favs}=this.props;
    console.log(this.props.favs);
    const favs=this.props.favs
    // const {favs} = this.props.favs;
    return favs.map(fav =>(
      <FavList fav={fav}/>
    ))
      
  
      
    
        
      
    
    
  }
}

export default Favorites;
