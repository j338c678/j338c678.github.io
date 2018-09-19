function myFunction()
{
    document.getElementById("demo").innerHTML="Hello JavaScript!"
    document.getElementById("jQuery").style.display ="block"
    alert("Goodbye!")
}

$(document).ready(function() {
    document.getElementById("jQuery").style.display="none"

});