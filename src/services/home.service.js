class HomeService {
  index() {
    return { message: 'Hello world' };
  }
}

// NO exporto así debido awilix que ya creara este objeto en el contenedor de ID
// module.exports = new HomeService;
module.exports = HomeService;
