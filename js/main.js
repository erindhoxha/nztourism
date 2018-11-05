
// TRANSPORT
  var transport = {
    Motorbike: {
        name: "Motorbike",
        "Minimum People": 1,
        "Maximum People": 1,
        Price: 109,
        "Minimum Days": 1,
        "Maximum Days": 5,
        Fuel: "3.7l/100m"
    },
    "Small Car": {
        name: "Small Car",
        "Minimum People": 1,
        "Maximum People": 2,
        Price: 129,
        "Minimum Days": 1,
        "Maximum Days": 10,
        Fuel: "8.5l/100km"
    },
    "Large Car": {
        name: "Large Car",
        "Minimum People": 1,
        "Maximum People": 5,
        Price: 144,
        "Minimum Days": 3,
        "Maximum Days": 10,
        Fuel: "9.7l/100km"
    },
    "Motor Home": {
        name: "Motor Home",
        "Minimum People": 2,
        "Maximum People": 6,
        Price: 200,
        "Minimum Days": 2,
        "Maximum Days": 15,
        Fuel: "17l/100km"
    }
}

//SLIDER


var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes(); 
var minutesDouble = (d.getMinutes()<10?'0':'') + d.getMinutes();
var seconds = d.getSeconds(); 

//First Statement
$(".container-empty").addClass("container");
$(".container-empty").append('<span class="time-right">Sent ' + hours + ':' + minutesDouble + '</span>');
$(".container-empty").append("<img src='img/bot.png' alt='Avatar' style='width:100%;'>");
$(".container-empty").append('<p>For how many people do you need the transport?</p>');
$(".container-empty").append('<button value="1" type="submit" class="button-transport" id="sendOne">1</button>');
$(".container-empty").append('<button value="2" type="submit" class="button-transport" id="sendOne">2</button>');
$(".container-empty").append('<button value="3" type="submit" class="button-transport" id="sendOne">3</button>');
$(".container-empty").append('<button value="4" type="submit" class="button-transport" id="sendOne">4</button>');
$(".container-empty").append('<button value="5" type="submit" class="button-transport" id="sendOne">5</button>');
$(".container-empty").append('<button value="6" type="submit" class="button-transport" id="sendOne">6</button>');

var buttonAll = document.getElementsByClassName('button-transport');

for (var i = 0; i < buttonAll.length; i++) {
    buttonAll[i].addEventListener('click', funct);

}

var firstAnswer;
var secondAnswer;

