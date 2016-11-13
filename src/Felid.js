// var Felid = function(name, favoriteFood) {
//   this.name = name;
//   this.favoriteFood = favoriteFood;
// };

class Felid {
  constructor(name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
  }
  // let groom = () => ({ message: 'Licks its coat' });
  // groom().message;
  groom() {
    return 'Licks its coat';
  }
}
//
//
module.exports = Felid;
// export {Felid};
