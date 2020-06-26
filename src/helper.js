export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

export function getValueBrand(brand) {
  let increased;
  switch (brand) {
    case 'european':
      increased = 1.3;
      break;
    case 'american':
      increased = 1.15;
      break;
    case 'asian':
      increased = 1.05;
      break;
    default:
      break;
  }
  return increased;
}

export function getType(type) {
  return type === 'basic' ? 1.2 : 1.5;
}

export function upperCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
