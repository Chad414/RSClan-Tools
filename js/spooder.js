export function spooder() {
  let firstRotationDate = new Date('June 11, 2021 00:00:00 GMT+0:00');

  //let currentDate = new Date('July 13, 2021 00:00:00 GMT+0:00');
  let currentDate = new Date();

  let timeDifference = currentDate.getTime() - firstRotationDate.getTime();
  let daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  let numberOfRotations = Math.floor(daysDifference / 4);

  let closedPath = numberOfRotations % 3;

  let daysUntilRotation = 4 - (daysDifference % 4);

  console.log(`Number of days since first rotation: ${daysDifference}`);
  console.log(`Number of rotations since first rotation: ${numberOfRotations}`)
  console.log(`Closed Path: ${closedPath}`)
  console.log(`Days until next Rotation: ${daysUntilRotation}`)
}