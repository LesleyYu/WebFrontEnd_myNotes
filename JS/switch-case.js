// function doAction(action) {
//   switch (action) {
//     case 'hack':
//       return 'hack';
//     case 'slash':
//       return 'slash';
//     case 'run':
//       return 'run';
//     default:
//       throw new Error('Invalid action.');
//   }
// }


function doAction(action) {
  var actions = {
    'hack': function () {
      return 'hack';
    },
    'slash': function () {
      return 'slash';
    },
    'run': function () {
      return 'run';
    }
  };

  if (typeof actions[action] !== 'function') {
    throw new Error('Invalid action.');
  }

  return actions[action]();
}

