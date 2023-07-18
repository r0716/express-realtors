const apartments = [
    {
      img: 'images/pexels-photo-276554.jpeg',
      sqFt: 800,
      price: 1200,
      address: '321 Park Lane',
      isPetFriendly: true,
      waterfrontView: false,
      amenities: ['gym', 'pool'],
      nearbyPlaces: ['park', 'grocery store', 'restaurant']
    },
    {
      img: 'images/pexels-photo-271624.webp',
      sqFt: 1000,
      price: 1500,
      address: '456 Elm Avenue',
      isPetFriendly: true,
      waterfrontView: true,
      amenities: ['gym', 'pool', 'playground'],
      nearbyPlaces: ['beach', 'shopping mall', 'movie theater']
    },
    {
      img: 'images/pexels-photo-6077368.webp',
      sqFt: 1200,
      price: 1800,
      address: '789 Oak Lane',
      isPetFriendly: false,
      waterfrontView: false,
      amenities: ['gym', 'laundry'],
      nearbyPlaces: ['library', 'coffee shop', 'park']
    }
  ];


  const houses = [
    {
      img: 'images/pexels-photo-4450337.jpeg',
      numberOfBedrooms: 3,
      numberOfBathrooms: 2,
      hasPorch: true,
      price: 250000,
      address: '987 Pine Street',
      isPetFriendly: true,
      nearbySchools: ['Elementary School', 'Middle School', 'High School'],
      nearbyAmenities: ['park', 'grocery store', 'restaurant']
    },
    { 
      img: 'images/pexels-photo-2227832.jpeg',
      numberOfBedrooms: 4,
      numberOfBathrooms: 3,
      hasPorch: false,
      price: 380000,
      address: '654 Maple Avenue',
      isPetFriendly: true,
      nearbySchools: ['Elementary School', 'High School'],
      nearbyAmenities: ['shopping mall', 'movie theater']
    },
    {
      img: 'images/pexels-photo-667838.webp',
      numberOfBedrooms: 5,
      numberOfBathrooms: 4,
      hasPorch: true,
      price: 550000,
      address: '321 Oak Lane',
      isPetFriendly: false,
      nearbySchools: ['Middle School', 'High School'],
      nearbyAmenities: ['library', 'coffee shop', 'park']
    }
  ];  

console.log(apartments);  
console.log(houses);

//selectors

const getAllApartmentsBtn = document.querySelector("#getAllApartments");
console.log(getAllApartmentsBtn);
const apartmentsGrid = document.querySelector("#apartmentsGrid");

const getAllHousesBtn = document.querySelector("#getAllHouses");
console.log(getAllHousesBtn);
const housesGrid = document.querySelector("#housesGrid");


//event listeners

getAllApartmentsBtn.addEventListener('click', () => {

const cardsListString = apartments.map( (apartment) =>
    `<div class="card text-center text-bg-dark p-3" style="width: 18rem;">
    <img src="${apartment.img}" class="card-img-top" alt="apartment-img">
    <div class="card-body">
      <h5 class="card-title">${apartment.address} $${apartment.price}</h5>
      <p class="card-text"> Amenities: ${apartment.amenities} <br> Close to: ${apartment.nearbyPlaces} <br> SqFt: ${apartment.sqFt}</p>
    </div>
  </div>`
)
.join('');

console.log(cardsListString);

apartmentsGrid.innerHTML = cardsListString; 

   });

getAllHousesBtn.addEventListener('click', () => {


const cardsListStringHouse = houses.map( (house) =>
    `<div class="card text-center text-bg-dark p-3" style="width: 18rem;">
    <img src="${house.img}" class="card-img-top" alt="apartment-img">
    <div class="card-body">
      <h5 class="card-title">${house.address} $${house.price}</h5>
      <p class="card-text"> Amenities: ${house.nearbyAmenities} <br> Bedrooms: ${house.numberOfBedrooms} <br> Bathrooms: ${house.numberOfBathrooms} <br> Schools Within Zone: ${house.nearbySchools} </p>
    </div>
  </div>`
)
.join('');

console.log(cardsListStringHouse);

housesGrid.innerHTML = cardsListStringHouse; 

   });


   function toggleButtons() {
    const apartmentButton = document.getElementById("getAllApartments");
    const houseButton = document.getElementById("getAllHouses");
    
    apartmentButton.addEventListener("click", function() {
      if (houseButton.classList.contains("btn-dark")) {
        houseButton.classList.remove("btn-dark");
        houseButton.classList.add("btn-light");
      } else {
        houseButton.classList.remove("btn-light");
        houseButton.classList.add("btn-dark");
      }
    });
    
    houseButton.addEventListener("click", function() {
      if (apartmentButton.classList.contains("btn-dark")) {
        apartmentButton.classList.remove("btn-dark");
        apartmentButton.classList.add("btn-light");
      } else {
        apartmentButton.classList.remove("btn-light");
        apartmentButton.classList.add("btn-dark");
      }
    });
  }
  
  // Call the function to toggle the buttons
  toggleButtons();
  