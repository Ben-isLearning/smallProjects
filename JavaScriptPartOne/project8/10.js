function numImaginaryFriends(friends) {
  let iFriends = Math.ceil(friends / 4);
  return iFriends;
}

console.log(numImaginaryFriends(4));
console.log(numImaginaryFriends(8));
