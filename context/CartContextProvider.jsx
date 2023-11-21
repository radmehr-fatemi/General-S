import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    selectedItems: [],
    ItemsCounter: 0,
    total: 0,
    checkout: false,
};

const reducer = (state, dispatch) => {
    switch (dispatch.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.some(item => item.id === dispatch.payload.id)) {
                state.selectedItems.push({
                    ...dispatch.payload,
                    qty: 1,
                })
                return {
                    ...state,
                    selectedItems: [...state.selectedItems],
                    checkout: false
                }
            }

        case "INCREMENT":
            if (state.selectedItems.some(item => item.id === dispatch.payload.id)) {
                const productI = state.selectedItems.find(item => item.id === dispatch.payload.id);
                productI.qty++

                return {
                    ...state,
                    selectedItems: [...state.selectedItems],
                    checkout: false
                }
            }

        case "DECREMENT":
            if (state.selectedItems.some(item => item.id === dispatch.payload.id)) {
                const productD = state.selectedItems.find(item => item.id === dispatch.payload.id);
                productD.qty--

                return {
                    ...state,
                    selectedItems: [...state.selectedItems],
                    checkout: false
                }
            }

        case "REMOVE":
            if (state.selectedItems.some(item => item.id === dispatch.payload.id)) {
                const indexR = state.selectedItems.findIndex(item => item.id === dispatch.payload.id);
                state.selectedItems.splice(indexR, 1);

                return {
                    ...state,
                    selectedItems: [...state.selectedItems],
                    checkout: false
                }
            }

        case "CLEAR":
            return {
                selectedItems: [],
                ItemsCounter: 0,
                total: 0,
                checkout: false,
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                ItemsCounter: 0,
                total: 0,
                checkout: false,
            }

    }
};

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ state ,dispatch }} >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;