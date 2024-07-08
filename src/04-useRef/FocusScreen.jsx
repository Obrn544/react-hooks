import { useRef } from 'react';

export default function FocusScreen() {
    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type='text'
                placeholder='Ingrese su nombre'
                className='from-control'
            />

            <button className='btn btn-primary' onClick={onClick}>
                Set focus
            </button>
        </>
    );
}
