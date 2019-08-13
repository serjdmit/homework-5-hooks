import React, {useEffect, useState} from 'react'
import {getJoke} from '../utils'

/*
  Напишите компонент, который загрузит шутку о Чаке Норрисе
  Используйте useEffect

  Вам придётся использовать асинхронный эффект. Это имеет свои особенности.
*/

export const UseEffectHook = () => {
    const [joke, setJoke] = useState('');
    useEffect(() => {
        getJoke().then((joke) => {
            setJoke(joke.value);
        });
    }, []);
    return (<div data-testid="joke">{joke}</div>)
}