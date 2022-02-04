function calculateCalories() {

    var age, weight, height, sex, activity, bmr;
    age = Number(document.getElementById("age").value);
    weight = Number(document.getElementById('weight').value);
    height = Number(document.getElementById('height').value);
    sex = document.getElementById('sex').value;
    activity = document.getElementById('activity').value;

    if(sex == "Male"){
        bmr = (10*weight) + (6.25*height) - (5*age) + 5;
        if (activity == "Sedentary"){
            document.getElementById("answer").value = 1.2*bmr;
        }
        else if (activity == "Lightactive"){
            document.getElementById("answer").value = 1.375*bmr;
        }
        else if(activity == "modactive"){
            document.getElementById("answer").value = 1.550*bmr;
        }
        else if(activity == "veryactive"){
            document.getElementById("answer").value = 1.725*bmr;
        }
        else if(activity == "extraactive"){
            document.getElementById("answer").value = 1.9*bmr;
        }
    }

    else if (sex == "Female"){
        bmr = (10*weight) + (6.25*height) - (5*age) - 161;
        if (activity == "Sedentary"){
            document.getElementById("answer").value = 1.2*bmr;
        }
        else if (activity == "Lightactive"){
            document.getElementById("answer").value = 1.375*bmr;
        }
        else if(activity == "modactive"){
            document.getElementById("answer").value = 1.550*bmr;
        }
        else if(activity == "veryactive"){
            document.getElementById("answer").value = 1.725*bmr;
        }
        else if(activity == "extraactive"){
            document.getElementById("answer").value = 1.9*bmr;
        }
        
    }

}

