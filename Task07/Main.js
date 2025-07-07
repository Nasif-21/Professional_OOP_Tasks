import School from "./task07.js";

const scl=new School();
scl.addStudent("Asif","12478","A","asif@student.aiub.edu");
scl.addStudent("Dipro","42323","B","dipro@student.aiub.edu");
scl.addStudent("Mysara","42261","C","mysara@student.aiub.edu");
scl.addStudent("Faiza","42798","C","faiza@student.aiub.edu");
scl.addStudent("Sanda","14789","B","sanda@student.aiub.edu");
scl.showStudentList();
scl.addTeacher("Nasif","2103","nasif@aiub.edu","Dept of CSE");
scl.addTeacher("Karima","3010","Karima@aiub.edu","Dept of CSE");
scl.addTeacher("KU Sarker","6344","ku@aiub.edu","Dept of ME");
//scl.showTeacherList();
scl.giveAssignment("2103","A","CSE-11","15-07-2025","Assignment01.pdf");
scl.giveAssignment("3010","C","CSE-21","01-08-2025","Assignment02.pdf");
scl.submitAssignment("12478","CSE-11","Answer.pdf");
//scl.showSubmission();
//scl.submitAssignment("12478","CSE-11","Answer.pdf");
scl.submitAssignment("42798","CSE-21","Answer.pdf");
scl.gradeSubmission("2103","12478","CSE-11",90);
scl.gradeSubmission("3010","42798","CSE-21",85);
scl.showGrading();

