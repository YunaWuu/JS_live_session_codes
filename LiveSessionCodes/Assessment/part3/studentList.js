class StudentList{
    constructor(rootId, students){
        this.rootId = rootId;
        this.studentList = students;
        this.refresh();
    }
    
    // generate one row
    studentItemString(studentId, fname, lname, qualification){
        return `<div class="row">${studentId} - ${fname} ${lname} - ${qualification}</div>`;
    }

    // generate all rows 
    studentListString(students){
        let html = ``;
        for(let i = 0; i < students.length; i++) {
            let student = students[i];
            html += this.studentItemString(student.studentId, student.fname, student.lname, student.qualification);
        }
        return html;
    }

    // refresh the whole list in HTML
    refresh(){
        let elementString = this.studentListString(this.studentList);
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;
    }

    // check if the input student ID is existing or not
    isStudentIdExisted(studentId) {
        let found = false;
        for(let i = 0; i < this.studentList.length; i ++) {
            if(studentId == this.studentList[i].studentId) {           
                found = true;
                break;
            }
        }
        return found;
    }

    // add one to the end of the list
    add(studentId, fname, lname, qualification) {

        if(studentId.toLowerCase().startsWith("s") != true) {
            alert("You must enter a valid student ID!")
            document.getElementById("studentID").focus();
        }
        else if(fname == "") {
            alert("You must enter a first name!")
            document.getElementById("fname").focus();
        }
        else if(lname == "") {
            alert("You must enter a last name!")
            document.getElementById("lname").focus();
        }
        else if(qualification == "") {
            alert("You must enter a qualification!")
            document.getElementById("qualification").focus();
        }
        else {
            if (this.isStudentIdExisted(studentId) == false) {
                this.studentList.push(
                    {studentId: studentId, fname: fname, lname: lname, qualification: qualification}
                );
            }
            else {
                alert("This student ID is already existing!")
                document.getElementById("studentID").focus();
            }        
        }
    }

    // search the student list by student ID, return the student object found and "0 result" otherwise
    search(studentId){
        let found = false;
        studentId = studentId.trim();

        if (studentId.startsWith("S" || "s") != true) {
            alert("You must enter a valid student ID!");
            document.getElementByName("search-string").focus();
        }
        else {
            for (let i = 0; i < this.studentList.length; i++) {
                if (studentId == this.studentList[i].studentId) {
                    let student = this.studentList[i];
                    found = true;
                    document.getElementById("ans").innerHTML = JSON.stringify(student);
                    break;
                }            
            }
        }
        if (found == false)
            document.getElementById("ans").innerHTML = "0 result";    
    }
}
