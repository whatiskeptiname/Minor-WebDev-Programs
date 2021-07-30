var data1 = document.getElementById("data1");
var data2 = document.getElementById("data2");
var result = document.getElementById("result");
var thisForm = document.getElementById("thisForm");

thisForm.addEventListener('submit', function(event)
{

    if(!data1.value || !data2.value)
        {
            alert("Please Enter Vlaues in the field.");
        }
    else
        {
            var x = parseFloat(data1.value);
            var y = parseFloat(data2.value);

            var xResult = x/y*100;
            result.innerText = "Result: "+ xResult + "%";
            event.preventDefault();
        }
}
);

 

