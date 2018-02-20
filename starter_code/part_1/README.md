# Objects & arrays practice!!

You'll work on all of this in your `movies-and-jurassic-park.js` file! To test things, open up `index.html` in the browser and open the console using <key>Cmd</key> + <key>Alt</key> + <key>J</key>

## Movie Database

Create your own JavaScript object representing your favorite movie.

  > Example:

  > ```javascript
  > var blade = {
  >   title: 'Blade',
  >   director: 'Stephen Norrington',
  >   actors: ['Wesley Snipes', 'Stephen Dorff', 'Kris Kristofferson'],
  >   releaseYear: 1998,
  >   duration: 120
  > }
  > ```

  1. After you have created your movie object, print the title of your movie using `dot notation`
  2. Print the director's name
  3. Print the release year
  4. Maybe your favorite movie came with an extended director's cut - write a statement that increases your movie object's duration by 25 minutes

## Hammonds Mines

Today we visit Jurassic Park :dragon: to explore the wild world of objects! You have been brought on to manage the dig sites for Dr. John Hammond. No expense has been spared, so let's get to work!

### Part 1
```javascript
var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
}
```
  1. Create a variable called `guestOfHonor` and assign its value to the name of the paleontologist at Snakewater, Montana.

  2. Access the value of the specimen found in Snakewater, Montana, and store it in a variable called `cleverGirl`.

### Part 2
```javascript

var nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ]
}

```
  1. Store the array of specimens of this site into a variable called `nicaraguanSpecimens`.

  2. Make a variable called `favoriteSpecimen` and assign its value to your favorite dinosaur within `nicaraguanSpecimens` ( can you do this by referencing the `nicaragua` object itself? )

  3. Add 250000 to the annual budget of this site.

### Part 3
```javascript
var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ]
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ]
  }
}
```

1. Access the depth of John Hammond's mine in Mexico, store the depth of the Mexican mine into an appropriately named variable.

2. Access and log the annual budget for Hammond's mine in Buenos Airies, store the annual budget for Hammond's mine in Buenos Aires.

3. Access and console the dinosaur DNA specimens found in Buenos Aires.

4. Insert Nicaragua into `hammondsMines`.

5. Create three variables to store the annual budgets for each mine into them.

6. Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.

7. Access and console log the "Parasaurolophus" specimen.
