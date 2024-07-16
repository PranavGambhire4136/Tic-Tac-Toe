let player = 1;
let count = 0;

function playSound(win)  {
    let toPlay;
    if (win == 1) {
        toPlay = "./sounds/music.mp3";
    } else if (win == 0) {
        toPlay = "./sounds/gameover.mp3";
    } else {
        toPlay = "./sounds/ting.mp3";
    }

    let audio = new Audio(toPlay);
    audio.play();
    if (win == 1) {
        setTimeout(() => {
            audio.pause();
        }, 2000);
    }
}

$(".items").click(function () {
    // console.log("clicked");
    // $(this).css("background-image", "url(images/o.png)");

    let name = player;
    if (!$(this).hasClass("added")) {
        // console.log("added");
        count++;
        $(this).addClass("added");

        if (player == 1) {
            player = 2;
            $(this).css({
                "background-image": "url(images/x.jpeg)",
                "background-size": "cover",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });
            if ($(this).hasClass('player2')) {
                $(this).removeClass("player2");
            }
            $(this).addClass("player1");
            $("h2").text("Turn: Player2");
        } else {
            player = 1;
            $(this).css({
                "background-image": "url(images/o.jpeg)",
                "background-size": "cover",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });
            if ($(this).hasClass('player1')) {
                $(this).removeClass("player1");
            }
            $(this).addClass("player2");
            $("h2").text("Turn: Player1");
        }

        if (isWin(name)) {
            // console.log("win");
            // setTimeout(function {
            //     $("h3").text("Player " + name + " wins");
            //     $(".hide").css("display", "block");
            // }, 3000)
                $("h3").text("Player " + name + " wins");
                $(".hide").css("display", "block");
            
             playSound(1);
            return;
        }

        if (count === 9) {
            // console.log(count);
            // console.log("draw");
            $("h3").text("Game Draw");
            $(".hide").css("display", "block");
            playSound(0);
            return;
        }

        playSound(-1);
    } else {
        // console.log("can't change");
        return;
    }
});

$(".items").hover(function() {
    $(this).addClass("hovered");
}, 
function() {
    $(this).removeClass("hovered");
});

$("button").click(function() {
    location.reload();
});

function isWin(name) {
    const winningCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let currentClass = name === 1 ? 'player1' : 'player2';

    for (let combo of winningCombo) {
        if ($(".items").eq(combo[0]).hasClass(currentClass) &&
            $(".items").eq(combo[1]).hasClass(currentClass) &&
            $(".items").eq(combo[2]).hasClass(currentClass)) {
            return true;
        }
    }
    return false;
}

$('button').hover(function() {
    $(this).addClass('hoveredButton');
}, function() {
    $(this).removeClass('hoveredButton');
});














//calcultor
// $('.ac').click(function() {
//     content = "";
//     console.log("all clear is clicked")
//     printScreen();
// });


// $('#one').click(function() {
//     content = content + "1";
//     printScreen();
// });


// $('#two').click(function() {
//     content = content + "2";
//     printScreen();
// });

// $('#three').click(function() {
//     content = content + "3";
//     printScreen();
// });

// $('#four').click(function() {
//     content = content + "4";
//     printScreen();
// });

// $('#five').click(function() {
//     content = content + "5";
//     printScreen();
// });

// $('#six').click(function() {
//     content = content + "6";
//     printScreen();
// });

// $('#seven').click(function() {
//     content = content + "7";
//     printScreen();
// });

// $('#eight').click(function() {
//     content = content + "8";
//     printScreen();
// });

// $('#nine').click(function() {
//     content = content + "9";
//     printScreen();
// });

// $('#zero').click(function() {
//     content = content + "0";
//     printScreen();
// });

// $('#doubleZero').click(function() {
//     content = content + "00";
//     printScreen();
// });



// $('#point').click(function() {
//     content = content + ".";
//     printScreen();
// });



// $('#add').click(function() {
//     content = content + " + ";
//     printScreen();
// });
// $('#sub').click(function() {
//     content = content + " - ";
    
//     printScreen();
// });
// $('#mult').click(function() {
//     content = content + " * ";
//     printScreen();
// });
// $('#division').click(function() {
//     content = content + " / ";
//     printScreen();
// });

// $('#per').click(function() {
//     content = content + " % ";
//     printScreen();
// });