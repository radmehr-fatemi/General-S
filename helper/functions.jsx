const shortHandler = ( text ,dig ) => {
    const once = text.split("");
    const twice = once.slice( 0 ,dig )
    return twice
}

const findQuantity = ( data ,id ) => {
    if ( data.some( item => item.id === id ) ) {
        const itemQ = data.find( item => item.id === id );
        return itemQ.qty
    } else {
        return 0
    }
}

export { shortHandler ,findQuantity }