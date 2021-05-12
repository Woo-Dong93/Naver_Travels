import React from 'react';

// props 타입을 생성해줍니다.
type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseValue: (diff: number) => void;
}

function Counter({count, onIncrease, onDecrease, onIncreaseValue}: CounterProps) {
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
                <button onClick={()=>onIncreaseValue(7)}>+7</button>
            </div>
        </div>
    )
}

export default Counter;