const initState = {
    inpVal: '',
    list: [1, 2, 3]
}

export default (state=initState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'CHANGE_INPUT_VAL':
            // const newState = JSON.parse(JSON.stringify(state));
            newState.inpVal = action.value;
            return newState;
            
        case 'ADD_TODO_ITEM':
            newState.list.push(action.value);
            newState.inpVal = '';
            // console.log(newState.list)
            return newState;

        case 'DELETE_TODO_ITEM':
            newState.list.splice(action.index, 1);
            // console.log(newState.list)
            return newState
        default:
            break;
    }
    return state;
}