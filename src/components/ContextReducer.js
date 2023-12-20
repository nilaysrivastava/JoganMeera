import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const existingItem = state.find(item => item.id === action.id);
        if (existingItem) {

          return state.map(item =>
            item.id === action.id
              ? { ...item, qty: item.qty + action.qty, totalPrice: item.totalPrice + action.totalPrice }
              : item
          );
        } else {
          return [
            ...state,
            {
              id: action.id,
              name: action.name,
              qty: action.qty,
              img: action.img,
              totalPrice: action.totalPrice,
              price: action.price
            }
          ];
        }
  
      case "REMOVE":
        const itemToRemove = state.find(item => item.id === action.id);
        if (itemToRemove) {
          return state.filter(item => item.id !== action.id);
        }
        return state;

        case "DROP":
            const updatedState = state.filter(item => item.id !== action.id);
            return updatedState;
            
        case "DROP_ALL":
            return [];    
  
      default:
        console.log("Error in Reducer");
        return state;
    }
  };

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
