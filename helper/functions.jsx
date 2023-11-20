const shortHandler = ( text ,dig ) => {
    const once = text.split("");
    const twice = once.slice( 0 ,dig )
    return twice
}

export { shortHandler }