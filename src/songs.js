//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let result = array.map((element) => element.artist);
    console.log(result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    let songs = array.filter((element) => element.artist == artist);
    let result = songs.filter(element => element.title)
    console.log(result);    
    return result
    //Write your code here
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
    let songsTitleAlfabetic = array.map(element => element.title).sort();
    let songsTop10 = songsTitleAlfabetic.filter((element, index) => index < 10);
    return songsTop10;
};

//Exercise 4: Order by year, ascending
function orderByYear(array){
    let songsYear = array.map(element => element).reverse();
    songsYear.sort((a, b) => { return a.year - b.year;});
    return songsYear
};

//Exercise 5: Filter songs by genre
function songsByGenre(array, genre_) {
    let songsGenre = array.filter((element) => (element.genre.indexOf(genre_) != -1 && element));
    return songsGenre;
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
    //Write your code here
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




if(typeof module !== 'undefined') {
    module.exports = {
        getAllArtists,
        getSongsFromArtist,
        orderAlphabetically,
        orderByYear,
        songsByGenre,
        minutsToSeconds,
        getLongestSong
    };
};
