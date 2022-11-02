const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch(action.type) {
        case "ADDPRODUCT":
            //const isExisting = state.find(each => each.id === product.id);
            const prodIndex = state.findIndex(each => each.id === product.id);
            if(prodIndex >= 0) {
                const newState = [...state];
                newState[prodIndex].qty += 1;
                return [...newState];
            } else {
                return [...state, {...product, qty: 1}]
            }
            break;

        case "DELETEPRODUCT":
            const isExisting = state.find(each => each.id === product.id);
            if(isExisting.qty === 1) {
                return state.filter(each => each.id !== product.id);
            } 
            else {
                const prodIndex = state.findIndex(each => each.id === product.id);
                if(prodIndex >= 0) {
                    const newState = [...state];
                    newState[prodIndex].qty -= 1;
                    return [...newState];
                }
            }
            break;

        default:
            return state;
    }
}

export default handleCart;