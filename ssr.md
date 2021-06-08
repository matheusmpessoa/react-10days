# SSR
Se você estiver usando Server Side Render (como NextJS), os hooks useLayoutEffect e useEffect não funcionaram, pois ele só são executados no client-side. Caso contrário, o React irá te avisa no console que você está usando no lado do server.

É possível usa-los para interagir com o window, por exemplo, que é uma propriedade somente do browser.