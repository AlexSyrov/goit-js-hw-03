const formatString = function (string, maxLength = 40) {
  let strings = string.split('');

  if (strings.length > maxLength) {
    strings.length = maxLength;
    return strings.join('') + '...';
  } else if ((strings.length = maxLength || strings.length < maxLength)) {
    return strings.join('');
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
