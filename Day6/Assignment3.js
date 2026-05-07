const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500"
];

function processMovies(movies) {

  const formattedMovies = movies.map(movie => {

    const [name, genre, rawViews] = movie.split("|");

    let views = Number(rawViews);

    // Validation
    if (isNaN(views)) {
      views = 0;
    }

    return {
      name: name?.trim() || "Unknown",
      genre: genre?.trim() || "Unknown",
      views: views
    };
  });

  // Filter Action or Sci-Fi with views > 5000
  const filteredMovies = formattedMovies.filter(movie =>
    (movie.genre === "Action" || movie.genre === "Sci-Fi") &&
    movie.views > 5000
  );

  // Sort descending
  filteredMovies.sort((a, b) => b.views - a.views);

  // Return JSON string
  return JSON.stringify(filteredMovies, null, 2);
}

console.log(processMovies(rawMovies));