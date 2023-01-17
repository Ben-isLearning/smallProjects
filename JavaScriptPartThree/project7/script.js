class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  movieTime() {
    let dataAllowance = this.users * 5;
    if (this.data - dataAllowance >= 10) {
      return true;
    }
    return false;
  }
}

let oxlong = new Network(20, 2);

//console.log(oxlong.data);
//console.log(oxlong.users);
console.log(oxlong.movieTime());
