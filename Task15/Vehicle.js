export default class Vehicle
{
    #brandName;
    #model;
    #yearOfManufacture;
    constructor(brandName,model,yearOfManufacture)
    {
            if(!brandName||!model||!yearOfManufacture)
            {
                throw new Error("Brand Name, Model and Year of Manufacture cannot be empty");
            }
            if(typeof brandName !="string" ||typeof model !="string")
            {
                throw new Error("Brand Name and Model must be string");
            }
            if(typeof yearOfManufacture!="number" || isNaN(yearOfManufacture))
            {
                throw new Error("Year must be a number");
            }

            const currentYear=new Date().getFullYear();
            if (yearOfManufacture < 1900 || yearOfManufacture > currentYear) {
                throw new Error(`Year of Manufacture must be between 1900 and ${currentYear}`);
            }

        this.#brandName=brandName;
        this.#model=model;
        this.#yearOfManufacture=yearOfManufacture;

    }
    getBrandName(){return this.#brandName;}
    
    getModel(){return this.#model;}
    
    getYearOfManufacture(){return this.#yearOfManufacture;}
    
    getDetails(){return `${this.#brandName} ${this.#model} ${this.#yearOfManufacture}`}

    calculatePrice(days)
    {
        if(typeof this._calculatePrice!=='function')
        {
            throw new Error("CalculatePrice Must be called from child");
        }
        return this._calculatePrice(days);
    }

}