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
    this.operatingSystem = gPperatingSystem;
    this.serialNumber = gPerialNumber;
    this.manufactureDate = gManufactureDate;
  }

  printableString() {
    return `This laptop has the following spectication \n HDD size: ${this.hddSize} \n RAM size: ${this.ram} \n CPU speed: ${this.cpuSpeed} \n Battery Life: ${this.batteryLife} \n Screen size: ${this.screenSize} \n Model: ${this.model} \n Manufacture: ${this.manufacturer} \n Price: ${this.price} \n Operating System: ${this.operatingSystem} \n Serial Number: ${this.serialNumber} \n Date of Manufacture: ${this.manufactureDate} \n`;
  }

  laptopAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.manufactureDate.getFullYear();
  }

  adjustPrice() {
    if (this.laptopAge() > 3) {
      const discount = this.price * 0.3;
      return this.price - discount;
    } else {
      return this.price;
    }
  
}

module.exports = Laptop;
