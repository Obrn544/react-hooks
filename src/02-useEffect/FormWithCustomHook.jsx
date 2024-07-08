import { useForm } from '../hooks/useForm';

export function FormWithCustomHook() {
    const { formState, onResetForm, onInputChange, username, email, password } =
        useForm({
            username: '',
            email: '',
            password: '',
        });

    // const { username, email, password } = formState;

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
                placeholder='Email'
                value={email}
                onChange={onInputChange}
            />

            <input
                type='password'
                name='password'
                className='form-control mt-2'
                placeholder='Contraseña'
                value={password}
                onChange={onInputChange}
            />

            <button className='btn btn-primary mt-2' onClick={onResetForm}>
                Borrar
            </button>
        </>
    );
}
