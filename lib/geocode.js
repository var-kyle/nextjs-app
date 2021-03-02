export async function getGeocodedResults(search) {
  let response;
  const req = encodeURI(
    `${process.env.MAPQUEST_FORWARD_GEOCODING_URL}?key=${process.env.MAPQUEST_API}&location=${search}`
  );

  response = await fetch(req);

  let jsonData;

  if (response.ok) {
    const jsonResult = await response.json();

    if (jsonResult.results && jsonResult.results.length > 0) {
      jsonData = {
        locationName: jsonResult.results[0].providedLocation.location,
        bestMatch: jsonResult.results[0].locations[0],
        allMatches: jsonResult.results[0].locations,
      };
    }
  }

  return jsonData;
}
