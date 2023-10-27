class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="search-car d-flex flex-column h-90">
      <img src="${this.image}" class="img-fluid" alt="${this.manufacture}" style="object-fit: fill; height: 200px; ">
      <div class="why-us-card-body border-0 py-3 px-0 g-2">
        <p>${this.manufacture} ${this.model}</p>
        <h5>Rp. ${this.rentPerDay}/hari</h5>
        <p>${this.description}</p>
        <div><img src="../images/fi_users.png"/> ${this.capacity} Orang</div>
        <div><img src="../images/fi_settings.png"/> ${this.transmission}</div>
        <div><img src="../images/fi_calendar.png"/> ${this.year}</div>
        <button class="button w-100">Pilih Mobil</button>
      </div>
    </div>
      `;
  }
}

// <p>id: <b>${this.id}</b></p>
//       <p>plate: <b>${this.plate}</b></p>
//       <p>manufacture: <b>${this.manufacture}</b></p>
//       <p>model: <b>${this.model}</b></p>
//       <p>available at: <b>${this.availableAt}</b></p>
//       <img src="${this.image}" alt="${this.manufacture}" width="64px"></img>

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
>
  <path
    d="M19.167 17.5V15.8333C19.1664 15.0948 18.9206 14.3773 18.4681 13.7936C18.0156 13.2099 17.3821 12.793 16.667 12.6083"
    stroke="#8A8A8A"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M14.1663 17.5V15.8333C14.1663 14.9493 13.8152 14.1014 13.19 13.4763C12.5649 12.8512 11.7171 12.5 10.833 12.5H4.16634C3.28229 12.5 2.43444 12.8512 1.80932 13.4763C1.1842 14.1014 0.833008 14.9493 0.833008 15.8333V17.5"
    stroke="#8A8A8A"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M13.333 2.60834C14.05 2.79192 14.6855 3.20892 15.1394 3.7936C15.5932 4.37827 15.8395 5.09736 15.8395 5.8375C15.8395 6.57765 15.5932 7.29674 15.1394 7.88141C14.6855 8.46609 14.05 8.88309 13.333 9.06667"
    stroke="#8A8A8A"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7.50033 9.16667C9.34128 9.16667 10.8337 7.67428 10.8337 5.83333C10.8337 3.99238 9.34128 2.5 7.50033 2.5C5.65938 2.5 4.16699 3.99238 4.16699 5.83333C4.16699 7.67428 5.65938 9.16667 7.50033 9.16667Z"
    stroke="#8A8A8A"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>;  */
}
