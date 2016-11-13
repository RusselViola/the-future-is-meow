var Felid = require('./Felid');
// import {Felid} from './Felid.js'
// var HouseCat = function(name, favoriteFood, ownerName) {
//   Felid.call(this, name, favoriteFood);
//   this.ownerName = ownerName;
// };
class HouseCat {
  this.name = name;
  this.favoriteFood = favoriteFood;
  this.ownerName = ownername;
}

// class HouseCat extends Felid {
//   constructor(this)
// }

HouseCat.prototype = Object.create(Felid.prototype);
HouseCat.prototype.onstructor = HouseCat;

HouseCat.prototype.huntForFood = function() {
  // return 'Goes to kitchen, knocks over bowl containing ' + this.favoriteFood + ' and eats it from the floor';
};

HouseCat.prototype.showAffectionToOwner = function() {
  return 'Brings dead mouse to ' + this.ownerName;
};

module.exports = HouseCat;
