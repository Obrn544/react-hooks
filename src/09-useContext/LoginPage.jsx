import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export default function LoginPage() {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1>Login page</h1>
            <hr />

            <pre>{JSON.stringify(user)}</pre>

            <button
                className='btn btn-primary'
                onClick={() =>
                    setUser({
                        id: 123,
                        name: 'Omar',
                        email: 'oobregon544@gmail.com',
                    })
                }
            >
                Establecer usuario
            </button>
        </>
    );
}
