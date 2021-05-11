// 액션 타입 만들기 : Docks 패턴으로 만들 때 접두사를 넣어줘야 모듈을 합칠 때에 액션 이름 중복을 피할 수 있습니다.
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수 만들기
export const setDiff = diff => ({type: SET_DIFF, diff});
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// 초기 상태 만들기
const initialState = {
    number: 0,
    diff: 1
};

// 리듀서 만들기 : module로 export 합니다.
export default function counter(state = initialState, action){
    switch (action.type){
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            };
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            };
        default:
            return state;
    }
}