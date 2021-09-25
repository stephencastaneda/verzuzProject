const songs = [
  // creating an array of objects
  // key value pairs (strings, numbers)
  {
    songName: "Halo",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 8607832,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=bnVUHWCynig",
    img:
      "https://img.discogs.com/b4CLw79NyCeZfx1S0CiTJJuMSmc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1879702-1570016363-8165.jpeg.jpg"
  },
  {
    songName: "Irreplaceable",
    albumTitle: "B'Day",
    playCount: 4914414,
    releaseYear: 2006,
    youTubeLink: "https://www.youtube.com/watch?v=2EwViQxSJJQ",
    img: "https://i1.sndcdn.com/artworks-X3Hya1ooY2rlXBuD-jx5eeg-t500x500.jpg"
  },
  {
    songName: "Single Ladies (Put a Ring on It)",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 5203841,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=4m1EFMoRFvY",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVI2bx8vJSqZcm7ph7o_V1wyoavZzob_XSwQ&usqp=CAU"
  },
  {
    songName: "Crazy In Love",
    albumTitle: "Dangerously In Love",
    playCount: 3752084,
    releaseYear: 2003,
    youTubeLink: "https://www.youtube.com/watch?v=ViwtNLUqkMY",
    img:
      "https://static.billboard.com/files/media/beyonce-dangerously-in-love-650-430-compressed.jpg"
  },
  {
    songName: "If I Were A Boy",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 4562013,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=AWpsOqh8q0M",
    img:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Beyonce_-_If_I_Were_a_Boy_%28single%29.png"
  },
  {
    songName: "Sweet Dreams",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 4940104,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=JlxByc0-V40",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5025e273-db4e-4a37-b64c-fc94355f542c/d5iv9d2-8002f811-3cd7-4a31-8f30-17dd652a6186.jpg/v1/fill/w_894,h_894,q_70,strp/beyonce_i_am____sasha_fierce_by_lakee05_d5iv9d2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNTAyNWUyNzMtZGI0ZS00YTM3LWI2NGMtZmM5NDM1NWY1NDJjXC9kNWl2OWQyLTgwMDJmODExLTNjZDctNGEzMS04ZjMwLTE3ZGQ2NTJhNjE4Ni5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.dhatISKqScgFWa46n79Tqr_IknAPp4-2vyMiSF6Sk9g"
  }
];

// getElementById document method, variables, let global variables, read-only variables with const
const mainDiv = document.querySelector(".row");
const songNameInput = document.getElementById("songNameInput");
const albumTitleInput = document.getElementById("albumTitleInput");
const releaseYearInput = document.getElementById("releaseYearInput");
const youTubeLinkInput = document.getElementById("youTubeLinkInput");
const playCountInput = document.getElementById("playCountInput");
const imgInput = document.getElementById("imgInput");
const createButton = document.getElementById("addSong");
const updateButton = document.getElementById("updateSong");
let updateSongIndexArray;

