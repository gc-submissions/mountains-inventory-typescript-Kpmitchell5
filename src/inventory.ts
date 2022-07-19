import InventoryItem from "../models/inventory-interface";

const InventoryItem = (name: string);

const inventory: InventoryItem[] = [
    {
     name: "motor",
    price: 10.00,
    quantity: 10,
    },
    {
        name: "sensor",
        price: 12.50,
        quantity: 4,
    },
    {
        name: "LED",
        price: 1.00,
        quantity: 20,
    },
;]

const calcInventoryValue = (array: InventoryItem[]): number => {
    if (array.length) {
        let totalInventoryValue: InventoryItem = array[0];
        array.forEach((item) => {
            if (item.price * item.quantity) {
                totalInventoryValue = item;
            }
        });
        return item;
    } else{
        return 0;
    }
};

