// Tamil Movies Data
const movies = [
  { title: "Devara", releaseDate: "Upcoming 2025", songs: 6, trailer: "https://www.youtube.com/watch?v=xxxxxxxx", poster: "deva.jfif" },
  { title: "Leo", releaseDate: "19 October 2023", songs: 6, trailer: "https://www.youtube.com/watch?v=Po3jStA673E", poster: "lo.jfif" },
  { title: "Ponniyin Selvan: I", releaseDate: "30 September 2022", songs: 9, trailer: "https://www.youtube.com/watch?v=K7Q8Q8Rwuk8", poster: "ps1.jfif" },
  { title: "Jailer", releaseDate: "10 August 2023", songs: 5, trailer: "https://www.youtube.com/watch?v=xenOE1Tma0A", poster: "jai.jfif" },
  { title: "Enthiran", releaseDate: "1 October 2010", songs: 7, trailer: "https://www.youtube.com/watch?v=5sU9MT8829k", poster: "enthiran.jfif" },
  { title: "Sivaji", releaseDate: "15 June 2007", songs: 6, trailer: "https://www.youtube.com/watch?v=O6nUEoNx2MA", poster: "sivaji.jfif" },
  { title: "Bigil", releaseDate: "25 October 2019", songs: 5, trailer: "https://www.youtube.com/watch?v=GR-Ui8-V2M0", poster: "bigil.jfif" },
  { title: "2.0", releaseDate: "29 November 2018", songs: 5, trailer: "https://www.youtube.com/watch?v=DxXIwfsF2gA", poster: "2.0.jfif" },
  { title: "Nayakan", releaseDate: "21 October 1987", songs: 5, trailer: "https://www.youtube.com/watch?v=ZZfnmWlhfok", poster: "nayakan.jfif" },
  { title: "Anbe Sivam", releaseDate: "15 January 2003", songs: 6, trailer: "https://www.youtube.com/watch?v=nKfJ6tP2I7I", poster: "anbe sivam.jfif" },
  { title: "Jai Bhim", releaseDate: "2 November 2021", songs: 3, trailer: "https://www.youtube.com/watch?v=nnXpbTFrqXA", poster: "jaibhim.jfif" },
  { title: "Thalapathi", releaseDate: "5 November 1991", songs: 6, trailer: "https://www.youtube.com/watch?v=y6eqsN0nG5M", poster: "thalapathy.jfif" },
  { title: "Pudhu Pettai", releaseDate: "26 May 2006", songs: 7, trailer: "https://www.youtube.com/watch?v=3uVJv5T2uL4", poster: "puthupettai.jfif" },
  { title: "Mouna Ragam", releaseDate: "15 August 1986", songs: 6, trailer: "https://www.youtube.com/watch?v=QGmP9TzSBoA", poster: "mounaragam.jfif" },
  { title: "Vikram Vedha", releaseDate: "21 July 2017", songs: 4, trailer: "https://www.youtube.com/watch?v=1sVr-uWZPjE", poster: "vikram vedha.jfif" },
  { title: "Pariyerum Perumal", releaseDate: "28 September 2018", songs: 5, trailer: "https://www.youtube.com/watch?v=1ZdOuyEBRrI", poster: "pari perumal.jfif" },
  { title: "Soorarai Pottru", releaseDate: "12 November 2020", songs: 6, trailer: "https://www.youtube.com/watch?v=fa_DIwRsa9o", poster: "soorarai potru.jfif" },
  { title: "Thevar Magan", releaseDate: "25 October 1992", songs: 5, trailer: "https://www.youtube.com/watch?v=dFxF2lM6Fqs", poster: "dhevarmagan.jfif" },
  { title: "Jigarthanda", releaseDate: "1 August 2014", songs: 5, trailer: "https://www.youtube.com/watch?v=aRXRQ6WlIlE", poster: "jider.jfif" },
  { title: "Asuran", releaseDate: "4 October 2019", songs: 7, trailer: "https://www.youtube.com/watch?v=vOCM9wztBYQ", poster: "asuran.jfif" },
  { title: "Kaithi", releaseDate: "25 October 2019", songs: 0, trailer: "https://www.youtube.com/watch?v=g79CvhHaj5I", poster: "kaithi.jfif" }
];

// Load movies into HTML
const movieList = document.getElementById("movie-list");

movies.forEach(movie => {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  movieCard.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p><b>Release Date:</b> ${movie.releaseDate}</p>
    <p><b>Songs:</b> ${movie.songs}</p>
    <a href="${movie.trailer}" target="_blank">▶ Watch Trailer</a>
  `;

  movieList.appendChild(movieCard);
});


