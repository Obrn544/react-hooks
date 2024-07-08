import { useLayoutEffect, useRef } from 'react';

export function PokemonCard({ id, name, sprites = {} }) {
    const pRef = useRef();

    useLayoutEffect(() => {
        console.log(pRef.current.getBoundingClientRect());
    }, [name]);

    return (
        <section style={{ height: 200 }}>
            <h2 className='text-capitalize'>
                #{id} - {name}
            </h2>

            <div>
                {sprites.map((sprite) => (
                    <img key={sprite} src={sprite} alt={name} />
                ))}
            </div>
        </section>
    );
}
