//STATIC VARIABLES

var HONORS_BOOST = 0.5;
var AP_BOOST = 1.0;

var classCount = readInt("How many classes do you take? ");

const gradeToGPA = {
    "a+": 4.3,
    "a": 4.0,
    "a-": 3.7,
    "b+": 3.3,
    "b": 3.0,
    "b-": 2.7,
    "c+": 2.3,
    "c": 2.0,
    "c-": 1.7,
    "d+": 1.3,
    "d": 1.0,
    "f": 0,
    "A+": 4.3,
    "A": 4.0,
    "A-": 3.7,
    "B+": 3.3,
    "B": 3.0,
    "B-": 2.7,
    "C+": 2.3,
    "C": 2.0,
    "C-": 1.7,
    "D+": 1.3,
    "D": 1.0,
    "F": 0,
}
var credits = 0;
var total = 0;
printArray(totalGPA(classCount));

//SINGLE CLASS
function classGPA(name, grade, level, num, cred){
    var current = 0;
    current = current + grade;
    if(level == "honors"){
        current = current + HONORS_BOOST;
    }else if(level == "Honors"){
        current = current + HONORS_BOOST;
    }else if(level == "AP"){
        current = current + AP_BOOST;
    }else if(level == "ap"){
        current = current + AP_BOOST;
    }
    var final = current * cred;
    println(num + ". " + name + ": " + final);
    return final;
}

//classGPA("math", a, "regular", 1);
function totalGPA(numberOfClasses){
    var listofGPA = [];
    for (var i = 0; i < classCount; i++){
        var className = readLine("What is the name of your class? ");
        if(className == "end"){
            break;
        }
        var classGrade = readLine("What is your letter grade in the class? ");
        if(classGrade == "end"){
            break;
        }
        var point = gradeToGPA[classGrade];
        var classLevel = readLine("What level is the class? (AP/honors/regular) ");
        if(classLevel == "end"){
            break;
        }
        var classCredits = readInt("How many credits is this class? ");
        if(classCredits == "end"){
            break;
        }
        total += (classGPA(className, point, classLevel, i+1, classCredits))
        credits += classCredits
        //listofGPA.push[classGPA(className, point, classLevel, i+1, classCredits)];
    }
    println(" ");
    println("Total grade points: " + total);
    println("Total credits: " + credits);
    println("Average GPA: " + total/credits);
    return listofGPA;

}

function averageGPA(points, classes){
    return credits/classCount;
}


function printArray(arr){
   for(var i = 0; i < arr.length; i++){
       println(arr[i]);
   }
   //println('');
}