// Store our API endpoing as queryURL
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(url).then(function(data){
    createFeatures(data.features);
  });

// Create a function named `createFeatures` that takes `earthquakeData` and `platesData` as an argument.
function createFeatures(earthquakeData, platesData){


