function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);






    //p = document.getElementById("principal").value;
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark>";

}

function updateRate()
{
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
}

function positiveValue()
{
    var principal = document.getElementById("principal").value;
    if (parseInt(principal) <= 0) {
        alert("Enter positive number");
        document.getElementById("principal").focus();
    }
}
