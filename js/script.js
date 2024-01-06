// Store the wallpapers in an array
var wallpapers = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1615193107074-9357bce58a68?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

var M_Tags = [
    "SHOES ",
    "GADGETS",
    "DISCOVER",
    "OFFERS",
    "EXPLORE",
    "NEW ARRIVALS"
];

var M_Tags_P = [
    "",
    "",
    "",
    "",
    "",
    ""
];

var banner = document.querySelector(".banner");
const MARK_TAGS = document.getElementById("M-TAGS");
const MARK_TAGS_P = document.getElementById("M-TAGS-P");

var currentWallpaperIndex = 0;
var MARK_TAGSINDEX = 0;
var MARK_TAGSPINDEX = 0;

// Preload the images
var imagePromises = wallpapers.map(function (url) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            resolve();
        };
        img.onerror = function () {
            reject();
        };
        img.src = url;
    });
});

// Wait for all the images to finish loading
Promise.all(imagePromises).then(function () {
    function changeWallpaper() {
        banner.style.backgroundImage = "url('" + wallpapers[currentWallpaperIndex] + "')";
        MARK_TAGS.innerHTML = M_Tags[MARK_TAGSINDEX];
        MARK_TAGS_P.innerHTML = M_Tags_P[MARK_TAGSPINDEX];
        currentWallpaperIndex++;
        MARK_TAGSINDEX++;
        MARK_TAGSPINDEX++;
        if (currentWallpaperIndex >= wallpapers.length) {
            currentWallpaperIndex = 0;
        }
        if (MARK_TAGSINDEX >= M_Tags.length) {
            MARK_TAGSINDEX = 0;
            MARK_TAGSPINDEX = 0;
        }
        if (currentWallpaperIndex === wallpapers.length) {
            clearInterval(changeWallpaper);
        }
    }

    setInterval(changeWallpaper, 3000);
}).catch(function () {
    // Handle errors if any of the images fail to load
    console.log("Failed to load images");
});
