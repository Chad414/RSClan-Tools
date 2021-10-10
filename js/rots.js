export function rots() {

  const rotations = [
    [['Dharok', 'Torag', 'Verac'], ['Karil', 'Ahrim', 'Guthan']],
    [['Karil', 'Torag', 'Guthan'], ['Ahrim', 'Dharok', 'Verac']],
    [['Karil', 'Guthan', 'Verac'], ['Ahrim', 'Torag', 'Dharok']],
    [['Guthan', 'Torag', 'Verac'], ['Karil', 'Ahrim', 'Dharok']],
    [['Karil', 'Torag', 'Verac'], ['Ahrim', 'Guthan', 'Dharok']],
    [['Ahrim', 'Guthan', 'Dharok'], ['Karil', 'Torag', 'Verac']],
    [['Karil', 'Ahrim', 'Dharok'], ['Guthan', 'Torag', 'Verac']],
    [['Ahrim', 'Torag', 'Dharok'], ['Karil', 'Guthan', 'Verac']],
    [['Ahrim', 'Dharok', 'Verac'], ['Karil', 'Torag', 'Guthan']],
    [['Karil', 'Ahrim', 'Guthan'], ['Torag', 'Dharok', 'Verac']],
    [['Ahrim', 'Torag', 'Guthan'], ['Karil', 'Dharok', 'Verac']],
    [['Ahrim', 'Guthan', 'Verac'], ['Karil', 'Torag', 'Dharok']],
    [['Karil', 'Ahrim', 'Torag'], ['Guthan', 'Dharok', 'Verac']],
    [['Karil', 'Ahrim', 'Verac'], ['Dharok', 'Torag', 'Guthan']],
    [['Ahrim', 'Torag', 'Verac'], ['Karil', 'Dharok', 'Guthan']],
    [['Karil', 'Dharok', 'Guthan'], ['Ahrim', 'Torag', 'Verac']],
    [['Dharok', 'Torag', 'Guthan'], ['Karil', 'Ahrim', 'Verac']],
    [['Guthan', 'Dharok', 'Verac'], ['Karil', 'Ahrim', 'Torag']],
    [['Karil', 'Torag', 'Dharok'], ['Ahrim', 'Guthan', 'Verac']],
    [['Karil', 'Dharok', 'Verac'], ['Ahrim', 'Torag', 'Guthan']]
  ];

  let firstRotationDate = new Date('October 1, 2021 00:00:00 GMT+0:00');

  // let currentDate = new Date('July 21, 2021 00:00:00 GMT+0:00');
  // let currentDate = new Date('October 20, 2021 19:00:00 GMT-4:00');
  let currentDate = new Date();

  let timeDifference = currentDate.getTime() - firstRotationDate.getTime();
  let daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  let index = daysDifference % 20;

  let rotation = rotations[index]
  let t_rotation = rotations[(index + 1) % 20]

  console.log(`Current West Rotation: ${rotation[0]}`);
  console.log(`Current East Rotation: ${rotation[1]}`);
  console.log(`Tomorrow West Rotation: ${t_rotation[0]}`);
  console.log(`Tomorrow East Rotation: ${t_rotation[1]}`);
}