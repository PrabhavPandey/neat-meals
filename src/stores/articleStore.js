import { writable } from "svelte/store";
export const articleStore = writable([
  {
    id: 1,
    topic:
      "This is Vicky Kaushal’s real-life diet and tips on catering to a lean body",
    subline:
      "Are you an ectomorph? We bring you some valuable nutritional insights",
    redirect:
      "https://www.gqindia.com/fitness/content/vicky-kaushal-real-life-diet",
  },
  {
    id: 2,
    topic: "This is what exactly Hrithik Roshan eats to stay in shape",
    subline: "Secrete recipe to the actors Greek God bod",
    redirect:
      "https://www.gqindia.com/live-well/content/exclusive-this-is-exactly-what-hrithik-roshan-eats-daily-to-stay-in-top-shape",
  },
  {
    id: 3,
    topic: "This is Arjun Kapoor’s real-life diet, his cheat day meals...",
    subline:
      "The actor’s story will inspire you to develop a healthy relationship with food",
    redirect:
      "https://www.gqindia.com/look-good/content/this-is-arjun-kapoors-real-life-diet-his-cheat-day-meals-and-foods-he-avoids",
  },
  {
    id: 4,
    topic: "Arjun Kapoor Is Quite The Passionate Foodie, And We Have Proof",
    subline:
      "Arjun Kapoor, a die-hard foodie, is back with another food story.",
    redirect:
      "https://food.ndtv.com/news/arjun-kapoor-gobbled-up-greens-for-dinner-2493710",
  },
  {
    id: 5,
    topic: "Vicky Kaushal's High Protein Breakfast Was Made With 10 Eggs",
    subline:
      "Vicky Kaushal's upcoming projects require him to be in his best shape.",
    redirect:
      "https://food.ndtv.com/news/vicky-kaushals-high-protein-breakfast-was-made-with-10-eggs-see-pic-2379802",
  },
  {
    id: 6,
    topic: "Arjun Kapoor’s “Pancake Day” makes it hard to control our cravings",
    subline:
      "The actor a video that sent us all craving for some flat pancakes",
    redirect:
      "https://food.ndtv.com/food-drinks/arjun-kapoor-s-pancake-day-is-making-it-hard-for-us-to-control-our-cravings-2540293",
  },
]);
