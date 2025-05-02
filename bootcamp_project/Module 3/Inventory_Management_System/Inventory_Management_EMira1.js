var inventory = [
    { id: 1, name: "TV", price: 99.99 },
    { id: 2, name: "Notebook", price: 1200 },
    { id: 3, name: "Cellphone", price: 150 },
    { id: 4, name: "Toy", price: 99.99 }
];
console.log("Add a new item to the inventory array");
inventory.push({ id: 5, name: "Table", price: 199.99 });
console.log(inventory);
console.log("Remove an item from the array based on its id. In this case Item with ID=2");
var removeID = 2;
for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].id === removeID) {
        inventory.splice(i, 1);
    }
}
console.log(inventory);
console.log("Search for another item based on its id and modify its initial price. Cellphone goes from 150 to 129.99");
var modifyID = 3;
for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].id === modifyID) {
        inventory[i].price = 129.99;
    }
}
console.log(inventory);
console.log("Printing each Property");
// for ( let i: number = 0; i < inventory.length; i++ ) {
//     for (let key in inventory[i]) {
//         console.log("Index " + i + " => " + `${key}: ${inventory[i][key]}`);
//     }
// }
for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
    var item = inventory_1[_i];
    for (var key in item) {
        console.log("Index " + inventory.at(item.id) + " => " + "".concat(key, ": ").concat(item[key]));
    }
}
