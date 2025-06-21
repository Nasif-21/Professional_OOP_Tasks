
const nameList=["Tareq","Afsana","Imtiaz","Pulok","Robin","Samia","Rupok"];

console.log("Given name List");
for(let i=0;i<nameList.length;i++)
{
    console.log(nameList[i]);
}

let searchItem;

function nameSearch()
{
searchItem=prompt("Enter to search a name");    
const result=nameList.filter(nameList =>
  nameList.toLowerCase().includes(searchItem.toLowerCase())
);

console.log(result);

}
nameSearch()


