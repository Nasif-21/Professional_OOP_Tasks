import Patient from "./Patient.js";

export default class Doctor{

    #doctorName;
    #department;
    #patientList=[];
    #maxPatientNumber;
    #appointments = [];
    #docDiagonosis=[];
    #docPrescribtion=[];

    

    constructor(doctorName,department)
    {
        try {
            if(!doctorName || !department)
            {
                throw new Error("Fields cannot be empty");
            }
            if(typeof doctorName !=='string'){throw new Error("Doctor name must be string");}
            if(typeof department!==`string`){throw new Error("Department must be string");}
            
        } 
        catch (error) {
            console.log("Error Message :"+error.message);
            
        }
        this.#doctorName=doctorName;
        this.#department=department;
        this.#maxPatientNumber=20;

    }

    addPatient(patientObj)
    {
        
        if(!(patientObj instanceof Patient))
        {
            throw new Error("Patient is not object of doctor");
            
        }
        if(this.#patientList.length>=this.#maxPatientNumber)
        {
            throw new Error("Maximum Patient limit reach");    

        }

        this.#patientList[this.#patientList.length]=patientObj;
            
        
       

    }
    showPatient()
    {
        if(this.#patientList.length===0)
        {
            console.log(`No patient found for ${this.#doctorName} .`);
            return;
        }
        console.log("=".repeat(30));
        console.log(`Doctor Name: ${this.#doctorName}`);
        console.log(`Department: ${this.#department}`);
        console.log(`Total Patient : ${this.#patientList.length}`);
        console.log("=".repeat(30));

    this.#patientList.forEach((patient, index) => {
        console.log(`Patient ${index + 1}`);
        console.log(`Name        : ${patient.getPatientName()}`);
        console.log(`Department  : ${patient.getPatientDepartment()}`);
        console.log("-".repeat(40));


    });
}


    //Check list of upcomming appointment
    appointment(patientObj,appointmentDate) //patientObj,appointmentDate
    {
        if(!(patientObj instanceof Patient))
        {
            throw new Error("Invalid Patient");
        }

        const existed=this.#patientList.includes(patientObj);
        if(!existed)
        {
            throw new Error("This patient doesn't belong to this doctor");
            
        }
        this.#appointments.push({
            patient: patientObj,
            date: appointmentDate
        });
        patientObj.addAppointment(appointmentDate);
        console.log("-".repeat(30));
        console.log(`Appointment is set for ${patientObj.getPatientName()} on ${appointmentDate}`);
        console.log("-".repeat(30));


    }

    showSchedule()
    {
        if(this.#appointments.length===0)
        {
            console.log(`No Appointment given`)
            return;
        }
        console.log("/".repeat(30));
        console.log("List of appointment")
        this.#appointments.forEach((appointment,index)=>
        {
            console.log("-".repeat(30));
            console.log(index+1);
            console.log(`Patient Name     : ${appointment.patient.getPatientName()}`);
            console.log(`Appointment Date : ${appointment.date}`);

        });



    }

    //List of Patient wise diagonosis
    diagonosis(patientObj,diagonosis)  //patientObj,diagonosis
    {
        if(!(patientObj instanceof Patient))
        {
            throw new Error("Patient Error");
            
        }
        if(!diagonosis)
        {
            throw new Error("Diagonosis field cannot be empty");
        }
        if(!(this.#patientList.includes(patientObj))){throw new Error("This patient is not belong to this doctor");
        }

        this.#docDiagonosis.push({
            patinet: patientObj,
            diagonosis: diagonosis
        })
        patientObj.addDiagonosis(diagonosis);
        console.log(`Diagonosis given to patient ${patientObj.getPatientName()}`);


    }

    //List of given prescribtion of patients
    prescribtion(patientObj,docPrescribtion)  //patientObj,diagonosis 
    {
         if(!(patientObj instanceof Patient))
        {
            throw new Error("Patient Error");
            
        }
        if(!docPrescribtion)
        {
            throw new Error("Prescribtion field cannot be empty");
        }
        if(!(this.#patientList.includes(patientObj))){throw new Error("This patient is not belong to this doctor");
        }
        this.#docPrescribtion.push({
            patient: patientObj,
            prescribtion: docPrescribtion
        })
        patientObj.addPrescribtion(docPrescribtion);
        console.log(`Prescribtion given to patient ${patientObj.getPatientName()}`);


    }

}