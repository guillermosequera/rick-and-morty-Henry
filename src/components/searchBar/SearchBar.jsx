import { DivSearch, Input, Button } from "./SearchBarStyle";

export default function SearchBar({onSearch}) {
   return (
      <DivSearch>
         <Input type='search' />
         <Button onClick={onSearch}>Agregar</Button>
      </DivSearch>
   );
}
