class Laptop {
  constructor(
    givenhddSize,
    ram,
    cpuSpeed,
    batteryLife,
    screenSize,
    model,
    manufacturer,
    price,
    operatingSystem,
    serialNumber
  ) {
    if (typeof givenhddSize == string) {
      this.hddSize = givenhddSize;
    } else {
      throw 'wrong input';
    }

    this.ram = ram;
    this.cpuSpeed = cpuSpeed;
    this.batteryLife = batteryLife;
    this.screenSize = screenSize;
    this.model = model;
    this.manufacturer = manufacturer;
    this.price = price;
    this.operatingSystem = operatingSystem;
    this.serialNumber = serialNumber;
  }

  printableString() {
    return `This laptop has the following spectication \n HDD size: ${this.hddSize} \n RAM size: ${this.ram} \n CPU speed: ${this.cpuSpeed} \n Battery Life: ${this.batteryLife} \n Screen size: ${this.screenSize} \n Model: ${this.model} \n Manufacture: ${this.manufacturer} \n Price: ${this.price} \n Operating System: ${this.operatingSystem} \n Serial Number: ${this.serialNumber} \n`;
  }
}

module.exports = Laptop;
