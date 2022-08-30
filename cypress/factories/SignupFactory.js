var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default {
  delivery: function () {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var data = {
      name: `${firstName} ${lastName}}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '11981803974',
      address: {
        postalcode: '07084190',
        street: 'Rua Hanne El Khouri',
        number: 500,
        details: 'casa 44',
        district: 'Parque Continental II',
        city_state: 'Guarulhos/SP'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    return data;
  }
}