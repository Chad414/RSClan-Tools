export function raven() {
  let firstRotationDate = new Date('June 13, 2021 00:00:00 GMT+0:00');

  //let currentDate = new Date('July 21, 2021 00:00:00 GMT+0:00');
  let currentDate = new Date('August 26, 2021 20:52:00 GMT-4:00');
  //let currentDate = new Date();

  let timeDifference = currentDate.getTime() - firstRotationDate.getTime();
  let daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  let isSpawned = (daysDifference % 13 === 0);

  let daysUntilRotation = 13 - (daysDifference % 13);

  let nextSpawnDate = new Date(currentDate);
  nextSpawnDate.setDate(nextSpawnDate.getDate() + daysUntilRotation);

  console.log(`Number of days since first rotation: ${daysDifference}`);
  console.log(`Raven Spawned: ${isSpawned}`);
  console.log(`Days until next Rotation: ${daysUntilRotation}`);
  console.log(`Next Spawn Date: ${nextSpawnDate.getUTCMonth() + 1}-${nextSpawnDate.getUTCDate()}`);
  // console.log(`Next Spawn Date: ${nextSpawnDate}`);
}