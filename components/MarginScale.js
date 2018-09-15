const margin = (factor, unit = "vh") => `${4 * factor}${unit}`
const scales = [1, 2, 3, 4];

export const VERTICAL_SCALE = scales.reduce((accumulator, value) => {
  accumulator[value] = margin(value);
  return accumulator
},{})

export const HORIZONTAL_SCALE = scales.reduce((accumulator, value) => {
  accumulator[String(value)] = margin(value, 'vw');
  return accumulator
},{})