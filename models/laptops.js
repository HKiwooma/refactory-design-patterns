class Laptop {
  constructor(brand, HDD, RAM, price, manufactureYear) {
    this.brand = brand;
    this.HDD = HDD;
    this.RAM = RAM;
    this.price = price;
    this.manufactureYear = manufactureYear;
    this.currentYear = new Date().getFullYear();
  }
  checkBrand() {
    if (typeof this.brand == 'string') {
      return true;
    } else {
      return 'wrong input';
    }
  }

  laptopAge() {
    return this.currentYear - this.manufactureYear;
  }

  adjPrice() {
    const discount = this.price * 0.3;
    if (this.laptopAge() > 3) {
      return this.price - discount;
    } else {
      return this.price;
    }
  }

  printableString() {
    return `Laptop Specification: \n {Name:${this.brand}\n RAM: ${this.RAM} \n HDD: ${this.HDD}\n Price: ${this.price}\n Date of Manufacture: ${this.manufactureYear}}`;
  }

  getDescription() {
    return `${this.brand} RAM: ${this.RAM} HDD: ${this.HDD}`;
  }
}

module.exports = Laptop;

/*
class Laptop {
  constructor(
    gHddSize,
    gRam,
    gCpuSpeed,
    gBatteryLife,
    gScreenSize,
    gModel,
    gManufacturer,
    gPrice,
    gOperatingSystem,
    gSerialNumber,
    gManufactureDate
  ) {
    this.hddSize = gHddSize;
    this.ram = gRam;
    this.cpuSpeed = gCpuSpeed;
    this.batteryLife = gBatteryLife;
    this.screenSize = gScreenSize;
    this.model = gModel;
    this.manufacturer = gManufacturer;
    this.price = gPrice;
    this.operatingSystem = gOperatingSystem;
    this.serialNumber = gSerialNumber;
    this.manufactureDate = gManufactureDate;
  }

  printableString() {
    return `This laptop has the following spectication \n HDD size: ${this.hddSize} \n RAM size: ${this.ram} \n CPU speed: ${this.cpuSpeed} \n Battery Life: ${this.batteryLife} \n Screen size: ${this.screenSize} \n Model: ${this.model} \n Manufacture: ${this.manufacturer} \n Price: ${this.price} \n Operating System: ${this.operatingSystem} \n Serial Number: ${this.serialNumber} \n Date of Manufacture: ${this.manufactureDate} \n`;
  }
  laptopAge() {
    const today = new Date(),
      manufacturingDate = new Date(this.manufactureDate),
      age = today.getFullYear() - manufacturingDate;
    return age;
  }

  adjustPrice() {
    if (this.laptopAge() > 3) {
      const discount = this.price * 0.3;
      return this.price - discount;
    } else {
      return this.price;
    }
  }
}
module.exports = Laptop;*/
