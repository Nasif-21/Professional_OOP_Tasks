const fs=require('fs');

//Reading a file from csv
fs.readFile('salarysheet.csv','utf8',(err,data)=>
{if(err)
{
    console.error("Failed to load data",err);
    return;
}

//Check if the file is readable or not
//console.log(data)


//Mapping data
const lines=data.trim().split('\n');

const employees=lines.map(line=>{
    const [name,salaryStr]=line.split(',');
    return {name: name.trim(), salary:parseInt(salaryStr.trim())};
});

//console.log(employees);


//Comparing
let minEmp=employees[0];
let maxEmp=employees[0];

for(const emp of employees)
{
    if(emp.salary<minEmp.salary)
    {
            minEmp=emp;
    }
    if(emp.salary>maxEmp.salary)
    {
        maxEmp=emp;
    }
        
}

 console.log(`Max: ${maxEmp.name}\t${maxEmp.salary}`);
 console.log(`Min: ${minEmp.name}\t${minEmp.salary}`);

});












//For Testing purpose
/*
const stream=fs.createReadStream('salarysheet.csv','utf-8');
stream.on('data',(chunk)=>
{
    console.log(chunk);
});

stream.on('error',(err)=>
{
    console.error("Failed to read file",err.message);
    })

*/




