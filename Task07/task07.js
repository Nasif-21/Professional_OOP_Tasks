export default class School{

    #studentName;
    #studentId;
    #studentSection;
    #studentEmail;
    
    #givenAssignment;
    #dueDate;
    #resources;
    #assignmentId;
    #teacherId;
    #teacherName;
    #teacherDepartment;
    #teacherEmail;

    #studentList=[];
    #teacherList=[];
    #giveAssignment=[];
    #submittedAssignment=[];
    #gradedAssignmnet=[];

   addStudent(studentName, studentId, studentSection, studentEmail) {
    this.#studentName=studentName;
    this.#studentId=studentId;
    this.#studentSection=studentSection;
    this.#studentEmail=studentEmail;


  try {
    if (!this.#studentName || !this.#studentId || !this.#studentSection || !this.#studentEmail) {
      throw new Error("Fields cannot be empty");
    }
    if (
      typeof this.#studentName !== "string" ||
      typeof this.#studentId !== "string" ||
      typeof this.#studentSection !== "string" ||
      typeof this.#studentEmail !== "string"
    ) {
      throw new Error("Name, Id, Email, and Section must be strings");
    }

    this.#studentList.push({
      studentName:this.#studentName,
      studentId:this.#studentId,
      studentSection:this.#studentSection,
      studentEmail:this.#studentEmail
    });
    console.log(`Student ${this.#studentName} added.`);
  } catch (err) {
    console.log("Error Occurred: " + err.message);
  }
}

   showStudentList() {
  try {
    if (this.#studentList.length === 0) {
      console.log("No students in the list.");
      return;
    }

    console.log("-- List of Students --");
    this.#studentList.forEach((student, index) => {
      console.log("-------------");
      console.log(index + 1);
      console.log(`Name    : ${student.studentName}`);
      console.log(`Id      : ${student.studentId}`);
      console.log(`Section : ${student.studentSection}`);
      console.log(`Email   : ${student.studentEmail}`);
    });
  } catch (err) {
    console.log("Error Occurred: " + err.message);
  }
  }
  addTeacher(teacherName, teacherId, teacherEmail, teacherDepartment) {
    this.#teacherName = teacherName;
    this.#teacherId = teacherId;
    this.#teacherEmail = teacherEmail;
    this.#teacherDepartment = teacherDepartment;

    try {
      if (
        !this.#teacherName ||
        !this.#teacherId ||
        !this.#teacherEmail ||
        !this.#teacherDepartment
      ) {
        throw new Error("Teacher fields cannot be empty");
      }

      if (
        typeof this.#teacherName !== "string" ||
        typeof this.#teacherId !== "string" ||
        typeof this.#teacherEmail !== "string" ||
        typeof this.#teacherDepartment !== "string"
      ) {
        throw new Error("Teacher fields must be strings");
      }

      this.#teacherList.push({
        teacherName: this.#teacherName,
        teacherId: this.#teacherId,
        teacherEmail: this.#teacherEmail,
        teacherDepartment: this.#teacherDepartment
      });

      console.log(`Teacher ${this.#teacherName} added.`);
    } catch (err) {
      console.log("Error Occurred: " + err.message);
    }
  }

  // Show Teacher List
  showTeacherList() {
    try {
      if (this.#teacherList.length === 0) {
        console.log("No teachers in the list.");
        return;
      }

      console.log("-- List of Teachers --");
      this.#teacherList.forEach((teacher, index) => {
        console.log("-------------");
        console.log(index + 1);
        console.log(`Name       : ${teacher.teacherName}`);
        console.log(`ID         : ${teacher.teacherId}`);
        console.log(`Email      : ${teacher.teacherEmail}`);
        console.log(`Department : ${teacher.teacherDepartment}`);
      });
    } catch (err) {
      console.log("Error Occurred: " + err.message);
    }
  }

   giveAssignment(teacherId,section,assignmentId,dueDate,resources)
   {
    console.log("----Given assignemnt------")
    try {
      const findTeacher=this.#teacherList.some(t=>t.teacherId===teacherId);
      if(!findTeacher)
        throw new Error("Teacher not found");
      if(!section||!assignmentId||!dueDate||!resources)
      {
        throw new Error("All assignment field must be given");
        
      }

      
      this.#giveAssignment.push({teacherId,assignmentId,section,dueDate,resources});
      console.log(`Assignment no ${assignmentId} given to section ${section} by teacher ${teacherId}`);
      console.log("")
        

    } catch (error) {
      console.log("Error Message :"+error.message);
      
    }

   

   }
   submitAssignment(studentId,assignmentId,content)
   {
    try {
      const student=this.#studentList.find(std=>std.studentId===studentId);
      if(!student)
        throw new Error("Student Id not found ");
      const assignment=this.#giveAssignment.find(asg=>asg.assignmentId===assignmentId && asg.section===student.studentSection);
      if(!assignment)
      throw new Error("Assignment is not given to your section");

      const alreadySubmit=this.#submittedAssignment.some(a=>a.assignmentId===assignmentId && a.studentId===studentId);
      if(alreadySubmit)
        throw new Error("Assignment Already submitted");
        

      console.log("---Submission message---")
      this.#submittedAssignment.push({studentId,assignmentId,content});
      console.log(`Assignment no ${assignmentId} has been submitted`);
      console.log("");  
      
    } catch (error) {
      console.log("Error occuer :"+error.message);
    }
    
    

   }

    showSubmission()
    {
      try {
        if (this.#submittedAssignment.length === 0) {
        console.log("No submissions yet.");
        return;
      }
      this.#gradedAssignmnet.forEach((entry, index) => {
      console.log("-------------");
      console.log(index + 1);
      console.log(`Assignment ID : ${entry.assignmentId}`);
      console.log(`Student ID    : ${entry.studentId}`);
      console.log(`Teacher ID    : ${entry.teacherId}`);
      console.log(`Grade         : ${entry.grade}`);
    });
      } catch (error) {
        console.log("Error occur :"+error.message);
        
      }


    }

    gradeSubmission(teacherId,studentId,assignmentId,grade)
    {
    
      try {

        if(typeof grade!="number")
        {
         throw new Error("Grade must be a number");
        }
         
          
        
        if(grade<0 || grade>100){throw new Error("Invalid Marks");}
          

        const validTeacher=this.#teacherList.find(valTe=>valTe.teacherId===teacherId);
        if(!validTeacher)
          {throw new Error("Invalid teacher");}
        const validStudent=this.#studentList.find(valStu=>valStu.studentId===studentId);
        if(!validStudent)
          {throw new Error("Invalid Student");}
        const validAssignment=this.#giveAssignment.find(valAsg=>valAsg.assignmentId==assignmentId);
        if(!validAssignment)
        {throw new Error("Invalid Assignment");}
      const grading=this.#gradedAssignmnet.some(grd=>grd.assignmentId===assignmentId && grd.studentId===studentId);
      if(grading)
       {throw new Error("Assignment already graded for this student");} 

      this.#gradedAssignmnet.push({teacherId,studentId,assignmentId,grade})
      console.log("Assignment graded");     
        
      } catch (error) {
        console.log("Error Message :"+error.message);
        
      }
    }
    showGrading()
    {
      try {
        if(this.#gradedAssignmnet.length===0){throw new Error("No assignment has been graded");
          
        }
        console.log("-- Graded Assignments --");
      this.#gradedAssignmnet.forEach((a, i) => {
        console.log("-------------");
        console.log(`No         : ${i + 1}`);
        console.log(`Student ID : ${a.studentId}`);
        console.log(`Assignment : ${a.assignmentId}`);
        console.log(`Grade    : ${a.grade}`);
      });
      } catch (error) {
        console.log("Error Occur "+error.message);
        
      }

    }




}


