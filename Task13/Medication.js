export default class Medication {
    #medicineName;
    #patientList = new Set();

    constructor(medicineName) {
        if (!medicineName || typeof medicineName !== 'string') {
            throw new Error("Medicine name must be a non-empty string.");
        }
        this.#medicineName = medicineName;
    }

    getMedicineName() {
        return this.#medicineName;
    }

    addPatient(patient) {
        this.#patientList.add(patient);
    }

    getPatients() {
        return Array.from(this.#patientList);
    }

    static getRestrictedMedications() {
        return ["CNS Depressants", "Statins", "Anticoagulants"];
    }

    getPatientsIfRestricted() {
        if (Medication.getRestrictedMedications().includes(this.#medicineName)) {
            return Array.from(this.#patientList).map(p => p.getPatientName());
        }
        return [];
    }
}
