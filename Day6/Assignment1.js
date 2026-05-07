const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"
];

function cleanFlightData(flights) {

  const formattedFlights = flights.map(flight => {

    const [route, rawPrice] = flight.split(":");
    const [from, to] = route.split("-");

    let price = Number(rawPrice);

    // Validation
    if (isNaN(price)) {
      price = 0;
    }

    return {
      from: from?.trim() || "Unknown",
      to: to?.trim() || "Unknown",
      price: price
    };
  });

  // Filter between 100 and 500
  const filteredFlights = formattedFlights.filter(
    flight => flight.price >= 100 && flight.price <= 500
  );

  // Sort ascending
  filteredFlights.sort((a, b) => a.price - b.price);

  // Return JSON string
  return JSON.stringify(filteredFlights, null, 2);
}

console.log(cleanFlightData(rawFlights));