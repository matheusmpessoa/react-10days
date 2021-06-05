# Lifecycle
Possui 4 momentos
* Mounting (adicionando nodes ao DOM)
* Updating (alterando nodes existentes no DOM)
* Unmounting (removendo nodes do DOM)
* Errors (verifica se seu código funciona e se está livre de erros)

Mounting -> Updating -> Unmounting | Errors

---

## Mounting lifecycle
1. *constructor* - primeira instância do componente.
2. *static getDerivedStateFromProps* - possui a função de garantir que o estado e os adereços estejam sincronizados para quando for necessário.
3. *static getDerivedStateFromProps* - o próximo método de ciclo de vida na linha é o método de renderização.
4. *componentDidMount* - após o render ser chamado o componente é montado no DOM e o método componentDidMount é chamado.

## Updating lifecycle
1. *static getDerivedStateFromProps* - primeiro método do lifecycle a ser chamado durante a fase de atualização
2. *shouldComponentUpdate* - método chamado na sequência do anterior.
3. *render* - chamado imediatamente depois, dependendo do valor retornado de *shouldComponentUpdate*, cujo padrão é true.
4. *getSnapshotBeforeUpdate* - armazena os valores anteriores do estado após a atualização do DOM.
5. *componentDidUpdate* - recebe os props anteriores e o estado como argumentos

## Unmounting lifecycle
1. *componentWillUnmount* - chamado antes de um componente ser desmontado e destruído. Este é o lugar ideal para realizar qualquer limpeza necessária, como limpar timers, cancelar requests ou limpar qualquer subscriptions.

## Errors
1. *static getDerivedStateFromError* - sempre que um erro é lançado em um componente descendente, este método é chamado primeiro e o erro lançado é passado como um argumento.
2. *componentDidCatch* - chamado depois que um erro em um componente descendente é lançado. Além do erro gerado, é passado mais um argumento que representa mais informações sobre o erro
