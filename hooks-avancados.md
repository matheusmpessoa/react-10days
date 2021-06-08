# Hooks
Hooks (ganchos) permitem que você use o *state* e outros recursos do *React* sem escrever uma classe.

Hooks adicionais:
* useRef
* useImperativeHandle
* useLayoutEffect
* useReducer
* useDebug

Hooks mais utilizados para resolver problemas de perfomance:
* useCallback
* useMemo

---

## useRef
Retorna um objeto ref mutável, no qual a propriedade .current é inicializada para o argumento passado (initialValue).
O objeto retornado persistirá durante todo o ciclo de vida do componente.

useRef é como uma “caixa” que pode conter um valor mutável em sua propriedade *.current*.

o useRef não avisa quando o conteúdo é alterado. Mover a propriedade .current não causa uma nova renderização

Acessando elemento via DOM
```js
import { useRef, useEffect } from "react";

export default function Component() {
  const textRef = useRef(null);

  useEffect(() => {
    console.log(textRef.current.offsetWidth); // Get element width
  }, [])

  return <p ref={textRef}>Exemplo com botão</p>;
}
```

Valor acessado por current:
```js
const time = useRef(0);
console.log(time.current); // 0;
```

## useImperativeHandle
Permite customizar o valor de uma *ref* do elemento pai através do componente filho. Ele deve ser utilizado junto com o *forwardRef* no elemento filho para receber a *ref* do pai.

```js
import { useImperativeHandle, forwardRef, useEffect, useRef } from "react";

const Input = forwardRef((props, parentRef) => {
  const childRef = useRef();
  const someMethod = () => 1;

  useImperativeHandle(parentRef, () => ({
    focusOnChildInput: () => childRef.current.focus(),
    callChildMethod: someMethod,
  }));

  return <input ref={childRef} />;
});

const Form = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref) {
      ref.current?.callChildMethod?.(); // 1
      ref.current?.focusOnChildInput?.();
    }
  }, []);

  return (
    <form>
      <Input ref={ref} />
    </form>
  );
};
```

## useLayoutEffect
Tem a mesma função do *useEffect*, porém, ela é executada assim que o navegador termina de fazer as alterações no DOM.

```js
import { useState, useLayoutEffect } from "react";

function Component() {
  const [isDOMLoaded, setIsDOMLoaded] = useState(false);

  useLayoutEffect(() => {
    setIsDOMLoaded(true);
    window.localstorage.getItem("...");
  }, []);
  
  return(
    //...
  )
}
```

## useReducer
Alternativa ao *useState* e bem parecido com a idéia de reducer do Redux. Ele observa um type pré definido a retorna algum valor dependendo desse type.

Muito útil na otimização de componentes que disparam profundas atualizações, pois é possível passar o dispatch para baixo, ao invés de callbacks.

Definição de um estado inicial de um *useReducer*:
```js
const [state, dispatch] = useReducer(
  reducer,
  {count: initialCount}
);
```

useReducer completo:
```js
function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action, init) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>

        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

---

## useCallback
Utilizado para criar uma referência única pra uma função e o React saber que é ela mesma e evitar atualizações desnecessárias. Sua referência só será diferente caso seus parâmetros mudem.



## useMemo
*useMemo* memoriza os parâmetros e o retorno de uma função complexa, que tem um custo para ser processada. Possível utiliza-lo para economizar tempo e processamento.

A função passada para useMemo será executa durante a renderização.

Imagine que você tenha uma função que receba alguns parâmetros e faça um cálculo usando esses parâmetros, quando esses parâmetros forem iguais novamente, ele irá retornar o valor anterior, sem precisar calcula-lo.

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

```js
import { useMemo } from "react";

export default function Component() {
  const value = useMemo(() => {
    // Faz algo complexo e demorado.
    // Se x e y já tiverem sido usados, irá retornar o valor anterior memorizado.
  }, [x, y]);
}
```


