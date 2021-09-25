// declaring an empty array
let topTracksArray = [];

const songsList = document.getElementById("song-list");
const searchBar = document.getElementById("searchBar");

// named function, async keyword
const getArtists = async () => {
  // try and catch

  // fetch call
  try {
    // await keyword
    const res = await fetch(
      "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=beyonce&api_key=51c2dfeeb99219eb742e9be5bd42a21a&format=json"
    );

    // sending json response with res.json()
    const response = await res.json();
    console.log(response);

    // using dot notation to access object multiple layers deep
    topTracksArray = response.toptracks.track;

    // function call with passed parameter
    displayTracks(topTracksArray);
  } catch (err) {
    console.log(err);
  }
};
//search function

// addEventListener with keyup, and callback with event as parameter
searchBar.addEventListener("keyup", (e) => {
  // using e.target.value and .lowerCase()
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);
  //filter through array

  // filtering through array and using .toLowerCase and .includes to return arrays and storing them in a variable
  const filteredTracks = topTracksArray.filter((track) =>
    track.name.toLowerCase().includes(searchString)
  );
  displayTracks(filteredTracks);
});

// function declaration
function displayTracks(tracks) {
  // mapping through an array and printing a card using dot notation to access properties in arrays returned from .map
  // storing those new arrays in a variable

  const htmlString = tracks
    .map((track) => {
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title"> ${track.name} </h5>
      <p class="card-text">Play Count: ${track.playcount}  </p>
      <p class="card-text">Listeners: ${track.listeners} </p>
  </div>
</div>
    `;
    })
    .join("");

  songsList.innerHTML = htmlString;
}

// using window.onload to call function on page render
window.onload = getArtists();
