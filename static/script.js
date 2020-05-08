//console.log("hello")
//challenge 1
function ageindays(){
    var birthyear=prompt("what year were you born?")
    var ageindayss=(2020-birthyear)*365
    var h1=document.createElement('h1')
    var textAnswer=document.createTextNode("you are "+ageindayss+" days old")
    h1.setAttribute("id","ageindays");
    h1.appendChild(textAnswer);
    document.getElementById('box_result').appendChild(h1);
    
}

function reset(){
    document.getElementById("ageindays").remove();
}

function removeWithoutCopy(arr, item) {
    arr.sort()
    s=[]
    for(let i=0;i<arr.length;i++){
        if (arr[i]===item){
            s.push(i)
        }
    }
    count=s.length
    arr.splice(s[0],count)
    return arr
}
console.log(removeWithoutCopy([1,2,2,3,4,2,2],2))

function duplicates(arr) {
    arr1=[]
    arr.sort()
    
    for(let i=0;i<arr.length;i++){
        if(arr[i+1]===arr[i] && arr[i+2]!==arr[i]){
            arr1.push(arr[i]);
            i++;
        }
    }
    console.log(arr1)
}
console.log(duplicates([1, 2, 4, 4, 3, 3,3,3, 1, 5, 3,3]))

function parse2Int(num) {
    return parseInt(num,10);
}
console.log(parse2Int('0x12',))

function fizzBuzz(num) {
    if(num===null || typeof(num) !== "number"){
        return false
    }
    else if(num%3===0 && num%5===0){
        return "fizzbuzz"
    }
    else if(num%3===0){
        return "fizz"
    }
    else if(num%5===0){
        return 'buzz'
    }
    else{
        return num
    }
    
}
//challenge 2 generate cat
function genratecat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="https://cdn2.thecatapi.com/logos/thecatapi_256xW.png";
    div.appendChild(image);
}
//challenge 3 rock paper sessocrs

function rockgame(yourchoice){
    console.log(yourchoice.id)
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice=botchoices()
    console.log(botchoice)
    results=decidewinner(humanchoice,botchoice);
    console.log(results)
    msg=finalmsg(results[0]);  //{'msg'="you won", 'color':"green"}
    console.log(msg)
    rpsfrontend(yourchoice.id,botchoice,msg);
}
function botchoices(){
    const arr=['rock','paper','scissors']
    res=Math.floor(Math.random()*3)
    return arr[res]
}

function decidewinner(humanchoice,botchoice){
    var resdatabase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
    }
    var humanscore=resdatabase[humanchoice][botchoice]
    var botscore=resdatabase[botchoice][humanchoice]
    return [humanscore,botscore]
}

function finalmsg(humscore){
    if(humscore===0){
        return {'msg':'You Lost','color':"red"}
    }
    else if(humscore===0.5){
        return {'msg':'You tied','color':"yellow"}
    }
    else if(humscore===1){
        return {'msg':'You Won','color':"green"}
    }
}

function rpsfrontend(humanchoice,botchoice,msg){
    var imgdatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src

    }
    //remove all component

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();


    //create
    var humandiv=document.createElement('div');
    var botdiv=document.createElement('div');
    var msgdiv=document.createElement('div');
    

    humandiv.innerHTML="<img src='" +imgdatabase[humanchoice] +"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1)'>"
    humandiv.setAttribute("id","human");
    document.getElementById("flex-box-res-div").appendChild(humandiv)
    
    msgdiv.innerHTML="<h1 style='color:"+msg['color'] +"; font-size:60px; padding:30px; '>"+msg.msg +"</h1>"
    msgdiv.setAttribute("id","msg");
    document.getElementById("flex-box-res-div").appendChild(msgdiv)
    
    botdiv.innerHTML="<img src='" +imgdatabase[botchoice] +"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1)'>"
    botdiv.setAttribute("id","rob");
    document.getElementById("flex-box-res-div").appendChild(botdiv)

}

//change 4 change color of buttons
var all_buttons=document.getElementsByTagName('button');
console.log(all_buttons);

var copybutton=[];
for (let i=0;i<all_buttons.length;i++){
    copybutton.push(all_buttons[i].classList[1])
}

//console.log(copybutton[0].classList)
//copybutton[0].classList.remove('btn-primary')
//copybutton[0].classList.add('btn-primary')

function buttoncolorchange(buttonthing){
    if(buttonthing.value==="red"){
        buttonred();
    }
    else if (buttonthing.value==="green"){
        buttongreen();
    }
    else if (buttonthing.value==="reset"){
        buttonreset();
    }
    else if(buttonthing.value==="random"){
        buttonrandom();
    }
}

function buttonred(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttongreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonreset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copybutton[i]);
    }
}

function buttonrandom(){
    var choices=['btn-primary','btn-danger','btn-success','btn-warning']
    //choices[Math.floor(Math.random()*4)]
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[Math.floor(Math.random()*4)]);
    }
}

