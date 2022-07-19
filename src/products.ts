import Product from "../models/products-interface";

const products: Product[] = [
  {
    name: "Orange Juice",
    price: 4.0,
  },
  {
    name: "Spinach",
    price: 5.0,
  },
  {
    name: "Steak",
    price: 15.01,
  },
  {
    name: "Strawberries",
    price: 4.85,
  },
];

const calcAverageProductPrice = (array: Product[]): number => {
  let sum = 0;
  for (let item of array) {
    sum = item.price + sum;
  }
  return sum / array.length;
  console.log(sum);
};
