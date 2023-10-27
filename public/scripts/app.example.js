class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.driver = document.getElementById("driver");
    this.date = document.getElementById("date");
    this.time = document.getElementById("time");
    this.passenger = document.getElementById("passenger");
    this.loadButton.disabled = true;
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;

    this.driver.addEventListener("input", this.checkInputs);
    this.date.addEventListener("input", this.checkInputs);
    this.time.addEventListener("input", this.checkInputs);
  }

  run = async () => {
    await this.load();
    this.clear();
    this.renderCars();
  };

  renderCars() {
    Car.list.forEach((car) => {
      const carNode = this.createCarNode(car);
      this.carContainerElement.appendChild(carNode);
    });
  }

  createCarNode(car) {
    const node = document.createElement("div");
    node.className = "col-lg-4 col-md-6 col-sm-12";
    node.innerHTML = car.render();
    return node;
  }

  checkInputs = () => {
    const driverValue = this.driver.value;
    const dateValue = this.date.value;
    const timeValue = this.time.value;

    if (driverValue && dateValue && timeValue) {
      this.loadButton.disabled = false;
    } else {
      this.loadButton.disabled = true;
    }
  };

  async load() {
    const { date, time, passenger } = this;
    const carAvailable = new Date(`${date.value} ${time.value}`);
    const timestamp = carAvailable.getTime();

    const cars = await this.filterCarsByCapacityAndTime(
      passenger.value,
      timestamp
    );

    Car.init(cars);
  }

  async filterCarsByCapacityAndTime(passenger, timestamp) {
    const cars = await Binar.listCars((item) => {
      const filterCapacity = item.capacity >= passenger;
      const filterDateTime = item.availableAt.getTime() < timestamp;
      return filterCapacity && filterDateTime;
    });

    return cars;
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
