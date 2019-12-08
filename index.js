const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let y = record.find(function(r) {
    return r.result === 'W';
  });
  if (y) {
    return y.year;
  } else {
    return undefined;
  }
}