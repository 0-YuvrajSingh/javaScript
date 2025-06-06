const myNums = [1, 2, 3, 4];

const newNums = myNums.reduce( (accumulator,currentValue) => {
    console.log(`Accumulator : ${accumulator} , CurrentVAlue : ${currentValue}`);
    return accumulator + currentValue;
}, 0);
// OR :

// const newNums = myNums.reduce( (accumulator,currentValue) => accumulator + currentValue, 0);
console.log(newNums)

const shoppingCart = [
    {
        itemName: "py Course",
        price: 12999
    },
    {
        itemName: "js Course",
        price: 9999
    },
    {
        itemName: "java Course",
        price: 11999
    }
];

const totalPrice = shoppingCart.reduce( (total, item) => total + item.price, 0);
console.log(totalPrice);