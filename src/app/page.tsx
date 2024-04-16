import React from 'react';

export default function Page() {
    return (
        <>
            <h1 className='underline'>Hello! Env : {process.env['NEXT_PUBLIC_ENVIRONNEMENT']}</h1>
        </>
    );
}
