## Functional components
- Render JSX
- JSX output pode ser configurada usando props
- Possui uma trigger que identifica uma atualização no *render*

```js
import React from "react";

function FunctionalComponent() {
 return <h1>Hello, world</h1>;
}
```

## Class components
- Render JSX
- JSX output pode ser configurada usando props
- Gerenciamento de estado
- Métodos de lifecycle
- Possui uma trigger que identifica uma atualização no *render*

```js
import React, { Component } from "react";

class ClassComponent extends Component {
 render() {
   return <h1>Hello, world</h1>;
 }
}
```

---

## Props

Propriedade sendo passada através de um componente
```js
<Component name="Matheus" />
```

Referência de um componente funcional o *props* é passado como um argumento na função. O *destructuring* esta sendo utilizado aqui.
```js
const FunctionalComponent = (props) => {
 return <h1>Hello, {props.name}</h1>;
};
```

Em uma classe é necessário usar *this* para se referir ao *props*.

```js
class ClassComponent extends React.Component {
  render() {
    const { name } = this.props;
    return <h1>Hello, { name }</h1>;
 }
}
```

---

## State vs props
*Props* e *state* são objetos em JS.

*props* são passados para o component (como parâmetro). São 'configurações' de um componente. São recebidos de cima e imutáveis no que diz respeito ao componente que os recebe.

*state* é gerenciado dentro do component (como variáveis declaradas dentro de uma função). O *state* começa com um valor padrão quando um componente é montado e, em seguida, sofre mutações no tempo (principalmente geradas a partir de eventos do usuário).

Um componente gerencia seu próprio estado internamente, mas - além de definir um estado inicial - não precisa mexer no estado de seus filhos.

---

## Stateless component
Apenas *props*, sem *state*.

Basicamente possui apenas a função *render* e toda sua lógica gira em torno dos *props* que recebe.

## Stateful component
Baseado em *props* e *state*.

Também conhecidos como gerenciados de estado. Responsáveis pela comunicação com cliente-servidor (XHR, web sockets, etc), processando dados e respondendo eventos do usuário.

Esse fluxo deve ser encapsulado em um número moderado de componentes com estado, enquanto toda a lógica de visualização e formatação deve ser transferida para o máximo possível de componentes sem estado.

---

## State em functional components

```js
const FunctionalComponent = () => {
 const [count, setCount] = React.useState(0);

 return (
   <div>
     <p>count: {count}</p>
     <button onClick={() => setCount(count + 1)}>Click</button>
   </div>
 );
};
```

## State em class components
```js
class ClassComponent extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     count: 0
   };
 }

 render() {
   return (
     <div>
       <p>count: {this.state.count} times</p>
       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
         Click
       </button>
     </div>
   );
 }
}
```
