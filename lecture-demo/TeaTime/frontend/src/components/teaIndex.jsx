// ! [8a] useEffect & useDispatch
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchAllTeas } from "../store/teaReducer";

const TeaIndex = (props) => {
    // Subscribing the component to the state
    const teas = useSelector(state => state.teas);
    
    // ! [8b]
    const dispatch = useDispatch();

    // ! [8c]
    useEffect(() => {
        dispatch(fetchAllTeas());
    }, [dispatch]);

    return (
        <div>
            <h1>Tea Index:</h1>
            {Object.values(teas).map(tea => (
                <li>
                    <p>Flavor: {tea.flavor}</p>
                    <p>Price: {tea.price}</p>
                </li>
            ))}
        </div>
    );
}

export default TeaIndex;