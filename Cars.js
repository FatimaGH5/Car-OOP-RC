class Car {
    constructor(manufacturer, model, year, color, fuel_type, engine_size, registration_number, mileage, price, accidentHistory) {
        this.manufacturer = manufacturer
        this.model = model
        this.year = year
        this.color = color
        this.fuel_type = fuel_type
        this.engine_size = engine_size
        this.registration_number = registration_number
        this.mileage = mileage;
        this.price = price
        this.accidentHistory = []
    }

    getCarInfo() {
        return ` ${this.manufacturer} ${this.model},${this.year} ${this.color},${this.fuel_type},
        ${this.engine_size},${this.registration_number},${this.price} `;
    }

    printAttributes() {
        console.log("Manufacturer:", this.manufacturer);
        console.log("Model:", this.model);
        console.log("Year:", this.year);
        console.log("Color:", this.color);
        console.log("Fuel Type:", this.fuel_type);
        console.log("Engine Size:", this.engine_size);
        console.log("Registration Number:", this.registration_number);
        console.log("Mileage:", this.mileage);
        console.log("Price:", this.price);
        console.log("Accident History:", this.accidentHistory);
    }

    addAccident(description, date) {
        this.accidentHistory.push({ description, date });
    }

    getAccidentHistory() {
        return this.accidentHistory;
    }

    updateMileage(newMileage) {
        this.mileage = newMileage;
    }

    needsMaintenance() {
        // Define a threshold for maintenance based on mileage
        const maintenanceThreshold = 100000; // For example, 100,000 miles in general
        return this.mileage >= maintenanceThreshold;
    }

    repaint(newColor) {
        this.color = newColor;
        console.log(`The car has been repainted to ${newColor}.`);
    }


    driveLicenseType(licenseType) {

        console.log("This car requires a " + licenseType + " license");


    }

}

class Mercedes extends Car {
    constructor(manufacturer, model, year, color, fuel_type, engine_size, registration_number, mileage, price, accidentHistory) {

        super("Mercedes", model, year, color, fuel_type, engine_size, registration_number, mileage, price, accidentHistory)
    }

    //// override method
    printAttributes(valueOfmaintenanceThreshold) {
        console.log("Manufacturer:Mercedes");
        console.log("Model:", this.model);
        console.log("Year:", this.year);
        console.log("Color:", this.color);
        console.log("Fuel Type:", this.fuel_type);
        console.log("Engine Size:", this.engine_size);
        console.log("Registration Number:", this.registration_number);
        console.log("Mileage:", this.mileage);

        console.log("Accident History:", this.hasAccidentHistory());
        console.log("Has Advanced Safety Features:", this.hasAdvancedSafetyFeatures() ? "Yes" : "No");
        console.log("Needs Maintenance:", this.needsMaintenance(valueOfmaintenanceThreshold) ? "Yes" : "No");
        console.log("Price:", this.price);
    }


    // Method to check if the Mercedes model has advanced safety features
    hasAdvancedSafetyFeatures() {
        const advancedSafetyModels = ["E-Class", "S-Class", "GLC", "GLE", "GLS"]; // Example list of Mercedes models with advanced safety features
        return advancedSafetyModels.includes(this.model);
    }

    // override method
    needsMaintenance(valueOfmaintenanceThreshold) {
        const maintenanceThreshold = valueOfmaintenanceThreshold;
        return this.mileage >= maintenanceThreshold;
    }

    hasAccidentHistory() {
        if (accidentHistory.length >= 1) {
            return accidentHistory;
        }
        else {
            console.log("There is not Accident History")


        }

    }
}

class Toyota extends Car {

    constructor(manufacturer, model, year, color, fuel_type, engine_size, registration_number, mileage, price, accidentHistory) {

        super("Toyota", model, year, color, fuel_type, engine_size, registration_number, mileage, price, accidentHistory)
    }

    //// override method
    printAttributes(valueOfmaintenanceThreshold) {
        console.log("Manufacturer:Toyota");
        console.log("Model:", this.model);
        console.log("Year:", this.year);
        console.log("Color:", this.color);
        console.log("Fuel Type:", this.fuel_type);
        console.log("Engine Size:", this.engine_size);
        console.log("Registration Number:", this.registration_number);
        console.log("Mileage:", this.mileage);

        console.log("Accident History:", this.hasAccidentHistory());
        console.log("One of The Top Five :", this.checkTopFiveModels() ? "Yes" : "No");
        console.log("Needs Maintenance:", this.needsMaintenance(valueOfmaintenanceThreshold) ? "Yes" : "No");
        console.log("Price:", this.price);
    }

    // Method to check if the Toyota model is one of the five top Toyota Cars
    checkTopFiveModels() {
        const topFiveModels = ["Crown", "Prius", "Highlander", "GR Corolla", "Prius Prime"]; //five top Toyota Cars
        return topFiveModels.includes(this.model);
    }

    // override method
    needsMaintenance(valueOfmaintenanceThreshold) {
        const maintenanceThreshold = valueOfmaintenanceThreshold;
        return this.mileage >= maintenanceThreshold;
    }

    hasAccidentHistory() {
        if (accidentHistory.length >= 1) {
            return accidentHistory;
        }
        else {
            console.log("There is not Accident History")


        }

    }


}

////////////////////
console.log("Welcome to Our Car Shop! Explore our selection of quality vehicles and exceptional service today.");
console.log("\n")
console.log("\n")



const accidentHistory = [];
var Toyota_Pruis = new Toyota("Toyota", "Prius", 2017, "Black", "Regular Gasoline", "1798 cc", "JO1225", 500, "15,000$", accidentHistory)
Toyota_Pruis.needsMaintenance(5000);

var Mercedes_GLS = new Mercedes("Mercedes", "GLS", 2023, "White", "Diesel", "3000 cc", "JO21547", 0, "100,000$", accidentHistory)
Toyota_Pruis.needsMaintenance(40000);

let Cars = [Mercedes_GLS, Toyota_Pruis]
// Print All Cars 
for (i = 1; i < Cars.length + 1; i++) {
    console.log("Car " + i + ": \n")
    Cars[i - 1].printAttributes();
    console.log("\n")
    console.log("\n")
}

