import React, { useState } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

export const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    return (
        <form>
            <input type="text" data-testid='email-input' value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input type="password" data-testid='password-input' value={password} onChange={(event) => setPassword(event.target.value)}/>
            <input type="button" value="Submit" data-testid='submit' onClick={() => {
                setSuccess(() => {
                    if(email && password) {
                        return "Вы вошли";
                    } else return '';
                })
            }}/>
            {success && <div data-testid='success-message'>{ success }</div>}
        </form>
    )
};
