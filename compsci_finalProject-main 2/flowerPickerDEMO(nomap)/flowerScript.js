/// FLOWER SEARCH /// 
const form = document.getElementById("form");
const input = document.getElementById("feelingInput");
const log = document.getElementById("log");
const outputImage = document.getElementById("outputImage");
const colorSelect = document.getElementById("colorSelect");


///FLOWERS///
///would it be easier to use SQL?....yes but we are too far in now
const flowers = [

    /// sample flowers in each color offered 
    ///roses
    {flower: "red rose", color: "red", feeling: "love", 
        img: "images/redRose.png"},
    {flower: "orange rose", color: "orange", feeling: "passion"
        , img: "images/orangeRose.png"},
    {flower: "yellow rose", color: "yellow", feeling: "friendship",
         img: "images/yellowRose.png"},
    {flower: "blue rose", color: "blue", feeling: "unattainable", 
        img: "images/blueRose.png"},
    {flower: "purple rose", color: "purple", feeling: "enchantment", 
        img: "images/purpleRose.png"},
    {flower: "pink rose", color: "pink", feeling: "gratitude", 
        img: "images/pinkRose.png"},
    {flower: "white rose", color: "white", feeling: "new beginnings", 
        img: "images/whiteRose.png"},
    {flower: "black rose", color: "black", feeling:"anger", 
        img: "images/blackRose.png"},

    {flower: "sunflower", color: "yellow", feeling: "happy", 
        img: "images/yellowSunflower.png"},
    
    ///lilies
    {flower: "red lily", color: "red", feeling: "courage",
        img: "images/redLily.png"},
    {flower: "orange lily", color: "orange", feeling: "hate", 
        img: "images/orangeLily.png"},
    {flower:"yellow Lily", color: "yellow", feeling: "prosperity", 
        img: "images/yellowLily.png"},
    {flower: "purple lily", color: "purple", feeling: "proudness",
        img: "images/purpleLily.png"},
    {flower: "pink lily", color: "pink", feeling: "innocence",
        img: "images/pinkLily.png"},
    {flower: "white lily", color: "white", feeling: "condolences",
        img: "images/whiteLily.png"},

    ///hydrangeas
    {flower: "green hydrangea", color: "green", feeling: "good luck", 
        img: "images/greenHyd.png"},
    {flower: "blue hydrangea", color: "blue", feeling: "sorry",
        img: "images/blueHyd.png"},
    {flower: "purple hydrangea", color: "purple", feeling: "congratulations",
        img: "images/purpleHyd.png"},
    {flower: "pink hydrangea", color: "pink", feeling: "thanks",
        img: "images/pinkHyd.png"},
    {flower: "white hydrangea", color: "white", feeling: "sincerity",
        img: "images/whiteHyd.png"},
    

    ///orchids
    {flower: "orange orchid", color: "orange", feeling: "happy",
        img: "images/orangeOrchid.png"},
    {flower: "yellow orchid", color: "yellow", feeling: "good luck",
        img: "images/yellowOrchid.png"},
    {flower: "purple orchid", color: "purple", feeling: "mystery",
        img: "images/purpleOrchid.png"},
    {flower: "pink orchid", color: "pink", feeling: "affection",
        img: "images/pinkOrchid.png"},
    {flower: "white orchid", color: "white", feeling: "congratulations",
        img: "images/whiteOrchid.png"},


    {flower: "lily of the valley", color: "white", feeling: "promise",
        img: "images/whiteLilyofVal.png"},
    
    ///tulips
    {flower: "black tulip", color: "black", feeling: "strength",
        img: "images/blackTulip.png"},
    {flower: "red tulip", color: "red", feeling: "romance",
        img: "images/redTulip.png"},
    {flower: "orange tulip", color: "orange", feeling: "appreciation",
        img: "images/orangeTulip.png"},
    {flower: "yellow tulip", color: "yellow", feeling: "cheerful",
        img: "images/yellowTulip.png"},
    {flower: "purple tulip", color: "purple", feeling: "elegance",
        img: "images/purpleTulip.png"},
    {flower: "pink tulip", color: "pink", feeling: "caring",
        img: "images/pinkTulip.png"},
    {flower: "white tulip", color: "white", feeling: "i'm sorry",
        img: "images/whiteTulip.png"},


    ///daisies
    {flower: "red daisy", color: "red", feeling: "crush",
        img: "images/redDaisy.png"},
    {flower: "orange daisy", color: "orange", feeling: "joy",
        img: "images/orangeDaisy.png"},
   {flower: "yellow daisy", color: "yellow", feeling: "get well",
        img: "images/yellowDaisy.png"},
    {flower: "blue daisy", color: "blue", feeling: "trust",
        img: "images/blueDaisy.png"},
    {flower: "purple daisy", color: "purple", feeling: "joy",
        img: "images/purpleDaisy.png"},
    {flower: "pink daisy", color: "pink", feeling: "joy",
        img: "images/pinkDaisy.png"},


    ///carnations
    {flower: "red carnation", color: "red", feeling: "romance",
        img: "images/redCarnation.png"},
    {flower: "orange carnation", color: "orange", feeling: "desire",
        img: "images/orangeCarnation.png"},
    {flower: "yellow carnation", color: "yellow", feeling: "jealousy",
        img: "images/yellowCarnation.png"},
    {flower: "green carnation", color: "green", feeling: "love",
        img: "images/greenCarnation.png"},
    {flower: "blue carnation", color: "blue", feeling: "distrust",
        img: "images/blueCarnation.png"},
    {flower: "purple carnation", color: "purple", feeling: "apology",
        img: "images/purpleCarnation.png"},
    {flower: "pink carnation", color: "pink", feeling: "maternal love",
        img: "images/pinkCarnation.png"},



];

///MAIN EVENT///
///function for the text and submit button (call and response) 
function logSubmit(event){
    event.preventDefault();

    const feeling = input.value.toLowerCase();
    const color = colorSelect.value;

    //find flower that matches feeling && color (i wanted to do an OR option but i'll figure that out later)
    let result = flowers.find(
        flower => flower.feeling === feeling && flower.color === color);

    if(!result){
        result = flowers.find(
            flower=> flower.feeling === feeling)
    }

    ///if no color selected
    if(!color){
        result = flowers.find(
            flower=> flower.feeling === feeling)
    }

    if(result) {
        log.textContent = `${result.flower}: (${result.feeling})`;
        outputImage.src = result.img || "default.png";
    }

    
    else{
        log.textContent = "we don't have that flower yet, sorry! have a tulip!";
        outputImage.src = "images/whiteTulip.png";
    }

}
form.addEventListener("submit", logSubmit); 