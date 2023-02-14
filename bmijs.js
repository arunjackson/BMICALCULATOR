




function calculate()
{
    var w=parseFloat(document.getElementById("w").value)
    w=w*2.205;
    var h=parseFloat(document.getElementById("h").value)
    h=h/2.54;
    var res=(w*703)/(h*h);

    document.getElementById("ans").innerHTML = "The BMI is: " + res;
 
}

