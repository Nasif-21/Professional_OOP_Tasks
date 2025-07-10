export default class Patient
{
    #patientName;
    #patientDepartment;
    #appointments=[];
    #diagonosises=[];
    #prescribtions=[];
    
    constructor(patientName,patientDepartment)
    {
        this.#patientName=patientName;
        this.#patientDepartment=patientDepartment;

    }
    getPatientName()
    {
        return this.#patientName;
    }
    getPatientDepartment()
    {
        return this.#patientDepartment;
    }

    //Check upcomming appointment with doctor
    viewAppointment()
    {
        if(this.#appointments.length===0)
        {
            console.log(`${this.#patientName} has no appointment`);
            return;
        }
        console.log("-".repeat(30));
        console.log(`Appointmemt for patient ${this.getPatientName()}`);
        this.#appointments.forEach((date,index)=>{
 
            console.log("-".repeat(30));
            console.log(`${index+1} . ${date}`);
            console.log("");
            

        });
        console.log("-".repeat(30));

    }
    addAppointment(date)
    {
        this.#appointments.push(date);
    }
    addDiagonosis(diagonosis) {
        this.#diagonosises.push(diagonosis);
    }
    addPrescribtion(prescribtion)
    {
    this.#prescribtions.push(prescribtion);

    }
    
    viewPrescribtion()
    {
        if(this.#prescribtions.length===0)
        {
            console.log("No prescribtion history found for patient");
            return;
        }
         console.log("-".repeat(30));
        console.log(`Prescribtion for patient ${this.getPatientName()}`);
        this.#prescribtions.forEach((d,index)=>{
 
            console.log(`${index+1} . ${d}`);
            console.log("");
            

        });
        console.log("-".repeat(30));

    }
    viewDiagonosis()
    {
    if(this.#diagonosises.length===0)
    {
        console.log("Patient has no diagonosis history to show");
        return;
        
    }
     console.log("-".repeat(30));
        console.log(`Diagonosis for patient ${this.getPatientName()}`);
        this.#diagonosises.forEach((d,index)=>{
 
            console.log(`${index+1} . ${d}`);
            console.log("");
            

        });
        console.log("-".repeat(30));

    }

}