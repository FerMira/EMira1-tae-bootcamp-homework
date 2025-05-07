const product = { 
    id: 25669, 
    name: "Electric Screwdriver",
    price: 180,
    tags: ["New", "Imported", "Germany"] 
};

console.log("Product is: ");
console.log( product );

let newProduct = { ...product };
console.log("New Product is: ");
console.log( newProduct );

let archivedTags = [ ...product.tags ];
console.log("Archived tags are: ");
console.log( archivedTags );

newProduct.name = "Another Screwdriver";
newProduct.price = 195;
newProduct.tags = ["New", "Local", "Argentina"];

console.log("Printing both products: ");
console.log(product);
console.log(newProduct);
