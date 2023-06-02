import style from './Card.module.css';

export default function Card({onClose, name, status, species, gender, origin, image}) {
   return (
      <div className={style.container}>
         <button onClick={onClose}>X</button>
         <h2 className={style.titleName}>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} /> 
      </div>
   );
}
