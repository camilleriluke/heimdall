export function updateItem (item) {
    return { type: 'UPDATE_ITEM', item };
}

export function deleteItem () {
    return { type: 'DELETE_ITEM' };
}
