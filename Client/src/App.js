import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './about/About';
import Detail from './components/detail/Detail';
import Error404 from './components/error404/Error404';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';


function App() {
   const { pathname } = useLocation();
   const navigate = useNavigate();  
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const EMAIL = 'memo@henry.com';
   const PASSWORD = 'pass1234';

   function login({email, password}){
      if(email === EMAIL && password === PASSWORD){
         setAccess(true)
         navigate('/home')
      }
      else alert('Usuario o contraseña invalida!');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access])
 

   function onSearch(id) {
      if(characters.find(char => char.id === Number(id))){
         return alert(`Ya existe el personaje con el ID ${id}`);
      }
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      }).catch((err) => alert(err.response.data.error));
   };

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
        { pathname !== '/' &&  <Nav onSearch={onSearch}/> }

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={
               <Cards characters={characters} onClose={onClose}/>
            }/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='*' element={<Error404/>}/>
         </Routes>

         
      </div>
   );
}

export default App;
