import { useEffect, useState } from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions/actions'

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((charFav) => {
         if(charFav.id === id) {
            setIsFav(true)
         }
      });
   }, [myFavorites]);

   function handleFavorites() {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav(id, name, status, species, gender, origin, image)
      }
   }

   return (
      <div className={style.container}>
         <button onClick={() => onClose(id)}>X</button>
         {isFav ? ( <button onClick={handleFavorites}>❤️</button>):
         ( <button onClick={handleFavorites}>🤍</button>)}
         <Link to={`/detail/${id}`}>
         <h2 className={style.titleName}>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} /> 
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps) (Card);
