import React, { ChangeEvent, FormEvent, useState } from 'react';


type TodoInsertProps = {
    onInsert: (text: string) => void;
}


function TodoInsert({ onInsert }: TodoInsertProps) {
    const [value, setValue ] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    value={value}
                    placeholder="여기에 입력하세요."
                    onChange={onChange}
                />
                <button type='submit'>등록</button>
            </form>
        </div>
    )
}

export default TodoInsert;