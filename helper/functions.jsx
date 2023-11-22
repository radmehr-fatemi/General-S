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

const totalCounter = (state) => {
    const itemsCounter = state.selectedItems.reduce( (acc ,cur) => acc + cur.qty ,0);

    const total = state.selectedItems.reduce( (acc ,cur) => acc + ( cur.qty * cur.price ) ,0);
    
    const totalDiscount = state.selectedItems.reduce( (acc ,cur) => acc + ( (cur.discountPercentage / 100) * (cur.price)  ),0);

    const finalTotal = total - totalDiscount;

    return {
        total,itemsCounter ,totalDiscount ,finalTotal
    }
}

export { shortHandler ,findQuantity ,totalCounter }