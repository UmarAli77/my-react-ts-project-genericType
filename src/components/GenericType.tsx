// import React from 'react'

function GenericType() {
    function minus<Z, C>(a: C, b: Z) {
        return String(a) + String(b)
    }
    minus<number, string>('100', 150);
    minus<string, number>(100, '150');
    return (
        <div>
            <h1>Generic Type</h1>
        </div>
    )
}

export default GenericType
