import prompt from 'prompt';
import { spooder } from "./js/spooder.js";
import { vorago } from "./js/vorago.js";
import { raven } from "./js/raven.js";
import { rots } from "./js/rots.js";
import { getAllItems } from "./js/grandexchange.js"

console.log("Welcome to RSClan-Tools! Please select an option");
console.log("1. Get Spooder Rotation\n2. Get Vorago Rotation\n3. Get Raven Rotation\n4. Get Rots Rotation\n5. Get Grand Exchange Items")

prompt.start();

prompt.get(['option'], function (err, result) {
  switch (result.option) {
    case "1":
      spooder();
      break;
    case "2":
      vorago();
      break;
    case "3":
      raven();
      break;
    case "4":
      rots();
      break;
    case "5":
      getAllItems();
      break;
    default:
      console.log("Invalid Option");
  }
});