//challenge 5 blackjack
let king={
    'you':{'scorespan':'#your-score','div':'#your-box','score':0},
    'rob':{'scorespan':'#rob-score','div':'#rob-box','score':0},
    'card':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],     //randomly select one card
    'cardvalue':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]},
    'wins':0,
    'loses':0,
    'draws':0,
    'isstand':false,
    'turnsover':false
}; 

const you = king['you']
const rob=king['rob']

const hitsound = new Audio('sound/swish.m4a');
const lostsound = new Audio('sound/aww.mp3');
const winsound = new Audio('sound/cash.mp3');

document.querySelector('#hit-btn').addEventListener('click',blackjackhit);
document.querySelector('#stand-btn').addEventListener('click',robgame);
document.querySelector('#deal-btn').addEventListener('click',blackjackdeal);

function blackjackhit(){
    if(king['isstand']===false){
        let card=randomcard();
        showcard(you,card);
        updatescore(card,you)
        showscore(you)
    }

}

function randomcard(){
    return king['card'][Math.floor(Math.random()*13)]
}

function showcard(activeplayer,card){
    if(activeplayer['score']<=21){
        let cardimg=document.createElement('img');
        cardimg.src=`img/${card}.png`;
        document.querySelector(activeplayer['div']).appendChild(cardimg);
        hitsound.play();
    } 
}

function updatescore(card,activeplayer){
    if(card==='A'){
        if(activeplayer['score']+king['cardvalue'][card]<=21){
            activeplayer['score']+=king['cardvalue'][card][1]
        }
        else{
            activeplayer['score']+=king['cardvalue'][card][0]
        }
    }
    else{
        //if adding 11 keeps me below 21,else add 1
        activeplayer['score']+=king['cardvalue'][card]
    }
}

function showscore(activeplayer){
    if(activeplayer['score']>21){
        document.querySelector(activeplayer['scorespan']).textContent='Bust!!!';
        document.querySelector(activeplayer['scorespan']).style.color='red';
    }
    else if(activeplayer['score']<=21){
        document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
    }


}

function blackjackdeal(){
    if(king['turnsover']===true){
        king['isstand'] = false;
        let yourimgs=document.querySelector('#your-box').querySelectorAll('img');
        let robimgs=document.querySelector('#rob-box').querySelectorAll('img');

        for(let i=0;i<yourimgs.length;i++){
            yourimgs[i].remove()
        }
        for(let i=0;i<robimgs.length;i++){
            robimgs[i].remove()
        }
        you['score']=0;
        rob['score']=0;

        document.querySelector('#your-score').textContent=0;
        document.querySelector('#your-score').style.color='white';
        document.querySelector('#rob-score').textContent=0;
        document.querySelector('#rob-score').style.color='white';

        document.querySelector('#game-result').textContent="let's play";
        document.querySelector('#game-result').style.color="black";
        king['turnsover'] = false;
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function robgame(){
    king['isstand'] = true;
    while(rob['score'] < 16 && king['isstand'] === true){
        let card=randomcard();
        showcard(rob,card);
        updatescore(card,rob);
        showscore(rob);
        await sleep(700)
    }
    king['turnsover'] = true;
    showresult(comparescore());
    

}
//compare score and get winner
//update winner score
function comparescore(){
    let winner;
    if(you['score']<=21){
        //condition1: you are <=21 and rob bust
        if(you['score']>rob['score'] || rob['score']>21){
            winner=you
            console.log("you won!")
            king['wins']++;
        }
        else if(you['score'] < rob['score']){
            winner=rob
            console.log("you lost!")
            king['loses']++;
        }
        else if(you['score'] === rob['score']){
            console.log("you drew!");
            king['draws']++;
        }
    }
    //you burst rob doesnt bust
    else if(you['score']>21 && rob['score']<=21){
        winner=rob;
        console.log("you lost!");
        king['loses']++;
    }else if(you['score']>21 && rob['score']>21){
        console.log("you drew!");
        king['draws']++;
    }
    console.log("winner is: ",winner)
    return winner;
}
function showresult(winner){
    let msg,msgcolor;

    if(king['turnsover'] === true){
        if(winner===you){
            msg="you won!!!";
            msgcolor='green';
            winsound.play();
            document.querySelector('#wins').textContent=king['wins'];
        }
        else if(winner===rob){
            msg="you lost!!!";
            msgcolor='green';
            lostsound.play();
            document.querySelector('#loses').textContent=king['loses'];
    
        }else{
            msg="you drew!!!";
            msgcolor='black';
            document.querySelector('#draws').textContent=king['draws'];
    
        }
        document.querySelector('#game-result').textContent=msg;
        document.querySelector('#game-result').style.color=msgcolor;
    
    }

    
}
