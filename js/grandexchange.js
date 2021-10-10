import fs from "fs";
import axios from "axios";
import cliProgress from "cli-progress";

export async function getAllItems() {

  // Clear existing item data
  fs.writeFile('ge_items.txt', "", err => {
    if (err) {
      console.error(err);
      return;
    }
  })

  let categoryRequestArray = [];
  let categoryData = [];

  const categoryRequestBar = new cliProgress.SingleBar({}, cliProgress.Presets.rect);
  console.log('Fetching Caregory Data');
  categoryRequestBar.start(41, 0);

  // We must await otherwise we get error status 503
  for (let i = 0; i <= 41; i++) {
    categoryRequestBar.update(i);
    categoryRequestArray[i] = await axios.get(`https://services.runescape.com/m=itemdb_rs/api/catalogue/category.json?category=${i}`)
  }
  categoryRequestBar.stop();

  // Using axios.all() results in more code but is faster because we don't have to wait for each response
  await axios.all(categoryRequestArray).then(responseArr => {
    for (let i in responseArr) {
      // console.log(responseArr[i]);
      categoryData[i] = responseArr[i].data.alpha
    }
  });

  // Display item dump progress
  const multibar = new cliProgress.MultiBar({
    clearOnComplete: false,
    hideCursor: true

  }, cliProgress.Presets.rect);
  console.log("Category and Item Letter Progress:")
  const b1 = multibar.create(41, 0);
  const b2 = multibar.create(27, 0);

  // Iterate through each category
  // for (let i in categoryData) { Only do one category for testing
  for (let i = 0; i < 1; i++) {
    b1.increment();

    // Iterate through each letter
    for (let j in categoryData[i]) {
      b2.increment();
      let letter = (categoryData[i][j].letter == '#') ? '%23' : categoryData[i][j].letter;

      // console.log(`Letter: ${categoryData[i][j].letter} with ${categoryData[i][j].items} items.`)
      // console.log(`The ${categoryData[i][j].letter} letter requires ${Math.ceil(categoryData[i][j].items / 12)} requests.`);

      // Get items for each letter
      for (let page = 0; page < (Math.ceil(categoryData[i][j].items / 12)); page++) {
        await axios.get(`https://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=${i}&alpha=${letter}&page=${page}`)
          .then( (response) => {
            let items = response.data.items;
            for (let item in items) {
              // console.log(items[item].name);
              // Write each item to file
              fs.appendFile('ge_items.txt', `${items[item].name},\n`, err => {
                if (err) {
                  console.error(err);
                  return;
                }
              })
            }
          });
      }
    }
  }
  multibar.stop();
}