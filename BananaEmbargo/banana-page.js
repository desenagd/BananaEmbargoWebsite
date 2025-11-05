const songList = document.getElementById("banana-songs");

const songArray = [
    "../MusicFiles/Ban/After_Laughter.m4a",
    "../MusicFiles/Ban/All_Eyes.m4a",
    "../MusicFiles/Ban/Cant_Tell_Me_That_Much_For_Free.m4a",
    "../MusicFiles/Ban/Child_Adrift.m4a",
    "../MusicFiles/Ban/Dont_Come_Home_Again.m4a",
    "../MusicFiles/Ban/Dont_You_See.m4a",
    "../MusicFiles/Ban/Easy_Decisions_Make_For_Difficult_Conclusions.m4a",
    "../MusicFiles/Ban/Ethos_Logos_Pathos.m4a",
    "../MusicFiles/Ban/Eyes_Bigger_Than_Hands.m4a",
    "../MusicFiles/Ban/Failure_To_Thrive.m4a",
    "../MusicFiles/Ban/Fool_No_More.m4a",
    "../MusicFiles/Ban/How_Did_I_Get_Here.m4a",
    "../MusicFiles/Ban/Just_Like_You_Want_It.m4a",
    "../MusicFiles/Ban/Nice_To_Meet_You.m4a",
    "../MusicFiles/Ban/No_Sudden_Moves.m4a",
    "../MusicFiles/Ban/Ogres_Tears.m4a",
    "../MusicFiles/Ban/Oh_My_World.m4a",
    "../MusicFiles/Ban/Outta_My_Mind.m4a",
    "../MusicFiles/Ban/Search_Beyond.m4a",
    "../MusicFiles/Ban/Space_Trip.m4a",
    "../MusicFiles/Ban/Stealing_From_the_Youth.m4a",
    "../MusicFiles/Ban/The_Day_Before_Halloween.m4a",
    "../MusicFiles/Ban/The_Halting_Problem.m4a",
    "../MusicFiles/Ban/We_Just_Dont_Know_Yet.m4a"
];

songArray.forEach(songPath => {
    const li = document.createElement("li");

    li.innerHTML = `
    <p>${songPath.split("/").pop().replace(/_/g, " ").replace(".m4a", " ")}</p>
    <audio controls>
        <source src="${songPath}" type="audio/mp4">
        Your browser does not support this audio element.
    </audio>
    `;

    songList.appendChild(li);
})
