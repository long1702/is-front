var genre_jo = {
    "28":"Action",
    "12":"Adventure",
    "16":"Animation",
    "35":"Comedy",
    "80":"Crime",
    "99":"Documentary",
    "18":"Drama",
    "10751":"Family",
    "14":"Fantasy",
    "36":"History",
    "27":"Horror",
    "10402":"Music",
    "9648":"Mystery",
    "10749":"Romance",
    "878":"Science Fiction",
    "10770":"TV Movie",
    "53":"Thriller",
    "10752":"War",
    "37":"Western"
}
var language_jo = {
    "alpha2":"English",
"aa":"Afar",
"ab":"Abkhazian",
"ae":"Avestan",
"af":"Afrikaans",
"ak":"Akan",
"am":"Amharic",
"an":"Aragonese",
"ar":"Arabic",
"as":"Assamese",
"av":"Avaric",
"ay":"Aymara",
"az":"Azerbaijani",
"ba":"Bashkir",
"be":"Belarusian",
"bg":"Bulgarian",
"bh":"Bihari",
"bi":"Bislama",
"bm":"Bambara",
"bn":"Bengali",
"bo":"Tibetan",
"br":"Breton",
"bs":"Bosnian",
"ca":"Catalan",
"ce":"Chechen",
"ch":"Chamorro",
"co":"Corsican",
"cr":"Cree",
"cs":"Czech",
"cu":"Church Slavic",
"cv":"Chuvash",
"cy":"Welsh",
"da":"Danish",
"de":"German",
"dv":"Divehi",
"dz":"Dzongkha",
"ee":"Ewe",
"el":"Greek",
"en":"English",
"eo":"Esperanto",
"es":"Spanish",
"et":"Estonian",
"eu":"Basque",
"fa":"Persian",
"ff":"Fulah",
"fi":"Finnish",
"fj":"Fijian",
"fo":"Faroese",
"fr":"French",
"fy":"Western Frisian",
"gd":"Gaelic",
"gl":"Galician",
"gn":"Guarani",
"gu":"Gujarati",
"gv":"Manx",
"ha":"Hausa",
"he":"Hebrew",
"hi":"Hindi",
"ho":"Hiri Motu",
"hr":"Croatian",
"ht":"Haitian",
"hu":"Hungarian",
"hy":"Armenian",
"hz":"Herero",
"ia":"Interlingua" ,
"id":"Indonesian",
"ie":"Interlingue",
"ig":"Igbo",
"ii":"Sichuan Yi",
"ik":"Inupiaq",
"io":"Ido",
"is":"Icelandic",
"it":"Italian",
"iu":"Inuktitut",
"ja":"Japanese",
"jv":"Javanese",
"ka":"Georgian",
"kg":"Kongo",
"ki":"Kikuyu",
"kj":"Kuanyama",
"kk":"Kazakh",
"kl":"Kalaallisut",
"km":"Central Khmer",
"kn":"Kannada",
"ko":"Korean",
"ks":"Kashmiri",
"ku":"Kurdish",
"kv":"Komi",
"kw":"Cornish",
"ky":"Kirghiz",
"la":"Latin",
"lb":"Luxembourgish",
"lg":"Ganda",
"li":"Limburgan",
"ln":"Lingala",
"lo":"Lao",
"lt":"Lithuanian",
"lu":"Luba-Katanga",
"lv":"Latvian",
"mg":"Malagasy",
"mh":"Marshallese",
"mi":"Maori",
"mk":"Macedonian",
"ml":"Malayalam",
"mn":"Mongolian",
"mr":"Marathi",
"ms":"Malay",
"mt":"Maltese",
"my":"Burmese",
"na":"Nauru",
"nb":"Bokmål",
"nd":"Ndebele",
"ne":"Nepali",
"ng":"Ndonga",
"nl":"Dutch",
"nn":"Norwegian",
"no":"Norwegian",
"nr":"South Ndebele",
"nv":"Navajo",
"ny":"Chichewa",
"oc":"Occitan",
"oj":"Ojibwa",
"om":"Oromo",
"or":"Oriya",
"os":"Ossetian",
"pa":"Panjabi",
"pi":"Pali",
"pl":"Polish",
"ps":"Pushto",
"pt":"Portuguese",
"qu":"Quechua",
"rm":"Romansh",
"rn":"Rundi",
"ro":"Romanian",
"ru":"Russian",
"rw":"Kinyarwanda",
"sa":"Sanskrit",
"sc":"Sardinian",
"sd":"Sindhi",
"se":"Northern Sami",
"sg":"Sango",
"si":"Sinhala",
"sk":"Slovak",
"sl":"Slovenian",
"sm":"Samoan",
"sn":"Shona",
"so":"Somali",
"sq":"Albanian",
"sr":"Serbian",
"ss":"Swati",
"st":"Southern",
"su":"Sundanese",
"sv":"Swedish",
"sw":"Swahili",
"ta":"Tamil",
"te":"Telugu",
"tg":"Tajik",
"th":"Thai",
"ti":"Tigrinya",
"tk":"Turkmen",
"tl":"Tagalog",
"tn":"Tswana",
"to":"Tonga",
"tr":"Turkish",
"ts":"Tsonga",
"tt":"Tatar",
"tw":"Twi",
"ty":"Tahitian",
"ug":"Uighur",
"uk":"Ukrainian",
"ur":"Urdu",
"uz":"Uzbek",
"ve":"Venda",
"vi":"Vietnamese",
"vo":"Volapük",
"wa":"Walloon",
"wo":"Wolof",
"xh":"Xhosa",
"yi":"Yiddish",
"yo":"Yoruba",
"za":"Zhuang",
"zh":"Chinese",
"zu":"Zulu"

}
var history = []
var modal = document.getElementById("myModal");
var login = document.getElementsByClassName("login-modal")[0]
var loginbtn = document.getElementsByClassName("next-button")[0]
// Get the button that opens the modal
var btn = document.getElementById("historybtn");
var default_movie_list = []
var age, gender
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var movie_close = document.getElementsByClassName("movie-detail-close")[0];
var movie_modal = document.getElementsByClassName("movie-modal")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

