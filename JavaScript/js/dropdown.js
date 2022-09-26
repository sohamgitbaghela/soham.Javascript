function check() {
    var firstValue = document.querySelector('#myfirst').value;
    var secondValue = document.querySelector('#mysecond').value;
    var thirdValue = document.querySelector('#mythird').value;
    var response = document.getElementById('response').innerHTML;

    if (firstValue !== secondValue && firstValue !== thirdValue && secondValue !== thirdValue) {
        alert("Your form is submiited");
    }
    else if (firstValue !== " " && secondValue == " " && thirdValue == " ") {
        alert("Your form is submiited ");
    }
    else if (firstValue == " " && secondValue == " " && thirdValue == " ") {
        alert("Please select city ")
    }
    else {
        alert("Please select diffent city in all filed")

    }
}




    // if((firstValue!=" " && secondValue==" " && thirdValue==" ") || (firstValue!=" " && secondValue!=" " && firstValue != secondValue) || (firstValue != secondValue && firstValue != thirdValue && secondValue != thirdValue) )
    // {
    //     alert(" Successfully Added ");
    // }
    // else if((firstValue!=" " && firstValue==secondValue && firstValue==secondValue && secondValue==thirdValue) || (firstValue==thirdValue) || (firstValue==secondValue) || (secondValue==thirdValue) )
    // {
    //     alert("Please Select Unique City ");
    // }
    // else if(firstValue==" " && secondValue==" " && thirdValue==" ")
    // {
    //     alert('Please Select Atleast One City ');
    // }
    // else
    // {
    //     alert('Please Select Atleast One City ');
    // }

//}
