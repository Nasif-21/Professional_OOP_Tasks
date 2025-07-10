import Doctor from "./Doctor.js";
import Patient from "./Patient.js";

const patients= [
new Patient("Alice","Medicine"),
new Patient("Bob","Medicine"),
new Patient("Joyce","Medicine"),
new Patient("Jhon","Medicine"),
]

const doc1=new Doctor("Dr Emdad","Medicine");

for (const patient of patients)
{
try {
 doc1.addPatient(patient);
 console.log("-".repeat(10));
 console.log(`Patient added`);

    
} catch (error) {
    console.log("Error Occur ");
    
}

}
doc1.showPatient();

try {
    doc1.appointment(patients[0],"2025-01-13");
    doc1.appointment(patients[1],"2025-07-12");
} catch (error) {
    console.log("Error Message :"+error.message);
}

//Diagonosis
try {
doc1.diagonosis(patients[1],"Fever");
doc1.diagonosis(patients[1],"Headach");
doc1.diagonosis(patients[1],"Cough");
doc1.diagonosis(patients[1],"Low Vision");
    
} catch (error) {
    console.log("Error Message :"+error.message);    
}
patients[1].viewDiagonosis();


//Prescribtion
try {
doc1.prescribtion(patients[1],"Rest");
doc1.prescribtion(patients[1],"Napa");
doc1.prescribtion(patients[1],"Eat healthy");
doc1.prescribtion(patients[1],"Be happy");
    
} catch (error) {
    console.log("Error Message :"+error.message);    
}


patients[1].viewPrescribtion();


// doc1.showSchedule();
// patients[0].viewAppointment();


/*const patients2= [
new Patient("Alice","Medicine"),
new Patient("Bob","Medicine"),
new Patient("Joyce","Medicine"),
new Patient("Jhon","Medicine"),
]

const doc2=new Doctor("Dr Nasif","Neurology");

for (const patient of patients2)
{
try {
 doc2.addPatient(patient);
 console.log("-".repeat(10));
 console.log(`Patient added`);

    
} catch (error) {
    console.log("Error Occur ");
    
}
  doc2.showPatient();
*/


