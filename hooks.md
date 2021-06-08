# Hooks
Hooks (ganchos) permitem que você use o *state* e outros recursos do *React* sem escrever uma classe.

Hooks básicos:
* useState
* useEffect
* useContext

---

## useState
Permite armazenar qualquer valor em um componente, como: string, object, array, boolean, number, null.

Você pode definir seu valor passando um valor direto ou uma função que acessa seu valor atual e retornando um novo.

```js
import { useState } from "react";

export default function Component() {
  const [counter, setCounter] = useState(0);

  const onIncreaseHandler = () => {
    setCounter((prev) => ++prev)
  }

  return (
    <>
      <p>Clicks: {counter}</p>
      <button onClick={onIncreaseHandler}>Increase +1</button>
    </>
  );
}
```

# useEffect
Permite executar uma função em alguns momento durante o lifecycle de um componente:

- Chamado após a renderização do componente.
- 
- Quando um valor observado é alterado.
- Quando o componente é unmounting (desmontado).

```js
import { useEffect } from "react";

export default function Component() {
  const [filters, setFilters] = useState([]);
  const fetchSomething = (params) => {};
  const onResizeScreenHandler = () => {};

  // Observa mudanças no estate filters.
  useEffect(() => {
    fetchSomething(filters);
  }, [filters]);

  // Adiciona e remove um event listener no document.
  useEffect(() => {
    document.addEventlistener("resize", onResizeScreenHandler);
    return () => document.removeEventlistener("resize", onResizeScreenHandler);
  }, []);
  
  return (
    // ...
  )
}
```

```js
useEffect(() => {
  // Executa a função logo antes de desmontar o componente.
  return () => doSomething();
}, []);
```

## useContext
Permite armazenar e acessar um valor em qualquer lugar dentro de sua hierarquia. Isso é útil quando você utiliza muito um valor e não quer ficar passando ele para os componentes filhos via props.
```js
const value = useContext(MyContext);
```

Context.provider:
```js
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```
