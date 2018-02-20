
// Intro

var beforeNightFalls = {
title:  'Before Night Falls',
director: 'Julian Schnabel',
actors: ['Javier Bardem, Johnny Depp, Olatz López Garmendia'],
releaseYear: '2001',
duration: '133'
};

// Append Movie Title Length

function appendDuration(beforeNightFalls) {
  beforeNightFalls.duration = 145;
};

appendDuration(beforeNightFalls);

console.log(beforeNightFalls.title);
console.log(beforeNightFalls.director);
console.log(beforeNightFalls.releaseYear);
console.log(beforeNightFalls.duration);

console.log('movies-and-jurassic-park.js is connected! woohoo!');

// Part 1

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
};




// Do the tasks down here!

var guestOfHonor = 'Dr. Alan Grant';
var cleverGirl = snakewaterMontana.specimen;


console.log(guestOfHonor);
console.log(cleverGirl);

// Part 2

var nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ],
};

// Do the tasks down here!

var nicaraguanSpecimens = nicaragua.specimens;
let favDino = nicaraguanSpecimens[2];

console.log(favDino);

function appendAnnualBudget(nicaragua){
  nicaragua.annual_budget = (1500000 + 30000);
};

console.log(nicaragua.annual_budget);

/*---var favDino = function nameFavDino()
    {
      for (var i = 0; i = nicaraguanSpecimens + 2; i++) 
      {nicaraguanSpecimens[i]}
        return nicaraguanSpecimens;
    };


 console.log(nicaraguanSpecimens);
*/



 /*-------
}

function nameFavDino(){
  var favoriteSpecimen = for (var i = 0; i < nicaraguanSpecimens.length; i = i +3) {
    Things[i]
  }
}
-----*/






// Part 3

var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ],
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ],
  },

  nicaragua: {
    depth: "200 meters",
    annual_budget: 150000,
    specimens: [
    "Tyrannosaurus", 
    "Stegosaurous",
    "Triceratops",
    "Triceratops",
    ],
  }

};



// Do the tasks down here!

let depth_mexicoMine = hammondsMines.mexico.depth;
console.log(depth_mexicoMine);

let buenos_airesBudget = hammondsMines.buenos_aires.annual_budget
console.log(buenos_airesBudget);


console.log(hammondsMines.mexico.specimens);

var budget_buenos_aires = hammondsMines.buenos_aires.annual_budget;
var budget_mexico = hammondsMines.mexico.annual_budget;
var budget_nicaragua = hammondsMines.nicaragua.annual_budget;
console.log(budget_buenos_aires, budget_mexico, budget_nicaragua);

var totalMineBudget = (budget_buenos_aires + budget_mexico + budget_nicaragua);

console.log(totalMineBudget);
console.log(hammondsMines.mexico.specimens[1]);

