import Patient from "./Patient.js";
import Medication from "./Medication.js";

try {
    const patient1 = new Patient("Nasif");
    const patient2 = new Patient("Sara");

    const med1 = new Medication("Muscle Relaxants");
    const med2 = new Medication("CNS Depressants");
    const med3 = new Medication("Statins");
    const med4 = new Medication("Vitamin C"); 

    console.log("Patient name: " + patient1.getPatientName());
    console.log("Medication name: " + med1.getMedicineName());

    
    patient1.giveMedicine(med1);
    console.log(`Prescribed ${med1.getMedicineName()} to ${patient1.getPatientName()}`);

    // Try to prescribe conflicting medication
    try {
        patient1.giveMedicine(med2);
    } catch (error) {
        console.log("Conflict warning: " + error.message);
    }

    // Prescribe safe medication
    patient1.giveMedicine(med4);
    console.log(`Prescribed ${med4.getMedicineName()} to ${patient1.getPatientName()}`);

    // Prescribe different medication to patient2
    patient2.giveMedicine(med3);
    console.log(`Prescribed ${med3.getMedicineName()} to ${patient2.getPatientName()}`);

    //  patient1's medications
    console.log("Medications for " + patient1.getPatientName() + ":");
    patient1.getMedications().forEach(med => {
        console.log("- " + med.getMedicineName());
    });

    //  restricted meds patient2 has
    console.log("Restricted medications for " + patient2.getPatientName() + ":");
    console.log(patient2.showRestricted().join(", ") || "None");

    //  patients prescribed Statins
    console.log("Patients who got Statins:");
    console.log(med3.getPatients().map(p => p.getPatientName()).join(", ") || "None");

} catch (error) {
    console.log("Error Message: " + error.message);
}
