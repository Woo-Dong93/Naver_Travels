import React from 'react';

function Counter({number, diff, onIncrease, onDecrease, onSetDiff}) {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value));
    };
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type='number' value={diff} mim="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;