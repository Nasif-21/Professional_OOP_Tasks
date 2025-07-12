import Medication from "./Medication.js";

export default class Patient {
    #patientName;
    #medicationList = new Set();
    #conflictPairs = [
        ["Antibiotics", "Statins"],
        ["Muscle Relaxants", "CNS Depressants"],
        ["Anti-Inflammatories", "Anticoagulants"]
    ];

    constructor(patientName) {
        if (!patientName || typeof patientName !== 'string') {
            throw new Error("Patient name must be a non-empty string.");
        }
        this.#patientName = patientName;
    }

    getPatientName() {
        return this.#patientName;
    }

    getMedications() {
        return Array.from(this.#medicationList);
    }

    giveMedicine(medicine) {
        if (!medicine) {
            throw new Error("Medicine cannot be empty.");
        }
        if (!(medicine instanceof Medication)) {
            throw new Error("Invalid Medication object.");
        }

        if (this.#canPrescribe(medicine)) {
            this.#medicationList.add(medicine);
            medicine.addPatient(this);
        } else {
            throw new Error(`Cannot prescribe ${medicine.getMedicineName()} to ${this.getPatientName()} due to conflict medication.`);
        }
    }

    #canPrescribe(newMed) {
        const newMedName = newMed.getMedicineName();
        for (let exist of this.#medicationList) {
            if (this.#isConflict(exist.getMedicineName(), newMedName)) {
                return false;
            }
        }
        return true;
    }

    #isConflict(name1, name2) {
        return this.#conflictPairs.some(([a, b]) =>
            (a === name1 && b === name2) || (a === name2 && b === name1)
        );
    }

    showRestricted() {
        const restrictedList = Medication.getRestrictedMedications();
        return Array.from(this.#medicationList)
            .map(med => med.getMedicineName())
            .filter(name => restrictedList.includes(name));
    }
}
