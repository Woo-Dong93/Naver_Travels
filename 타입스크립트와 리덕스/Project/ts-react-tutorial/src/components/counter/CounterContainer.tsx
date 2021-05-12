import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Counter from './Counter';
import { RootState } from '../../modules'
import { increase, decrease, increaseValue } from '../../modules/counter';

function CounterContainer(){
    // 루트 리듀서에서 ReturnType으로 생성한 루트 리듀서의 상태 타입을 넣어줍니다.
    // count type은 useSelector가 유추해줍니다.
    const count = useSelector((state: RootState) => state.counter.count );

    const dispatch = useDispatch();

    // 액션 생성자 함수를 바탕으로 디스패치와 함께 이벤트를 생성 합니다.
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onIncreaseValue = (diff: number) => dispatch(increaseValue(diff));

    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseValue={onIncreaseValue}
        />
    )
}

export default CounterContainer;