import { useCounter } from '../hooks/useCounter';

export function CounterWithCustomHook() {
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>counter hook: {counter}</h1>

            <hr />

            <button className='btn btn-primary' onClick={() => increment(5)}>
                +1
            </button>
            <button className='btn btn-primary' onClick={reset}>
                Reset
            </button>
            <button className='btn btn-primary' onClick={() => decrement(10)}>
                -1
            </button>
        </>
    );
}
