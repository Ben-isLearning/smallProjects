// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return {
    dna: dna,
    specimenNum: specimenNum,
    mutate: function (dna) {
      console.log(dna);
      let indexToMutate = Math.floor(Math.random() * 15);
      for (let i = 0; i < dna.length; i++) {
        //console.log(dna[i]);
      }
      //console.log(indexToMutate);
      //console.log(dna[indexToMutate]);
      let dnaBasesToOperate = ["A", "T", "C", "G"];
      let dnaBasesAvaliable = dnaBasesToOperate.filter(function (element) {
        return element != dna[indexToMutate];
      });
      //console.log(dnaBasesAvaliable);

      // Next step - select from array

      let mutationIndex = Math.floor(Math.random() * 3);
      let mutatedItem = dnaBasesAvaliable[mutationIndex];
      //console.log(mutatedItem);

      dna[indexToMutate] = mutatedItem;

      return dna;
      //console.log(dna[indexToMutate]);
    },
    compareDna: function (guestDNA) {
      let matchCount = 0;
      this.dna.forEach((dna1, index) => {
        const dna2 = guestDNA[index];
        //console.log(dna1, dna2);
        if (dna1 === dna2) {
          matchCount += 1;
        }
        //console.log(matchCount);
      });
      let percentage = (matchCount / this.dna.length) * 100;
      let shortPercentage = percentage.toFixed(2);

      return `The two samples share ${shortPercentage}% of their DNA.`;
      //console.log(hostDNA.length);
    },
    willLikelySurvive: function () {
      let survivalChance = 0;
      dna.forEach((dna) => {
        if (dna === "G" || dna === "C") {
          survivalChance += 1;
        }
      });
      // console.log(survivalChance);
      if (survivalChance >= 9) {
        return true;
      } else return false;
    },
  };
}

function generateManyPAequor(input) {
  let specimenList = [];
  for (let i = 0; i < input; i++) {
    specimenList.push(pAequorFactory(i + 1, mockUpStrand()));
  }
  return specimenList;
}

let specimenArray = generateManyPAequor(2);

console.log(specimenArray);

let subjectOne = pAequorFactory(01, mockUpStrand());

let subjectTwo = pAequorFactory(02, mockUpStrand());

console.log(subjectOne.dna);
console.log(subjectOne.compareDna(subjectTwo.dna));

console.log(subjectOne.willLikelySurvive());
console.log(subjectTwo.willLikelySurvive());
