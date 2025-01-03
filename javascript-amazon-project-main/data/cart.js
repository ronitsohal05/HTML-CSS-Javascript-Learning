export const cart = [];

export function addToCart(productId){
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    if(matchingItem){
        matchingItem.quantitiy+=1;
    }else{
        cart.push({
            productId: productId,
            quantitiy: 1
        });
    }
}
