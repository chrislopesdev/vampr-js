class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods * */

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
    let numberOfVamps = 0;
    let currentVamp = this;

    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numberOfVamps += 1;
    }
    return numberOfVamps;
  }

  // Returns true if this vampire is more senior than the other vampire.
  // (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch * */

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if (this.creator === null || vampire.creator === null) {
      if (this.creator === null) {
        return this;
      }
      return vampire;
    }
    if (this === vampire) {
      return this;
    }

    // determine who is senior
    let junior;
    let senior;
    if (this.isMoreSeniorThan(vampire)) {
      senior = this;
      junior = vampire;
    } else {
      senior = vampire;
      junior = this;
    }

    // Return to this when you have time.
    // compare number of vamps to origin
  }
}

module.exports = Vampire;
