const apartments = [
  {
    sqFt: 800,
    price: 1200,
    address: '123 Main Street',
    isPetFriendly: true,
    waterfrontView: false,
    amenities: ['gym', 'pool'],
    nearbyPlaces: ['park', 'grocery store', 'restaurant']
  },
  {
    sqFt: 1000,
    price: 1500,
    address: '456 Elm Avenue',
    isPetFriendly: true,
    waterfrontView: true,
    amenities: ['gym', 'pool', 'playground'],
    nearbyPlaces: ['beach', 'shopping mall', 'movie theater']
  },
  {
    sqFt: 1200,
    price: 1800,
    address: '789 Oak Lane',
    isPetFriendly: false,
    waterfrontView: false,
    amenities: ['gym', 'laundry'],
    nearbyPlaces: ['library', 'coffee shop', 'park']
  }
];

// Define apartment id
apartments.forEach((apartment, index) => {
  apartment.id = `apt-${index + 1}`;
});


  module.exports = {
 // Return a copy of the apartments array without exposing the IDs
    getAll: function() {
      return apartments.map(({ id, ...rest }) => rest);
    },
 // Return the apartment by the id   
    getApartment: function(id) {
      const apartment = apartments.find(apartment => apartment.id === id);

      if (!apartment) {
        throw new Error('Apartment not found');
      }

      return apartment;      
    }
  };

  