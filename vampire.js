class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let vampire1 = this.numberOfVampiresFromOriginal
    let vampire2 = vampire.numberOfVampiresFromOriginal

    if (vampire1 > vampire2) {
      return false;
    }
    return true;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  //this doesn't work but I tried!
  closestCommonAncestor(vampire) {
      let anscestors1 = [];
      let currentVampire = this;

      while (currentVampire.creator) {
        currentVampire = currentVampire.creator;
        anscestors1.push(currentVampire.creator)
      }

      let anscestors2 = [];
      let currentVampire2 = vampire;

      while (currentVampire2.creator) {
        currentVampire2 = currentVampire2.creator;
        anscestors2.push(currentVampire2.creator)
      }

      for (let i of anscestors1) {
        for (let j of anscestors2) {
          if (i === j) {
            return i;
          }
        }
      }
    }

  }

module.exports = Vampire;

