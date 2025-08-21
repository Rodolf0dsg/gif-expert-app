import { useCounter } from "../hooks/useCounter"


export const MyCounterApp = () => {

    const { counter, 
            handleAdd, 
            handleSustract, 
            reset
        } = useCounter(5)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h1>{counter}</h1>

            <div style={{ display: 'flex', gap: '10px'}}>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleSustract}>-1</button>
                <button onClick={reset}>Reset</button>
            </div>

        </div>
    )
}
