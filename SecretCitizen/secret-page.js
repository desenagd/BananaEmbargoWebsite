const songList = document.getElementById("secret-songs");

const songArray = [
    "../MusicFiles/Sec/Lost_An_Hour.m4a",
    "../MusicFiles/Sec/Dedwave.m4a",
    "../MusicFiles/Sec/Drive_You_Up_A_Wall.m4a",
    "../MusicFiles/Sec/Real_Estate.m4a",
    "../MusicFiles/Sec/Ruin_My_Life.m4a",
    "../MusicFiles/Sec/Whats_The_Answer.m4a",
    "../MusicFiles/Sec/While_Im_Still_Awake.m4a",
    "../MusicFiles/Sec/Heavy_Head.m4a",
    "../MusicFiles/Sec/I_Want_More.m4a" 
]
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