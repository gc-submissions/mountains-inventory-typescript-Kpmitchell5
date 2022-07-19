import Mountain from "../models/mountains-interface";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (array: Mountain): string => {
  for (let i = 0; i < mountains.length, i++; ) {
    console.log(mountains[i]);
  }
};
