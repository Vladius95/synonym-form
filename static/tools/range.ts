export function range(start: number, end: number, step = 1) {
  let array = [];

  for (let i = start; i < end; i += step) {
    array.push(i);
  }

  return array;
}
