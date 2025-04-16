var links = ["#chemistry", "#Amazon", "#Mozilla", "#TA", "#Duke", "#Fashapp", "#jeopardy", "#sales", "#hand", "#unc", "#degree", "#ncssm", "#sports"]
var initialPadding = 60;

var notes = {
    "default": "<div id='tags-wrapper'><div id='tags-title'>TAGS</div><div id='tags'><ul><li>Java</li><li>JavaScript</li><li>Python</li><li>Go</li><li>C/C++</li><li>TypeScript</li><li>Full Stack Development</li><li>Distributed Systems</li><li>Machine Learning</li><li>ReactJs</li><li>NodeJs</li><li>Flask</li><li>Django</li><li>REST</li></ul></div></div><div><span id='track-info-title'>TRACK INFO</span><table><tbody><tr><td class='table-category'>Written By</td><td>Daniel Koceja</td></tr><tr><td class='table-category'>Inspired By</td><td>Genius</td></tr><tr><td class='table-category'>Label</td><td>Research Assistant at Stanford AI Lab</td></tr><tr><td class='table-category'>Recorded At</td><td>University of North Carolina at Chapel Hill</td></tr><tr><td class='table-category'>Release Date</td><td>May 2022</td></tr><tr><td class='table-category'>Samples</td><td>Genius</td></tr></tbody></table></div>",
    
    "chemistry": "I conducted a lot of chemistry research back in high school and was actually a chemistry major for my first year in college.",
    "Amazon": "I was an Amazon SDE Intern from June - September 2020.",
    "Mozilla": "The Mozilla Builders Lab was a program for startups to get mentorship from experienced entrepreneurs and peer groups of professionals all across the world. I participated in this program for both the Spring 2020 session.",
    "TA": "In fall 2019, I was an undergraduate TA for Comp 401: Foundations of Programming. In spring 2020, I switched to Comp 455: Models of Language and Computation.",
    "Duke": "In 2017, I conducted research as a part of the Beratan Lab at Duke University. My research was on the p53 DNA binding domain, so it included chemistry, physics, biology, and computer science.",
    "Fashapp": "Fashapp was a project that my team started during the Mozilla Builders Lab. It allows you to pick which clothing you like and saves it to a database. You can check what images you liked and get a better sense of your personal style. Check it out <a href='https://fashion-tool.herokuapp.com/'>here</a>",
    "jeopardy": "This is a web app that pulls from an API of random Jeopardy questions and allows the user to guess and check their answers. It also keeps track of the amount of points you received. Try it out <a href='https://koceja.github.io/jeopardy/'>here</a>",
    "sales": "As a part of the Carolina Data Challenge, my team created visuals that analyzed a data set and provided insight on trends. My specific contribution was creating a machine learning algorithm that predicted sales in the future dates with changes in variables. We won 2nd place in our category.",
    "hand": "This program allows you to draw with your webcam! With machine learning, this program will detect your hand and will allow you to draw shapes just with the movement of your hand. This project was completed in 2019.",
    "unc": "I am persuing a degree from UNC-Chapel Hill and have an anticipated graduation date of May 2022. I have attended UNC since fall 2018. Go Heels!",
    "degree": "Here are a list of relevelent classes I've taken:<br><ul><li>Distributed Systems</li><li>Programming Intelligent Physical Systems</li><li>Algorithms and Analysis</li><li>Data Structures</li><li>Models of Language and Computation</li><li>Computer Organization</li><li>Introduction to Scientific Programming</li><li>Foundations of Programming</li><li>Calculus of Functions of Several Variables</li><li>Linear Algebra</li><li>Differential Equations</li><li>Advanced Calculus</li></ul>",
    "ncssm": "I attended NCSSM, a public residential high school, from 2016 to 2018 when I graduated. The school has a STEM focus and had resources for students to go beyond a typical high school education, such as research opportunities.",
    "sports": "I played basketball and baseball at my middle school and high school. I still play some basketball here and there at UNC and try to keep myself active.",
    "albums": "These are some of my favorite albums.<br><ol><li>good kid, m.A.A.d. city</li><li>Madvillainy</li><li>Flower Boy</li><li>To Pimp a Butterfly</li>"
}

var clicked = false;

var clickEvent = function() {
    clicked = true;
    const yNotes = $("#notes").offset().top
        const yWindow = $(window).scrollTop();
        const yThis = $(this).offset().top;

        const newHtml = "<h3>'"+ $(this).html() + "'</h3><p>" + notes[$(this).attr('id')] + "</p>"
            var yNew = yThis - yNotes - 75;
            yNew = yNew + "px";
            $("#notes").css("padding-top", yNew);
            $("#notes").html(newHtml)
            $("#notes").hide().fadeIn()
}


$(document).ready(function () {
    const defaultNote = "<p>" + notes["default"] + "</p>"
    $("#notes").html(defaultNote)

    $("body").on("click", function(evt){   
        if (!clicked) return; 
        if(evt.target.class == "lyric-tag")
           return;
           if($(evt.target).closest('.lyric-tag').length)
          return;
          if ($("#notes").html() == defaultNote) {
              return;
          }
          clicked = false;
          $("#notes").css("padding-top", "0px");         
           $("#notes").html(defaultNote)
           $("#notes").hide().fadeIn()
    });


    $("#chemistry").on("click", clickEvent)
    $("#Amazon").on("click", clickEvent)
    $("#Mozilla").on("click", clickEvent)
    $("#TA").on("click", clickEvent)
    $("#Duke").on("click", clickEvent)
    $("#Fashapp").on("click", clickEvent)
    $("#jeopardy").on("click", clickEvent)
    $("#sales").on("click", clickEvent)
    $("#hand").on("click", clickEvent)
    $("#unc").on("click", clickEvent)
    $("#degree").on("click", clickEvent)
    $("#ncssm").on("click", clickEvent)
    $("#sports").on("click", clickEvent)

    $("#albums").on("click", clickEvent)
})