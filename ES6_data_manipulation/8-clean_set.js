export default function cleanSet(set, startString) {
  if (startString === '') return '';

  const restOfTheStrings = [];

  for (const val of set) {
    if (val.startsWith(startString)) restOfTheStrings.push(val.slice(startString.length));
  }

  return restOfTheStrings.join('-');
}
