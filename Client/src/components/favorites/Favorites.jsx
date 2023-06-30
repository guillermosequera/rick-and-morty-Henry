import { connect } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import Card from "../card/Card";

function Favorites({ myFavorites }) {

    const dispatch = useDispatch();

    const handleOrder = function(e) {
        dispatch(orderCards(e.target.value))
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

  return <div>
        <div>
            <select name="order" onChange={handleOrder}>
                <option value="A">A</option>
                <option value="D">D</option>
            </select>
            <select name="filter" onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknow">unknow</option>
            </select>
        </div>
        <div>{myFavorites.map((id, name, status, species, gender, origin, image) => {
            (<Card
                key={id}
                id={id}
                name={name}
                stauts={status}
                species={species}
                gender={gender}
                origin={origin}
                image={image}
            />)
        })}</div> 
    </div>
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)