// function declaration
function renderData() {
  // innerHTML DOM manipulation
  mainDiv.innerHTML = "";
  // for loops
  for (let songIndex = 0; songIndex < songs.length; songIndex++) {
    // createElement DOM manipulation
    const songListItem = document.createElement("div");
    // classname property of an element
    songListItem.className = "col-sm-4 d-flex";
    songListItem.innerHTML =
      // String interpolation
      // Accessing objects values w/ dot notation

      `
      <div class="card flex-fill mb-3">
      <img class="card-img-top" src="${songs[songIndex].img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${songs[songIndex].songName}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Album Title: ${songs[songIndex].albumTitle}</li>
        <li class="list-group-item">Release Year: ${songs[songIndex].releaseYear}</li>
        <li class="list-group-item">Play Count: ${songs[songIndex].playCount}</li>
        <li class="list-group-item"><a href="${songs[songIndex].youTubeLink}" target="_blank">YouTube Video</a></li>
      </ul>
      <div class="card-body text-center">
        <button type="button" class="btn btn-danger deleteButton--${songIndex}">Delete</button>
        <button type="button" class="btn btn-secondary updateButton--${songIndex}">Update</button>
</div>
     `;
    // Append dom manipulation
    mainDiv.append(songListItem);
  }
  //delete logic
  // query selector all using wildcard selector
  const deleteButtons = document.querySelectorAll(
    '[class^="btn btn-danger deleteButton--"]'
  );
  //console.log(deleteButtons);

  // for loops
  for (let btn of deleteButtons) {
    // Event listener
    btn.addEventListener("click", function () {
      // className.split
      var buttonIndexArray = btn.className.split(
        "btn btn-danger deleteButton--"
      );
      console.log(buttonIndexArray);
      // splice method
      songs.splice(buttonIndexArray[1], 1);
      renderData();
    });
  }
  //create logic
  function createData() {
    // using .value method and storing it in a variable
    const songName = songNameInput.value;
    console.log("songName", songName);
    const albumTitle = albumTitleInput.value;
    console.log("albumTitle", albumTitle);
    const releaseYear = releaseYearInput.value;
    console.log("releaseYear", releaseYear);
    const youTubeLink = youTubeLinkInput.value;
    console.log("youTubeLink: ", youTubeLink);
    const playCount = playCountInput.value;
    console.log("playCount", playCount);
    const img = imgInput.value;
    console.log("img address", img);

    // creating a new object, values of new objects match keys of others
    const newSong = {
      songName,
      albumTitle,
      releaseYear,
      youTubeLink,
      playCount,
      img
    };
    console.log("new song", newSong);

    // pushing a new object into an array
    songs.push(newSong);
    songNameInput.value = "";
    albumTitleInput.value = "";
    releaseYearInput.value = "";
    youTubeLinkInput.value = "";
    playCountInput.value = "";
    imgInput.value = "";

    renderData();

    // removing an event listener
    createButton.removeEventListener("click", createData);
  }
  createButton.addEventListener("click", createData);
}
renderData();
//Update Part A
const updateButtons = document.querySelectorAll(
  '[class^="btn btn-secondary updateButton--"]'
);

// for loop
for (let btn of updateButtons) {
  // adding an event listener that calls an anonymous function when clicked
  btn.addEventListener("click", () => {
    //get the index number from the class
    updateSongIndexArray = btn.className.split(
      "btn btn-secondary updateButton--"
    );
    console.log(updateSongIndexArray);
    //get the song item from the array and set it to a variable

    // accessing an object in an array via index
    var updateSongInfo = songs[updateSongIndexArray[1]];
    console.log(updateSongInfo);
    //setting the value property of the input to the object key
    songNameInput.value = updateSongInfo.songName;
    albumTitleInput.value = updateSongInfo.albumTitle;
    releaseYearInput.value = updateSongInfo.releaseYear;
    youTubeLinkInput.value = updateSongInfo.youTubeLink;
    playCountInput.value = updateSongInfo.playCount;
    imgInput.value = updateSongInfo.img;
    //hide submit button and show Update Submit button
    createButton.classList.add("hidden");
    updateButton.classList.remove("hidden");
  });
}

//create function for updating the song array
function updateSong() {
  var updatedSong = {
    songName: songNameInput.value,
    albumTitle: albumTitleInput.value,
    releaseYear: releaseYearInput.value,
    youTubeLink: youTubeLinkInput.value,
    playCount: playCountInput.value,
    img: imgInput.value
  };
  //remove element and insert new updatedSong into songs array
  songs.splice(updateSongIndexArray[1], 1, updatedSong);
  //switch buttons back
  updateButton.classList.add("hidden");
  createButton.classList.remove("hidden");
  //clear out the input forms

  // setting the value of an input to an empty string to empty the input fields
  songNameInput.value = "";
  albumTitleInput.value = "";
  releaseYearInput.value = "";
  youTubeLinkInput.value = "";
  playCountInput.value = "";
  imgInput.value = "";
  //re-render the updataed data
  renderData();
}
updateButton.addEventListener("click", updateSong);
