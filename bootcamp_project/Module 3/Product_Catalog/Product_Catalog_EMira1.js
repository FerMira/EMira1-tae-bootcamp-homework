var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var product = {
    id: 25669,
    name: "Electric Screwdriver",
    price: 180,
    tags: ["New", "Imported", "Germany"]
};
console.log("Product is: ");
console.log(product);
var newProduct = __assign({}, product);
console.log("New Product is: ");
console.log(newProduct);
var archivedTags = __spreadArray([], product.tags, true);
console.log("Arcived tags are: ");
console.log(archivedTags);
newProduct.name = "Another Screwdriver";
newProduct.price = 195;
newProduct.tags = ["New", "Local", "Argentina"];
console.log(product);
console.log(newProduct);
