export function vorago() {
  let firstRotationDate = new Date('June 2, 2021 00:00:00 GMT+0:00');

  let currentDate = new Date('July 13, 2021 00:00:00 GMT+0:00');
  //let currentDate = new Date();

  let timeDifference = currentDate.getTime() - firstRotationDate.getTime();
  let daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  let numberOfRotations = Math.floor(daysDifference / 7);

  let currentRotation = numberOfRotations % 6;

  let daysUntilRotation = 7 - (daysDifference % 7);

  console.log(`Number of days since first rotation: ${daysDifference}`);
  console.log(`Number of rotations since first rotation: ${numberOfRotations}`);
  console.log(`Current Rotation: ${currentRotation}`);
  console.log(`Days until next Rotation: ${daysUntilRotation}`);
}