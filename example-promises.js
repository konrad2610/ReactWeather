// function getTempCallback (location, callback) {
//   callback(undefined, 87);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//     if (err) {
//       console.log('error', err);
//     } else {
//       console.log('success', temp);
//     }
// });
//
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       reject('City not found');
//       resolve(96);
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

// Challenge
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    var sum;
    if(typeof a === 'number' && typeof b === 'number') {
      sum = a+b;
      resolve(sum);
    } else {
      reject('Argument(s) is not a number');
    }
  });
}

addPromise(1, 2).then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
});

addPromise(1, 'dupa').then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
});
