import { useState } from "react";

import { DivSearch, Input, Button } from "./SearchBarStyle";

export default function SearchBar({onSearch}) {
   const [ id, setId] = useState('');

   function handleChange(event) {
      // console.log(event.target.value);
      setId(event.target.value)
   }

   return (
      <DivSearch>
         <Input type='search' onChange={handleChange}/>
         <Button onClick={() => onSearch(id)}>Agregar</Button>
      </DivSearch>
   );
}
