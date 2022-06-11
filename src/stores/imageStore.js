import { writable } from "svelte/store";
export const imageStore = writable([
  {
    id: 1,
    src: "./assets/InstaImg1.jpeg",
    alt: "Chicken Steak Burger",
  },
  {
    id: 2,
    src: "./assets/InstaImg2.jpeg",
    alt: "Burmese khow suey",
  },
  {
    id: 3,
    src: "./assets/InstaImg3.jpeg",
    alt: "Gluten free chocolate cookies",
  },
  {
    id: 4,
    src: "./assets/InstaImg4.jpeg",
    alt: "Grilled Pesto Chicken with wilted herbed spinach and mushroom",
  },
  {
    id: 5,
    src: "./assets/InstaImg5.jpeg",
    alt: "Mexican mango salsa",
  },
  {
    id: 6,
    src: "./assets/InstaImg6.jpeg",
    alt: "Vanilla gluten free pancakes topped with poached berries",
  },
  {
    id: 7,
    src: "./assets/InstaImg7.jpeg",
    alt: "Vegan soba noodles bowl",
  },
  {
    id: 8,
    src: "./assets/InstaImg8.jpeg",
    alt: "Gluten free paleo pancakes",
  },
  {
    id: 9,
    src: "./assets/InstaImg9.jpeg",
    alt: "Teriyaki bowl",
  },
  {
    id: 10,
    src: "./assets/InstaImg10.jpeg",
    alt: "Farm house salad",
  },
]);
