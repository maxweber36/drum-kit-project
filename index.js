var buttonCounts = document.querySelectorAll(".drum").length;

for (i = 0; i < buttonCounts; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// 通过键盘播放不同声音

document.addEventListener("keydown", function(event) {
    console.log(event)
    makeSound(event.key);
    buttonAnimation(event.key);
});


// 通过点击页面按钮播放不同声音

function handleClick(){
        // this.innerHTML 获取被点击按钮的内容（即字母）
        var buttonOfKey = this.innerHTML;
        makeSound(buttonOfKey);
        buttonAnimation(buttonOfKey);
}

// 根据不同的值，播放不同的声音

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
            
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
            
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key);
    }
}

//按键效果
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 200);
    activeButton.classList.add("pressed");

}




// var allButtons = document.querySelectorAll(".drum");
// for (i=0; i<allButtons.length; i++) {
//     allButtons[i].classList.remove("pressed");
// };