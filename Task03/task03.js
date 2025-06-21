/*const fs=require('fs');

fs.readFile('groceryitems.csv','utf-8',(err,data)=>{
    if(err)
    {
        console.log("Error in file",err);
        return;

    }

    const lines=data.trim().split('\n');
    const items=[];
    const idCount={};

    for(let i=0;i<lines.length;i++)
    {
        const line=lines[i].trim();
        const parts=line.split(/\s+/);
        if(parts.length!=3)
        {
            console.log("Skipping invalid line,line");
            continue;
        }
        const id=parts[0];
        const quantity=parseInt(parts[1]);
        const unitPrice=parseFloat(parts[2]);
        if(isNaN(quantity)||isNaN(unitPrice))
        {
            console.log("Invalid line num",line);
            continue;
        }
        if(idCount[id])
        {
            idCount[id]++;
        }
        else
        {
            idCount[id]=1;
        }
        items.push({
            id:id,
            quantity:quantity,
            unitPrice:unitPrice,
            totalPrice:quantity*unitPrice,
        });
    }
    const duplicate=[];
    for(const id in idCount)
    {
        if(idCount[id]>1){
            duplicate.push(id);
        }
    }
    if(duplicate.length>0)
    {
        console.log("Item Duplicate, please fix");
        duplicate.forEach(id=>console.log('-'+id));
    }
     let totalQty = 0;
    let grandTotal = 0;

    for (let i = 0; i < items.length; i++) {
        totalQty += items[i].quantity;
        grandTotal += items[i].totalPrice;
    }

    const vat = grandTotal * 0.05;
    const netTotal = grandTotal - vat;

    // Build the voucher output string
    let output = '';
    output += 'Item id\t\tQty\tunit price\ttotal\n';

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        output += `${item.id}\t${item.quantity}\t${item.unitPrice}\t\t${item.totalPrice.toFixed(1)}\n`;
    }

    output += `\nTotal\t\t${totalQty}\tGrand total \t${grandTotal.toFixed(1)}\n`;
    output += `VAT (5%)\t${vat.toFixed(3)}\n`;
    output += `Net total\t${netTotal.toFixed(3)}\n`;

    // Display the voucher on the console
    console.log('\n' + output);

    // Save to a text file
    fs.writeFile('voucher.txt', output, (err) => {
        if (err) {
            console.log("Error writing to voucher.txt:", err);
        } else {
            console.log("Voucher saved to voucher.txt ");
        }



});
*/


const fs = require('fs');

fs.readFile('groceryitems.csv', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error in file", err);
        return;
    }

    const lines = data.trim().split('\n');
    const items = [];
    const idCount = {};

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        const parts = line.split(/\s+/);

        if (parts.length !== 3) {
            console.log("Skipping invalid line:", line);
            continue;
        }

        const id = parts[0];
        const quantity = parseInt(parts[1]);
        const unitPrice = parseFloat(parts[2]);

        if (isNaN(quantity) || isNaN(unitPrice)) {
            console.log("Invalid line numbers:", line);
            continue;
        }

        if (idCount[id]) {
            idCount[id]++;
        } else {
            idCount[id] = 1;
        }

        items.push({
            id: id,
            quantity: quantity,
            unitPrice: unitPrice,
            totalPrice: quantity * unitPrice,
        });
    }

    const duplicate = [];
    for (const id in idCount) {
        if (idCount[id] > 1) {
            duplicate.push(id);
        }
    }

    if (duplicate.length > 0) {
        console.log("Item Duplicate, please fix:");
        duplicate.forEach(id => console.log('- ' + id));
        return; // stop execution if duplicates found
    }

    let totalQty = 0;
    let grandTotal = 0;

    for (let i = 0; i < items.length; i++) {
        totalQty += items[i].quantity;
        grandTotal += items[i].totalPrice;
    }

    const vat = grandTotal * 0.05;
    const netTotal = grandTotal - vat;

    // Build the voucher 
    let output = '';
    output += 'Item id\t\tQty\tunit price\ttotal\n';

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        output += `${item.id}\t${item.quantity}\t${item.unitPrice}\t\t${item.totalPrice.toFixed(1)}\n`;
    }

    output += `\nTotal\t\t${totalQty}\tGrand total \t${grandTotal.toFixed(1)}\n`;
    output += `VAT (5%)\t${vat.toFixed(3)}\n`;
    output += `Net total\t${netTotal.toFixed(3)}\n`;

    // Display the voucher on the console
    console.log('\n' + output);

    // Save to a text file
    fs.writeFile('voucher.txt', output, (err) => {
        if (err) {
            console.log("Error writing to voucher.txt:", err);
        } else {
            console.log("Voucher saved to voucher.txt ");
        }
    });
});
