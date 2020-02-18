
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').del()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {VIN: 123, make: "Dodge", model: "Journey", mileage: 50000},
        {VIN: 124, make: "Ski-doo", model: "Legen 700 se", mileage: 10000},
        {VIN: 125, make: "Kawasaki", model: "JT1200 STX-12F", mileage: 100000},
        {VIN: 126, make: "Polaris", model: "Outlaw 90", mileage: 150000},
        {VIN: 127, make: "BMW", model: "R1200GS", mileage: 0}
      ]);
    });
};
