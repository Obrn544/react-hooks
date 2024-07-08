import { memo } from 'react';

export const Small = memo(({ value }) => {
    console.log('uwu');

    return (
        <>
            <small>{value}</small>
        </>
    );
});
