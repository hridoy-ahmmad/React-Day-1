import React, { useState } from 'react';

const Handle = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        alert('clicked')
    }
    const handleClick2 = (num) => {
        const result = num + 10
        alert(result)
    }
    const handleAdd = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={handleClick} >Click</button>
            <button onClick={() => handleClick2(10)} >Click2</button>
            <p>
                count:{count}
            </p>
            <button onClick={handleAdd} >Click2</button>
        </div>
    );
};

export default Handle;