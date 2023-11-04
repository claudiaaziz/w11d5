import { useState } from "react";
import { useDispatch } from "react-redux";
// ! [9a] import thunk createTea action
import { createTea } from "../store/teaReducer";


const AddTeaForm = (props) => {
    const dispatch = useDispatch();

    const [flavor, setFlavor] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const tea = {
            id: Math.floor(Math.random()*1000),
            flavor,
            price
        }
        // ! [9b] replace the old POJO action with thunk action
        dispatch(createTea(tea));
        setFlavor("");
        setPrice("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Flavor: 
                <input type="text" value={flavor} onChange={e => setFlavor(e.target.value)}/>
            </label>
            <label>Price: 
                <input type="text" value={price} onChange={e => setPrice(e.target.value)}/>
            </label>
            <input type="submit" name="Add Tea" />
        </form>
    )
}

export default AddTeaForm;