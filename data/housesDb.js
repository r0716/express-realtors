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

// Define house id
houses.forEach((house, index) => {
  house.id = `house-${index + 1}`;
});
 

  module.exports = {
 // Return a copy of the house array without exposing the IDs
    getAll: function() {
      return houses.map(({ id, ...rest }) => rest);
    },
 // Return the house by the id   
    getHouse: function(id) {
      const house = houses.find(house => house.id === id);

      if (!house) {
        throw new Error('House not found');
      }

      return house;      
    }
  };