function funct(e) {
    console.log(this.value);
    $(".container-empty").append('<p id="p-text-people"></p>'); 
    var outputTextPeople = document.getElementById('p-text-people');
    outputTextPeople.innerHTML = this.value + ' people';
    firstAnswer = parseInt(this.value);
    

        $(".button-transport").hide();
        $(".container-empty-two").addClass("container mt-2");
        $(".container-empty-two").append('<span class="time-right">Sent ' + hours + ':' + minutesDouble + '</span>');
        $(".container-empty-two").append("<img src='img/bot.png' alt='Avatar' style='width:100%;'>");
        $(".container-empty-two").append('<p>Sweet, you\'ve chosen: ' + this.value + ' people' + '.</p>');
        $(".container-empty-two").append('<p>How many days do you wish to stay?');
        $(".container-empty-two").append('<div class="slidercontainer">');
        $(".slidercontainer").append('<input type="range" min="1" max="15" value="5" class="slider" id="myRange">');
        $(".slidercontainer").append('<p id="p-text"></p>'); 
        $("#p-text").html("5 days");
        $(".container-empty-two").append('<button id="btn-submit" type="submit">Submit</button>');  

        if (this.value == 6) {
            document.getElementById("myRange").setAttribute("max", "15");
        }
        
        var slider = document.getElementById("myRange");
        var output = document.getElementById("p-text");
        output.innerHTML = slider.value; // Display the default slider value
        secondAnswer = parseInt(document.getElementById('p-text').innerHTML);
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
        output.innerHTML = this.value + ' days';
    }

    $("#btn-submit").on('click', function() {
        secondAnswer = parseInt(document.getElementById('p-text').innerHTML)
        $("#btn-submit").hide(300);
        $("#myRange").hide(300);
        $(".container-empty-three").addClass("container mt-2");
        $(".container-empty-three").append('<span class="time-right">Sent ' + hours + ':' + minutesDouble  + '</span>');
        $(".container-empty-three").append("<img src='img/bot.png' alt='Avatar' style='width:100%;'>");
        $(".container-empty-three").append('<p id="answer-text">Cool, ' + secondAnswer + ' days for ' + firstAnswer + ' people.</p>');
        $(".container-empty-three").append('<p id="answer-text-two">I\'m suggesting you to go for:</p>');




            if (firstAnswer == 1) {
                if (secondAnswer < 3) {
                    //MOTORBIKE
                    $(".container-empty-four").addClass("container mt-2 text-center");
                    $(".container-empty-four").append('<div class="image-left">');
                    $(".image-left").append('<img id="motorbike-one" src="img/motorbike-one.jpeg">');   
                    $(".container-empty-four").append('<div id="text-right">')
                    $("#text-right").append('<h3 id="header-text" style="margin:0">' + transport.Motorbike.name + '</h4>');
                    $("#text-right").append('<p id="p-1" style="margin:0">Price: $' + transport.Motorbike.Price + '/day</p>');
                    $("#text-right").append('<p id ="p-2" style="margin:0">Fuel: ' + transport.Motorbike.Fuel + '</p>');
                    $("#text-right").append('<button type="button" id="btn-hire">Hire</button>');
                    //MOTORBIKE

                    //SMALL CAR
                    $(".container-empty-five").addClass("container mt-2 text-center");
                    $(".container-empty-five").append('<div class="image-left-two">');
                    $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                    $(".container-empty-five").append('<div id="text-right-two">')
                    $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                    $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                    $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                    $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                    //SMALL CAR
                } else if (secondAnswer >= 3 && secondAnswer <= 5) {
                    //MOTORBIKE
                    $(".container-empty-four").addClass("container mt-2 text-center");
                    $(".container-empty-four").append('<div class="image-left">');
                    $(".image-left").append('<img id="motorbike-one" src="img/motorbike-one.jpeg">');   
                    $(".container-empty-four").append('<div id="text-right">')
                    $("#text-right").append('<h3 id="header-text" style="margin:0">' + transport.Motorbike.name + '</h4>');
                    $("#text-right").append('<p id="p-1" style="margin:0">Price: $' + transport.Motorbike.Price + '/day</p>');
                    $("#text-right").append('<p id ="p-2" style="margin:0">Fuel: ' + transport.Motorbike.Fuel + '</p>');
                    $("#text-right").append('<button type="button" id="btn-hire">Hire</button>');
                    //MOTORBIKE

                    //SMALL CAR
                    $(".container-empty-five").addClass("container mt-2 text-center");
                    $(".container-empty-five").append('<div class="image-left-two">');
                    $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                    $(".container-empty-five").append('<div id="text-right-two">')
                    $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                    $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                    $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                    $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                    //SMALL CAR

                    //LARGE CAR
                    $(".container-empty-six").addClass("container mt-2 text-center");
                    $(".container-empty-six").append('<div class="image-left-three">');
                    $(".image-left-three").append('<img id="largeCar" src="img/largeCar.jpeg">');   
                    $(".container-empty-six").append('<div id="text-right-three">')
                    $("#text-right-three").append('<h3 id="header-text" style="margin:0">' + transport["Large Car"].name + '</h4>');
                    $("#text-right-three").append('<p id="p-1" style="margin:0">Price: $' + transport["Large Car"].Price + '/day</p>');
                    $("#text-right-three").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Large Car"].Fuel + '</p>');
                    $("#text-right-three").append('<button type="button" id="btn-hire">Hire</button>');
                    //LARGE CAR
                } else if (secondAnswer > 5 && secondAnswer <= 10) {
                //SMALL CAR
                $(".container-empty-five").addClass("container mt-2 text-center");
                $(".container-empty-five").append('<div class="image-left-two">');
                $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                $(".container-empty-five").append('<div id="text-right-two">')
                $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                //SMALL CAR

                //LARGE CAR
                $(".container-empty-six").addClass("container mt-2 text-center");
                $(".container-empty-six").append('<div class="image-left-three">');
                $(".image-left-three").append('<img id="largeCar" src="img/largeCar.jpeg">');   
                $(".container-empty-six").append('<div id="text-right-three">')
                $("#text-right-three").append('<h3 id="header-text" style="margin:0">' + transport["Large Car"].name + '</h4>');
                $("#text-right-three").append('<p id="p-1" style="margin:0">Price: $' + transport["Large Car"].Price + '/day</p>');
                $("#text-right-three").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Large Car"].Fuel + '</p>');
                $("#text-right-three").append('<button type="button" id="btn-hire">Hire</button>');
                //LARGE CAR
                } else {
                    var error = document.getElementById('answer-text');
                    error.innerHTML = "Oops, nothing was found.";
                    var errorTwo = document.getElementById('answer-text-two');
                    errorTwo.innerHTML = "Please, press the refresh button if you wish to search again.";
                }
                //FIRST ANSWER PEOPLE
                // SECOND ANSWER DAYS
            } else if (firstAnswer == 2) {
                if (secondAnswer < 2) {
                //SMALL CAR
                $(".container-empty-five").addClass("container mt-2 text-center");
                $(".container-empty-five").append('<div class="image-left-two">');
                $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                $(".container-empty-five").append('<div id="text-right-two">')
                $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                //SMALL CAR
                } else if (secondAnswer < 3) {
                    //SMALL CAR
                    $(".container-empty-five").addClass("container mt-2 text-center");
                    $(".container-empty-five").append('<div class="image-left-two">');
                    $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                    $(".container-empty-five").append('<div id="text-right-two">')
                    $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                    $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                    $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                    $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                    //SMALL CAR

                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else if (secondAnswer > 2 && secondAnswer <= 10) {
                    //SMALL CAR
                    $(".container-empty-five").addClass("container mt-2 text-center");
                    $(".container-empty-five").append('<div class="image-left-two">');
                    $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                    $(".container-empty-five").append('<div id="text-right-two">')
                    $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                    $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                    $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                    $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                    //SMALL CAR

                    //LARGE CAR
                    $(".container-empty-six").addClass("container mt-2 text-center");
                    $(".container-empty-six").append('<div class="image-left-three">');
                    $(".image-left-three").append('<img id="largeCar" src="img/largeCar.jpeg">');   
                    $(".container-empty-six").append('<div id="text-right-three">')
                    $("#text-right-three").append('<h3 id="header-text" style="margin:0">' + transport["Large Car"].name + '</h4>');
                    $("#text-right-three").append('<p id="p-1" style="margin:0">Price: $' + transport["Large Car"].Price + '/day</p>');
                    $("#text-right-three").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Large Car"].Fuel + '</p>');
                    $("#text-right-three").append('<button type="button" id="btn-hire">Hire</button>');
                    //LARGE CAR

                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else if (secondAnswer > 10) {
                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else {
                    var error = document.getElementById('answer-text');
                    error.innerHTML = "Oops, nothing was found.";
                    var errorTwo = document.getElementById('answer-text-two');
                    errorTwo.innerHTML = "Please, press the refresh button if you wish to search again.";
                }
            } else if (firstAnswer > 2 && firstAnswer < 6) {
                if (secondAnswer < 2) {
                    var error = document.getElementById('answer-text');
                    error.innerHTML = "Oops, nothing was found.";
                    var errorTwo = document.getElementById('answer-text-two');
                    errorTwo.innerHTML = "Please, press the refresh button if you wish to search again.";
                } else if (secondAnswer == 2) {
                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else if (secondAnswer > 2 && secondAnswer <= 10) {

                    //LARGE CAR
                    $(".container-empty-six").addClass("container mt-2 text-center");
                    $(".container-empty-six").append('<div class="image-left-three">');
                    $(".image-left-three").append('<img id="largeCar" src="img/largeCar.jpeg">');   
                    $(".container-empty-six").append('<div id="text-right-three">')
                    $("#text-right-three").append('<h3 id="header-text" style="margin:0">' + transport["Large Car"].name + '</h4>');
                    $("#text-right-three").append('<p id="p-1" style="margin:0">Price: $' + transport["Large Car"].Price + '/day</p>');
                    $("#text-right-three").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Large Car"].Fuel + '</p>');
                    $("#text-right-three").append('<button type="button" id="btn-hire">Hire</button>');
                    //LARGE CAR

                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else if (secondAnswer > 10) {
                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else {
                    var error = document.getElementById('answer-text');
                    error.innerHTML = "Oops, nothing was found.";
                    var errorTwo = document.getElementById('answer-text-two');
                    errorTwo.innerHTML = "Please, press the refresh button if you wish to search again.";
                }
            } else if (firstAnswer > 5 && secondAnswer > 1) {
                //MOTOR HOME
                $(".container-empty-seven").addClass("container mt-2 text-center");
                $(".container-empty-seven").append('<div class="image-left-four">');
                $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                $(".container-empty-seven").append('<div id="text-right-four">')
                $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
            } else {
            var error = document.getElementById('answer-text');
            error.innerHTML = "Oops, nothing was found.";
            var errorTwo = document.getElementById('answer-text-two');
            errorTwo.innerHTML = "Please, press the refresh button if you wish to search again.";
        }
    }); 
}


// http://stackoverflow.com/questions/12286332/twitter-bootstrap-remote-modal-shows-same-content-everytime



//TO REFRESH THE MODAL - GO AGAIN
$(document).on('hidden.bs.modal', '.modal', function () {
    
    $(".modal-body").empty();
    
    $(".modal-body").append('<div class="container-body" style="background-color:black" id="divBody">');
    $(".container-body").append("<div class='container-empty'>");
    $(".container-body").append("<div class='container-empty-two'>");
    $(".container-body").append("<div class='container-empty-three'>");
    $(".container-body").append("<div class='container-empty-four'>");
    $(".container-body").append("<div class='container-empty-five'>");
    $(".container-body").append("<div class='container-empty-six'>");
    $(".container-body").append("<div class='container-empty-seven'>");

    //First Statement
    $(".container-empty").addClass("container");
    $(".container-empty").append('<span class="time-right">Sent ' + hours + ':' + minutesDouble + '</span>');
    $(".container-empty").append("<img src='img/bot.png' alt='Avatar' style='width:100%;'>");
    $(".container-empty").append('<p>For how many people do you need the transport?</p>');
    $(".container-empty").append('<button value="1" type="submit" class="button-transport" id="sendOne">1</button>');
    $(".container-empty").append('<button value="2" type="submit" class="button-transport" id="sendOne">2</button>');
    $(".container-empty").append('<button value="3" type="submit" class="button-transport" id="sendOne">3</button>');
    $(".container-empty").append('<button value="4" type="submit" class="button-transport" id="sendOne">4</button>');
    $(".container-empty").append('<button value="5" type="submit" class="button-transport" id="sendOne">5</button>');
    $(".container-empty").append('<button value="6" type="submit" class="button-transport" id="sendOne">6</button>');



    var buttonAll = document.getElementsByClassName('button-transport');

for (var i = 0; i < buttonAll.length; i++) {
    buttonAll[i].addEventListener('click', funct);

}

var firstAnswer;
var secondAnswer;

function funct(e) {
    console.log(this.value);
    $(".container-empty").append('<p id="p-text-people"></p>'); 
    var outputTextPeople = document.getElementById('p-text-people');
    outputTextPeople.innerHTML = this.value + ' people';
    firstAnswer = parseInt(this.value);
    

        $(".button-transport").hide();
        $(".container-empty-two").addClass("container mt-2");
        $(".container-empty-two").append('<span class="time-right">Sent ' + hours + ':' + minutesDouble + '</span>');
        $(".container-empty-two").append("<img src='img/bot.png' alt='Avatar' style='width:100%;'>");
        $(".container-empty-two").append('<p>Sweet, you\'ve chosen: ' + this.value + ' people' + '.</p>');
        $(".container-empty-two").append('<p>How many days do you wish to stay?');
        $(".container-empty-two").append('<div class="slidercontainer">');
        $(".slidercontainer").append('<input type="range" min="1" max="15" value="5" class="slider" id="myRange">');
        $(".slidercontainer").append('<p id="p-text"></p>'); 
        $("#p-text").html("5 days");
        $(".container-empty-two").append('<button id="btn-submit" type="submit">Submit</button>');  

        if (this.value == 6) {
            document.getElementById("myRange").setAttribute("max", "15");
        }
        
        var slider = document.getElementById("myRange");
        var output = document.getElementById("p-text");
        output.innerHTML = slider.value; // Display the default slider value
        secondAnswer = parseInt(document.getElementById('p-text').innerHTML);
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
        output.innerHTML = this.value + ' days';
    }

    $("#btn-submit").on('click', function() {
        secondAnswer = parseInt(document.getElementById('p-text').innerHTML)
        $("#btn-submit").hide(300);
        $("#myRange").hide(300);
        $(".container-empty-three").addClass("container mt-2");
        $(".container-empty-three").append('<span class="time-right">Sent ' + hours + ':' + minutesDouble  + '</span>');
        $(".container-empty-three").append("<img src='img/bot.png' alt='Avatar' style='width:100%;'>");
        $(".container-empty-three").append('<p id="answer-text">Cool, ' + secondAnswer + ' days for ' + firstAnswer + ' people.</p>');
        $(".container-empty-three").append('<p id="answer-text-two">I\'m suggesting you to go for:</p>');




            if (firstAnswer == 1) {
                if (secondAnswer < 3) {
                    //MOTORBIKE
                    $(".container-empty-four").addClass("container mt-2 text-center");
                    $(".container-empty-four").append('<div class="image-left">');
                    $(".image-left").append('<img id="motorbike-one" src="img/motorbike-one.jpeg">');   
                    $(".container-empty-four").append('<div id="text-right">')
                    $("#text-right").append('<h3 id="header-text" style="margin:0">' + transport.Motorbike.name + '</h4>');
                    $("#text-right").append('<p id="p-1" style="margin:0">Price: $' + transport.Motorbike.Price + '/day</p>');
                    $("#text-right").append('<p id ="p-2" style="margin:0">Fuel: ' + transport.Motorbike.Fuel + '</p>');
                    $("#text-right").append('<button type="button" id="btn-hire">Hire</button>');
                    //MOTORBIKE

                    //SMALL CAR
                    $(".container-empty-five").addClass("container mt-2 text-center");
                    $(".container-empty-five").append('<div class="image-left-two">');
                    $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                    $(".container-empty-five").append('<div id="text-right-two">')
                    $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                    $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                    $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                    $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                    //SMALL CAR
                } else if (secondAnswer >= 3 && secondAnswer <= 5) {
                    //MOTORBIKE
                    $(".container-empty-four").addClass("container mt-2 text-center");
                    $(".container-empty-four").append('<div class="image-left">');
                    $(".image-left").append('<img id="motorbike-one" src="img/motorbike-one.jpeg">');   
                    $(".container-empty-four").append('<div id="text-right">')
                    $("#text-right").append('<h3 id="header-text" style="margin:0">' + transport.Motorbike.name + '</h4>');
                    $("#text-right").append('<p id="p-1" style="margin:0">Price: $' + transport.Motorbike.Price + '/day</p>');
                    $("#text-right").append('<p id ="p-2" style="margin:0">Fuel: ' + transport.Motorbike.Fuel + '</p>');
                    $("#text-right").append('<button type="button" id="btn-hire">Hire</button>');
                    //MOTORBIKE

                    //SMALL CAR
                    $(".container-empty-five").addClass("container mt-2 text-center");
                    $(".container-empty-five").append('<div class="image-left-two">');
                    $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                    $(".container-empty-five").append('<div id="text-right-two">')
                    $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                    $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                    $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                    $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                    //SMALL CAR

                    //LARGE CAR
                    $(".container-empty-six").addClass("container mt-2 text-center");
                    $(".container-empty-six").append('<div class="image-left-three">');
                    $(".image-left-three").append('<img id="largeCar" src="img/largeCar.jpeg">');   
                    $(".container-empty-six").append('<div id="text-right-three">')
                    $("#text-right-three").append('<h3 id="header-text" style="margin:0">' + transport["Large Car"].name + '</h4>');
                    $("#text-right-three").append('<p id="p-1" style="margin:0">Price: $' + transport["Large Car"].Price + '/day</p>');
                    $("#text-right-three").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Large Car"].Fuel + '</p>');
                    $("#text-right-three").append('<button type="button" id="btn-hire">Hire</button>');
                    //LARGE CAR
                } else if (secondAnswer > 5 && secondAnswer <= 10) {
                //SMALL CAR
                $(".container-empty-five").addClass("container mt-2 text-center");
                $(".container-empty-five").append('<div class="image-left-two">');
                $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                $(".container-empty-five").append('<div id="text-right-two">')
                $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                //SMALL CAR

                //LARGE CAR
                $(".container-empty-six").addClass("container mt-2 text-center");
                $(".container-empty-six").append('<div class="image-left-three">');
                $(".image-left-three").append('<img id="largeCar" src="img/largeCar.jpeg">');   
                $(".container-empty-six").append('<div id="text-right-three">')
                $("#text-right-three").append('<h3 id="header-text" style="margin:0">' + transport["Large Car"].name + '</h4>');
                $("#text-right-three").append('<p id="p-1" style="margin:0">Price: $' + transport["Large Car"].Price + '/day</p>');
                $("#text-right-three").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Large Car"].Fuel + '</p>');
                $("#text-right-three").append('<button type="button" id="btn-hire">Hire</button>');
                //LARGE CAR
                } else {
                    var error = document.getElementById('answer-text');
                    error.innerHTML = "Oops, nothing was found.";
                    var errorTwo = document.getElementById('answer-text-two');
                    errorTwo.innerHTML = "Please, press the refresh button if you wish to search again.";
                }
                //FIRST ANSWER PEOPLE
                // SECOND ANSWER DAYS
            } else if (firstAnswer == 2) {
                if (secondAnswer < 2) {
                //SMALL CAR
                $(".container-empty-five").addClass("container mt-2 text-center");
                $(".container-empty-five").append('<div class="image-left-two">');
                $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                $(".container-empty-five").append('<div id="text-right-two">')
                $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                //SMALL CAR
                } else if (secondAnswer < 3) {
                    //SMALL CAR
                    $(".container-empty-five").addClass("container mt-2 text-center");
                    $(".container-empty-five").append('<div class="image-left-two">');
                    $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                    $(".container-empty-five").append('<div id="text-right-two">')
                    $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                    $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                    $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                    $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                    //SMALL CAR

                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else if (secondAnswer > 2 && secondAnswer <= 10) {
                    //SMALL CAR
                    $(".container-empty-five").addClass("container mt-2 text-center");
                    $(".container-empty-five").append('<div class="image-left-two">');
                    $(".image-left-two").append('<img id="smallCar" src="img/smallcar.jpeg">');   
                    $(".container-empty-five").append('<div id="text-right-two">')
                    $("#text-right-two").append('<h3 id="header-text" style="margin:0">' + transport["Small Car"].name + '</h4>');
                    $("#text-right-two").append('<p id="p-1" style="margin:0">Price: $' + transport["Small Car"].Price + '/day</p>');
                    $("#text-right-two").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Small Car"].Fuel + '</p>');
                    $("#text-right-two").append('<button type="button" id="btn-hire">Hire</button>');
                    //SMALL CAR

                    //LARGE CAR
                    $(".container-empty-six").addClass("container mt-2 text-center");
                    $(".container-empty-six").append('<div class="image-left-three">');
                    $(".image-left-three").append('<img id="largeCar" src="img/largeCar.jpeg">');   
                    $(".container-empty-six").append('<div id="text-right-three">')
                    $("#text-right-three").append('<h3 id="header-text" style="margin:0">' + transport["Large Car"].name + '</h4>');
                    $("#text-right-three").append('<p id="p-1" style="margin:0">Price: $' + transport["Large Car"].Price + '/day</p>');
                    $("#text-right-three").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Large Car"].Fuel + '</p>');
                    $("#text-right-three").append('<button type="button" id="btn-hire">Hire</button>');
                    //LARGE CAR

                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else if (secondAnswer > 10) {
                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else {
                    var error = document.getElementById('answer-text');
                    error.innerHTML = "Oops, nothing was found.";
                    var errorTwo = document.getElementById('answer-text-two');
                    errorTwo.innerHTML = "Please, press the refresh button if you wish to search again.";
                }
            } else if (firstAnswer > 2 && firstAnswer < 6) {
                if (secondAnswer < 2) {
                    var error = document.getElementById('answer-text');
                    error.innerHTML = "Oops, nothing was found.";
                    var errorTwo = document.getElementById('answer-text-two');
                    errorTwo.innerHTML = "Please, press the refresh button if you wish to search again.";
                } else if (secondAnswer == 2) {
                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else if (secondAnswer > 2 && secondAnswer <= 10) {

                    //LARGE CAR
                    $(".container-empty-six").addClass("container mt-2 text-center");
                    $(".container-empty-six").append('<div class="image-left-three">');
                    $(".image-left-three").append('<img id="largeCar" src="img/largeCar.jpeg">');   
                    $(".container-empty-six").append('<div id="text-right-three">')
                    $("#text-right-three").append('<h3 id="header-text" style="margin:0">' + transport["Large Car"].name + '</h4>');
                    $("#text-right-three").append('<p id="p-1" style="margin:0">Price: $' + transport["Large Car"].Price + '/day</p>');
                    $("#text-right-three").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Large Car"].Fuel + '</p>');
                    $("#text-right-three").append('<button type="button" id="btn-hire">Hire</button>');
                    //LARGE CAR

                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else if (secondAnswer > 10) {
                    //MOTOR HOME
                    $(".container-empty-seven").addClass("container mt-2 text-center");
                    $(".container-empty-seven").append('<div class="image-left-four">');
                    $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                    $(".container-empty-seven").append('<div id="text-right-four">')
                    $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                    $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                    $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                    $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
                } else {
                    var error = document.getElementById('answer-text');
                    error.innerHTML = "Oops, nothing was found.";
                    var errorTwo = document.getElementById('answer-text-two');
                    errorTwo.innerHTML = "Please, press the refresh button if you wish to search again.";
                }
            } else if (firstAnswer > 5 && secondAnswer > 1) {
                //MOTOR HOME
                $(".container-empty-seven").addClass("container mt-2 text-center");
                $(".container-empty-seven").append('<div class="image-left-four">');
                $(".image-left-four").append('<img id="largeCar" src="img/motorhome.jpeg">');   
                $(".container-empty-seven").append('<div id="text-right-four">')
                $("#text-right-four").append('<h3 id="header-text" style="margin:0">' + transport["Motor Home"].name + '</h4>');
                $("#text-right-four").append('<p id="p-1" style="margin:0">Price: $' + transport["Motor Home"].Price + '/day</p>');
                $("#text-right-four").append('<p id="p-2" style="margin:0">Fuel: ' + transport["Motor Home"].Fuel + '</p>');
                $("#text-right-four").append('<button type="button" id="btn-hire">Hire</button>');
            } else {
            var error = document.getElementById('answer-text');
            error.innerHTML = "Oops, nothing was found.";
            var errorTwo = document.getElementById('answer-text-two');
            errorTwo.innerHTML = "Please, press the refresh button if you wish to search again.";
        }
    }); 
}

  });