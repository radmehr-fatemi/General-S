import { createContext, useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";

//function
import { totalCounter } from "../helper/functions";

export const CartContext = createContext();

const setServer = async (payload, method) => {

    if (method === "CLEAR") {
        try {
            const res = await fetch(`/api/cart`, {
                method: method,
            })
            const data = await res.json();
            console.log(data, payload)
        } catch (err) {
            console.log("Error in setServer")
            return
        }

    } else {
        try {
            const res = await fetch(`/api/cart`, {
                method: method,
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify(payload)
            })
            const data = await res.json();
        } catch (err) {
            console.log("Error in setServer")
            return
        }
    }
}

const initialState = {
    selectedItems: [],
    ItemsCounter: 0,
    total: 0,
    checkout: false,
};

const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.some(item => item.id === action.payload.id)) {
                const itemA = { ...action.payload, qty: 1, };
                state.selectedItems.push({
                    ...itemA
                })
                s1(); async function s1() { await setServer(itemA, "POST"); }
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                checkout: false,
                ...totalCounter(state)
            }

        case "INCREMENT":
            if (state.selectedItems.some(item => item.id === action.payload.id)) {
                const productI = state.selectedItems.find(item => item.id === action.payload.id);
                productI.qty++
                s2(); async function s2() { await setServer(productI, "PATCH"); }
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...totalCounter(state),
                checkout: false
            }

        case "DECREMENT":
            if (state.selectedItems.some(item => item.id === action.payload.id)) {
                const productD = state.selectedItems.find(item => item.id === action.payload.id);
                productD.qty--
                s3(); async function s3() { await setServer(productD, "PATCH"); }
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...totalCounter(state),
                checkout: false
            }

        case "REMOVE":
            if (state.selectedItems.some(item => item.id === action.payload.id)) {
                const indexR = state.selectedItems.findIndex(item => item.id === action.payload.id);
                state.selectedItems.splice(indexR, 1);
                s4(); async function s4() { await setServer(action.payload, "DELETE"); }
            }

            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...totalCounter(state),
                checkout: false
            }

        case "CLEAR":
            s5(); async function s5() { await setServer("", "PURGE"); }
            return {
                selectedItems: [],
                ItemsCounter: 0,
                total: 0,
                checkout: false,
                ...totalCounter(state),
            }

        case "CHECKOUT":
            s6(); async function s6() { await setServer("", "PURGE"); }
            return {
                selectedItems: [],
                ItemsCounter: 0,
                total: 0,
                checkout: true,
                ...totalCounter(state),
            }

        case "GET_DATA":
            return {
                ...state,
                selectedItems: [...action.payload],
                ...totalCounter(state),
            }

        default:
            return state
    }
};

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { pathname } = useRouter();

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await fetch("/api/cart");
            const data = await res.json();

            if ( data.status === "success" ) dispatch({ type: "GET_DATA" ,payload: data.data })
        }
        fetchAPI()
        if ( pathname && !state.selectedItems.length ) fetchAPI()
    }, [pathname])

    
    return (
        <CartContext.Provider value={{ state, dispatch }} >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;