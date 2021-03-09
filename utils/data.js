import { v4 as generateRandomId } from 'uuid';

export const materials = [
  {
    id: generateRandomId(),
    name: "Sand",
    color: "#f046c2",
    cost: "25.5",
    volume: "5000",
    delivery_date: "2021-03-07",
  },
  {
    id: generateRandomId(),
    name: "Gravel",
    color: "#6bffce",
    cost: "10.5",
    volume: "1000",
    delivery_date: "2021-05-08",
  },
  {
    id: generateRandomId(),
    name: "Cement",
    color: "#fb6735",
    cost: "9.99",
    volume: "5000",
    delivery_date: "2021-07-09",
  },
];
