import { useEffect, useState } from 'react';
import { Message } from './Message';

export function SimpleForm() {
    const [formState, setFormState] = useState({
        username: 'obrn544',
        email: 'oobregon544@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {}, [formState]);

    return (
        <>
            <h1>Formulario</h1>

            <hr />

            <input
                type='text'
                name='username'
                className='form-control'
                placeholder='Username'
                value={username}
                onChange={onInputChange}
            />

            <input
                type='email'
                name='email'
                className='form-control mt-2'
                placeholder='email@google.com'
                value={email}
                onChange={onInputChange}
            />

            {username === 'obrn544' && <Message />}
        </>
    );
}
