let initStudents = [
    {studentId: "S001", fname: "Walker", lname: "Maline", qualification: "Cert4"},
    {studentId: "S002", fname: "Ray", lname: "Lee", qualification: "Dip"},
    {studentId: "S003", fname: "Jane", lname: "Maclne", qualification: "Cert4"},
    {studentId: "S004", fname: "Fowler", lname: "Owen", qualification: "Dip"},
    {studentId: "S005", fname: "Russ", lname: "White", qualification: "Dip"},
    {studentId: "S006", fname: "West", lname: "wind", qualification: "Cert4"},
    {studentId: "S007", fname: "Carter", lname: "Hemil", qualification: "Cert4"},
    {studentId: "S008", fname: "Hazel", lname: "Husband", qualification: "Dip"},
    {studentId: "S009", fname: "Suli", lname: "Tang", qualification: "Cert4"},
    {studentId: "S010", fname: "Chris", lname: "Xie", qualification: "Cert4"}
];
var studentList = new StudentList("list", initStudents);

function addClick(){
    let formElements = document.getElementById("form-add").elements;
    let studentId = formElements["studentID"].value.trim().toUpperCase();
    let fname= formElements["firstName"].value.trim();
    let lname = formElements["lastName"].value.trim();
    let qualification = formElements["qualification"].value.trim();
    qualification = qualification.charAt(0).toUpperCase() + qualification.slice(1);
    studentList.add(studentId, fname, lname, qualification);
}

function searchClick(){
    let formElements = document.getElementById("form-list-control").elements;
    let text = formElements["search-string"].value.toUpperCase();
    studentList.search(text);
}

function refresh() {
    studentList.refresh();
}