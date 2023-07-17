const URL_BASE = 'https://rickandmortyapi.com/api/character/';
const axios = ('axios');

const getCharById = (req, res) => {
    const { id } = req.params;

    axios.get(`${URL_BASE}/${id}`)
    .then(({ data }) =>{
        const {  status, name, species, origin, image, gender} = data

        const character = {id, status, name, species, origin, image, gender}

        return character.name ? res.status(200).json(character)
        : res.status(400).send('Not Found')
    })
    .catch(err => res.status(500).send(err.message));
} 

module.exports = getCharById;