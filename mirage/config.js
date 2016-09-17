export default function() {
  this.namespace = '/api';
  this.get('/cars', function() {
    return {
      data: [{
        type: 'car',
        id: 'car001',
        attributes: {
          name: 'Renault 4',
          engine: '1400',
          type: 'Hatchback',
          image: 'http://www.adictosalagasolina.com/wp-content/uploads/2016/03/renault-4-6-AG.jpg'
        }
      }, {
        type: 'car',
        id: 'car002',
        attributes: {
          name: 'Mazda 3',
          engine: '2000',
          type: 'Sedan',
          image: 'http://s3.paultan.org/image/2014/01/mazda3-sedan-australia.jpg'
        }
      }, {
        type: 'car',
        id: 'car003',
        attributes: {
          name: 'Toyota Tundra',
          engine: '5700',
          type: 'Camioneta',
          image: 'http://handi.tech/wp-content/uploads/2016/03/2017-toyota-tundra.jpg'
        }
      }]
    };
  });

  /*/ Find and return the provided spy from our spy list above
  this.get('/cars/:id', function (db, request) {
    return { data: cars.find((car) => request.params.id === cars.id) };
  });*/
}