loginbtn.onclick = function() {
    login.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

movie_close.onclick = function() {
    movie_modal.style.display = "none";
}
var next = document.getElementById("next-page-btn");
var count = 0;
next.onclick = function(){
    
    count = parseInt(count) + parseInt(1)
    //console.log(count)
    if (count <= 1){
        
        array = default_movie_list.slice(count*10, (count+1)*10)
    }
    else if ((count <= 3) && (count >= 2))
    {
        response = httpGet('https://api.themoviedb.org/3/movie/popular?api_key=2879ea6fbf2c6700e7c0f220bd40b52e&language=en-US&page=2')
        default_movie_list = JSON.parse(response).results
        array = default_movie_list.slice((count-2)*10, (count-1)*10)
    }
    else{
        count = 0
        response = httpGet('https://api.themoviedb.org/3/movie/popular?api_key=2879ea6fbf2c6700e7c0f220bd40b52e&language=en-US&page=1')
        default_movie_list = JSON.parse(response).results
        array = default_movie_list.slice(count*10, (count+1)*10)
    }
    extract_10_movie(array)
}
var recommend_movie
function movieOnClick(movie){
    //console.log(movie.getAttribute("isChecked"))
     movie_modal.style.display = "block"
    movie_id = movie.getAttribute("data-value")
    movie_array = JSON.parse(httpGet('https://api.themoviedb.org/3/movie/'+movie_id+'?api_key=2879ea6fbf2c6700e7c0f220bd40b52e&language=en-US'))
    movie_detail_container = document.getElementsByClassName("movie-modal-main-content")[0]
    movie_img = document.getElementsByClassName("image-container")[0]
    console.log( movie_detail_container.children[0].children[0])
    movie_img.children[0].src = "http://image.tmdb.org/t/p/w185"+movie_array.poster_path;
    movie_detail_container.children[0].children[0].innerHTML = movie_array.original_title;
    movie_detail_container.children[1].children[0].innerHTML = genre_jo[""+movie_array.genres[0].id]
    movie_detail_container.children[2].children[0].innerHTML = movie_array.release_date.substring(0,4)
    movie_detail_container.children[3].children[0].innerHTML = language_jo[movie_array.spoken_languages[0].iso_639_1]
   

    if (!(movie.getAttribute("isChecked") === 'true')){
        //console.log("abc")
        movie.style.backgroundColor = "rgba(0, 209, 256, 0.5)"
        cln = movie.cloneNode(true)
        $("#history-content").append(cln);
        //console.log(movie.getAttribute("data-value"))
        movie.setAttribute("isChecked", true)
        var body ={
            "age": $("#age-select").val(),
            "gender": $("#gender-select").val(),
            "movie" : "a"
        }
        console.log(body)
          
        httpPost("http://localhost:3000/recommend", JSON.stringify(body))
    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == movie_modal){
        movie_modal.style.display = "none";
    }
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function getInfo(movie){
    
    console.log(movie.movies)
    for ( c = 0; c < movie.movies.length ; c++){
        movie_array = JSON.parse(httpGet('https://api.themoviedb.org/3/movie/'+movie.movies[c]+'?api_key=2879ea6fbf2c6700e7c0f220bd40b52e&language=en-US'))
        //console.log(movie_array)
        movie_detail_container = document.getElementsByClassName("recommender")
        movie_detail_container[c].style.backgroundColor = "rgba(256, 256, 256, 0.2)"
        movie_detail_container[c].setAttribute("data-value", movie_array.id);
        movie_detail_container[c].setAttribute("isChecked", false)
        movie_detail_container[c].style.display = "flex";
        movie_detail_container[c].children[0].src = "http://image.tmdb.org/t/p/w185"+movie_array.poster_path;
        movie_detail_container[c].children[1].children[1].children[0].innerHTML = genre_jo[""+movie_array.genres[0].id]
        title = movie_array.title
       
        movie_detail_container[c].children[1].children[0].children[0].innerHTML = title;
    }
}
function httpPost(theUrl, body)
{
    var xmlhttpP = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttpP.open("POST", theUrl);
    xmlhttpP.setRequestHeader("Access-Control-Allow-Origin","*")
    xmlhttpP.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept")
          
    xmlhttpP.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttpP.send(body);
    xmlhttpP.onload = () => {
        console.log(xmlhttpP.responseText)
        getInfo(JSON.parse(xmlhttpP.responseText))
    }
    
}
function extract_10_movie(movie_array){
    movie_detail_container = document.getElementsByClassName("movie-detail-container")
    for ( i = 0; i < movie_array.length && i < 10; i++) {
        movie_detail_container[i].style.backgroundColor = "rgba(256, 256, 256, 0.2)"
        movie_detail_container[i].setAttribute("data-value", movie_array[i].id);
        movie_detail_container[i].setAttribute("isChecked", false)
        movie_detail_container[i].style.display = "flex";
        movie_detail_container[i].children[0].src = "http://image.tmdb.org/t/p/w185"+movie_array[i].poster_path;
        
        title = movie_array[i].original_title
        console.log(movie_array[i].genre_ids)
        movie_detail_container[i].children[1].children[0].children[0].innerHTML = title;
        movie_detail_container[i].children[1].children[1].children[0].innerHTML = genre_jo[""+movie_array[i].genre_ids[0]]
    }
}
$( document ).ready(function() {
    response = httpGet('https://api.themoviedb.org/3/movie/popular?api_key=2879ea6fbf2c6700e7c0f220bd40b52e&language=en-US&page=1')
    default_movie_list = JSON.parse(response).results
    extract_10_movie(default_movie_list)
});