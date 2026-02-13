// input length in meters
export function cubeVolume(meters) {

// processing cubic formula
    let volume = meters ** 3;

// output volume in cubic meters
    return volume;
}

// developer test
if (import.meta.main) {
  console.log(`cubeVolume(2) = ${cubeVolume(2)}`);
}
