//select the button element


/* Add event listener for the 'click' event
document.getElementById('podcastB').addEventListener('click', function() {
    window.location.href = 'podcast.html';
})

document.getElementById('favB').addEventListener('click', function() {
    window.location.href = 'fav.html';
})

document.getElementById('studyB').addEventListener('click', function() {
    window.location.href = 'study.html';
})

document.getElementById('supriseB').addEventListener('click', function() {
    window.location.href = 'suprise.html';
})


//Issues with home button
document.getElementById('home').addEventListener('click', function() {
    window.location.href = 'index.html';
})

*/

function showPanel1(){
    document.getElementById("panel-1").style.display = "block";
}

function showPanel2(){
    document.getElementById("panel-2").style.display = "block";
}

function showPanel3(){
    document.getElementById("panel-3").style.display = "block";
}

function showPanel4(){
    document.getElementById("panel-4").style.display = "block";
}

function hide(){
    panels=document.getElementsByClassName("panel");  // Find the elements
        for(var i = 0; i < panels.length; i++){
            panels[i].style.display = "none";    // Change the content
    }
}