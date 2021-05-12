import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReduver = combineReducers({
    counter,
    todos
});

export default rootReduver;

// 컴포넌트에서 useSelector를 사용하여 state를 받을 때 사용할 타입을 미리 정의해줍니다.
export type RootState = ReturnType<typeof rootReduver>;