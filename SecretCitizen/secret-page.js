const songList = document.getElementById("secret-songs");

const songArray = [
    "../MusicFiles/Sec/All_Mine.m4a",
    "../MusicFiles/Zoid/Hell_Bound.m4a",
    "../MusicFiles/Zoid/Hypervigilant.m4a",
    "../MusicFiles/Zoid/Ill_Will.m4a",
    "../MusicFiles/Zoid/Locomotor_System.m4a",
    "../MusicFiles/Zoid/Mahershalas_Law.m4a",
    "../MusicFiles/Zoid/Me_and_You.m4a",
    "../MusicFiles/Zoid/On_The_Scene.m4a",
    "../MusicFiles/Zoid/Time_Off.m4a",
    "../MusicFiles/Zoid/To_Die_For.m4a"
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