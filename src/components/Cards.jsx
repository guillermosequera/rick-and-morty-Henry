import Card from './Card';

export default function Cards({characters}) {
   return (
      <div>{characters.map(({id, name, status, species, gender, origin, image}) => (

         <Card
            key={id}
            name={name}
            stauts={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
         
      ))}</div>
   );
}
