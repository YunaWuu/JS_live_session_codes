"use strict";

// the student class
class Student {
    constructor(studentID, firstName, lastName, qualification) {
        this.studentID = studentID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.qualification = qualification;
    }
}

let studentList = [
    new Student ("S003", "Jane", "Maclne", "Cert4"),
    new Student ("S002", "Ray", "Lee", "Dip"),
    new Student ("S009", "Suli", "Tang", "Cert4"),
    new Student ("S001", "Walker", "Maline", "Cert4"),
    new Student ("S004", "Fowler", "Owen", "Dip"),
    new Student ("S010", "Chris", "Xie", "Cert4"),
    new Student ("S007", "Carter", "Hemil", "Cert4"),
    new Student ("S005", "Russ", "White", "Dip"),
    new Student ("S008", "Hazel", "Husband", "Dip"),
    new Student ("S006", "West", "wind", "Cert4"),
];

// display the initial student list when webpage loads
function displayStudentList() {
    let str = "";
            for(let i = 0; i < studentList.length; i++) 
                str += i + ": " + JSON.stringify(studentList[i]) + "<br>";
            console.log (str)
            document.getElementById("students").innerHTML = str;        
}

//  sort array by Student ID in ascending order
function sortByStudentID() {
    studentList.sort(function(a, b) {
        return a.studentID.localeCompare(b.studentID);
    });
}

// do sequential search in the student list by student ID, return the student object found and "null" otherwise
function searchStudent() {
    // get the target value, and convert to upper case
    let searchID = document.getElementById("txtSearch").value.toUpperCase();
    // flag
    let found = false;
    // remove any white space before and after
    searchID = searchID.trim();

    if (searchID.startsWith("S" || "s") != true) {
        alert("You must enter a valid student ID!");
        // put cursor into text box
        document.getElementById("txtSearch").focus();
    }
    else {
        for(let i =0; i < studentList.length; i++) {
            if(searchID == studentList[i].studentID) {
                found = true;
                document.getElementById("ans").innerHTML = JSON.stringify(studentList[i]);
                break;
            }
        }
    }
    if (found == false)
    document.getElementById("ans").innerHTML = "null";
}


