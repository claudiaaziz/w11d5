// ! [4a]
import * as TeaAPIUtil from '../util/tea_api_util';

// CONSTANTS:
const RECEIVE_TEA = 'teaShop/teas/RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';

// ACTION CREATORS:
export const receiveTea = tea => {
    return {
        type: RECEIVE_TEA,
        tea
    }
};

export const receiveTeas = teas => {
    return {
        type: RECEIVE_TEAS,
        teas
    }
};

export const removeTea = teaId => {
    return {
        type: REMOVE_TEA,
        teaId
    }
};

// ! [4] THUNK ACTION CREATORS
// index thunk
export const fetchAllTeas = () => async (dispatch) => {
    const result = await TeaAPIUtil.requestTeas();
    const teas = await result.json();
    dispatch(receiveTeas(teas));
};

// createTea
export const createTea = (tea) => async (dispatch) => {
    const result = await TeaAPIUtil.postTea(tea);
    const data = await result.json();
    dispatch(receiveTea(data));
};

// REDUCER:

const teaReducer = (state = {}, action) => {
    const nextState = Object.assign({}, Object.freeze(state));
    // const nextState = {...Object.freeze(state)};

    switch (action.type) {
        case RECEIVE_TEA:
            nextState[action.tea.id] = action.tea;
            return nextState;
            // return {...nextState, ...action.tea};
        case RECEIVE_TEAS:
            return {...nextState, ...action.teas};

            // nextState = {
            //     1: {
            //         id: 1
            //     }
            // }

            // action.teas = {
            //     2: {
            //         id: 2
            //     },
                // 3: {
                //     id: 3
                // }
            // }
        case REMOVE_TEA:
            delete nextState[action.teaId];
            return nextState;
        default:
            return nextState;
    };
};

export default teaReducer;