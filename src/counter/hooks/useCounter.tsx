import { useState } from "react"

export const useCounter = ( initialState:number ) => {

    const [counter, setCounter] = useState( initialState );

    const handleAdd = ( ) => {
        setCounter( counter + 1);
    }

    
    const handleSustract = ( ) => {
        setCounter( counter - 1);
    }

    const reset = ( ) => {
        setCounter(initialState)
    }

    return {
        counter,
        handleAdd,
        handleSustract,
        reset
    }
}
