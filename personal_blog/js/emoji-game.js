function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
var jsonObj = JSON.parse(Get('https://gist.githubusercontent.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb/raw/d8e4b78cfe66862cf3809443c1dba017f37b61db/emojis.json'));
var emoji;
var emojiName;

function winner(){
    var element = document.getElementById("winner-loser");
    element.innerHTML = "That was the right answer!"
};

function loser(){
    var element = document.getElementById("winner-loser");
    element.innerHTML = "Wrong, press on \"Load\" to try again!"
}

function checkEmoji(){
    var inp = document.getElementById("emoji-inp").value;
    if (inp===emojiName){
        winner();
    }
    else{
        loser();
    }
    return false;
}

function loadEmoji(){ 

    var randomNumber = Math.floor(Math.random() * jsonObj.emojis.length);
    emoji = jsonObj.emojis[randomNumber].emoji;
    emojiName = jsonObj.emojis[randomNumber].name;
    if(emojiName.indexOf(":") !== -1){
        emojiName = emojiName.slice(0, emojiName.indexOf(":"));
    }
    console.log(emoji, emojiName);
    var element = document.getElementById("emoji-show");
    element.innerHTML = emoji;
    return false;
}


window.addEventListener("load", function(){
    var element = document.getElementById("emoji-show");
    loadEmoji();
    element.innerHTML = emoji;
});
