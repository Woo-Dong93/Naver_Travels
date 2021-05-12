import { createAction, createReducer, ActionType } from 'typesafe-actions';

const INCREASE_VALUE = 'counter/INCREASE_VALUE' as const;
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;

// 액션 생성함수 만들기
// createAction을 활용해 간단하게 생성자 함수를 만들 수 있다.
// 첫번째 인자 : 타입 상수, 두번째 인자 : 콜백함수, value를 받아서 payload에 넣어주는 함수
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
// 액션에 전달되는 값이 존재할 경우 마지막에 payload 타입을 써야 합니다.
export const increaseValue = createAction(INCREASE_VALUE, (diff: number) => diff)<number>();

// 액션 객체 타입 생성
// ActionType을 활용해서 한번에 액션 타입을 만들 수 있습니다.
const actions = { increase, decrease, increaseValue };
type CounterActoin = ActionType<typeof actions>;

// 리덕스에서 관리할 글로벌 상태 타입 선언
type CounterState = {
    count: number;
}

// 초기 상태 만들기
const initialState: CounterState = {
    count: 0
};

// 리듀서 만들기 
// createReducer을 통해 정말 편리하게 리듀서를 생성할 수 있습니다.
// 메서드 채이닝 방식을 활용하면 액션 생성자 함수를 넣을 수 있습니다.
const counter = createReducer<CounterState, CounterActoin>(initialState)
    .handleAction(increase, (state) => ({ count: state.count + 1 }))
    .handleAction(decrease, (state) => ({ count: state.count - 1 }))
    .handleAction(increaseValue, (state, actions) => ({ count: state.count + actions.payload }));

export default counter;