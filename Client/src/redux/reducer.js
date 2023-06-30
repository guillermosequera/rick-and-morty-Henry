import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions/actions_types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

function rootReducer(state = initialState, {type, payload}) {
    switch(type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.allCharacters, payload],
                allCharacters:[...state.allCharacters, payload]
            }
        case FILTER:
            const filtered = state.allCharacters.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites: payload === 'All' ? state.allCharacters : filtered
            }
        case ORDER:
            const orderChar = state.myFavorites.sort((a, b) => {
                if(payload === 'A'){
                    return a.id - b.id;
                }else{
                    return b.id - a.id
                }
            }) 
            return {
                ...state,
                myFavorites:[orderChar]

            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites:state.myFavorites.filter(char => char.id !== payload)
            }
        default:
            return {...state}
    }
}

export default rootReducer;