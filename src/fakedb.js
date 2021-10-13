// Catch the 'shopping_cart' from local storage
const getDb = () => localStorage.getItem('shop_cart');

// update the 'shopping_cart' with new cart 
const updateDb = cart => {
    localStorage.setItem('shop_cart', JSON.stringify(cart));
}

// Catch the 'shopping_cart' from local storage
const addToDb = id => {
    const exists = getDb();
    let shop_cart = {};
    if (!exists) {
        shop_cart[id] = 1
    }
    else {
        shop_cart = JSON.parse(exists)
        if (shop_cart[id]) {
            const newCount = shop_cart[id] + 1;
            shop_cart[id] = newCount;
        }
        else {
            shop_cart[id] = 1
        }
    }
    updateDb(shop_cart)
}
// Remove from storage with specific item

const removeFromDb = id => {
    const exists = getDb()
    if (exists) {
        const shop_cart = JSON.parse(exists);
        delete shop_cart[id];
        updateDb(shop_cart)
    }
}

// return a storage if  it exists or return a blank 
const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}

// Clear the whole storage
const clearTheCart = () => {
    localStorage.removeItem('shop_cart');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }