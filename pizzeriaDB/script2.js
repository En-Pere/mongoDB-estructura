use('pizzeriaDB');
db.dropDatabase();

use('pizzeriaDB');

db.products.drop();
db.products.insertMany([
  {PizzaId: 'p01', Type: '4estaciones', Ingredients:'mozzarela, mushrooms, ham'},
  {PizzaId: 'p02', Type: 'tropical', Ingredients:'pinapple, mozzarela, olives'},
  {PizzaId: 'p03', Type: '4cheese', Ingredients:'mozzarela, chedar, parmesano, bluecheese'},
  {BebidaId: 'b01', Type: 'Coca-cola'},
  {BebidaId: 'b02', Type: 'Fanta'},
  {BebidaId: 'b03', Type: 'Agua'},
  {HamburguesaId: 'h01', Type: 'Americana', Ingredients: 'burger, bacon, cheese'},
  {HamburguesaId: 'h02', Type: '007', Ingredients: 'burger, chedar, mushrooms'},
  {HamburguesaId: 'h03', Type: 'Vegana', Ingredients: 'tofu, lechuga, tomate'},
])

db.pedidos.drop();
db.pedidos.insertOne(
  {
    'date': new Date('2021-03-01'),
    'recogida': 'tienda',
    'tienda': 
      [{
        'idtienda': 'LaMaquinista',
        'CP': 08007,
        'Dirección': 'C/maqui 8',
        'Provincia': 'Barcelona',
        'Localidad': 'Badalona',
      }],
    'cliente': 
      [{
        '_id': '46458888P',
        'nombre': 'miguell',
        'apellido': 'ruiz',
        'telefono': 93333333,
        'dirección': 
         [{
            'calle': 'av.del carmen',
            'numero': 3,
            'CP': 08902,
            'Provincia': 'Barcelona',
            'Localidad': 'Badalona',
         }],
      }],
    'order': 
      [{
        'PizzaId': ["p01", "p02"],
        'BebidaId': ["b01", "b02"],
        'HamburguesaId': ["h01"],
        'Precio_order': 57.90,
      }],
    'atendido_por':
      [{
        'Nombre_empleado': 'javi',
        'Apellido': 'rodríguez',
        'id_nif': '47888822P',
        'telefono': 616222222,
        'profesión': 'cocinero',
      }],
});

db.pedidos.insertOne(
  {
    'date': new Date('2021-02-12'),
    'recogida': 'domicilio',
    'tienda': 
      [{
        'idtienda': 'Anec blau',
        'CP': 08007,
        'Dirección': 'C/anec 8',
        'Provincia': 'Barcelona',
        'Localidad': 'Hospitalet',
      }],
    'cliente': 
      [{
        '_id': '47882838J',
        'nombre': 'Ana',
        'apellido': 'Mena',
        'telefono': 93333333,
        'dirección': 
         [{
            'calle': 'av.del mar',
            'numero': 3,
            'CP': 08902,
            'Provincia': 'Barcelona',
            'Localidad': 'Hospitalet',
         }],
      }],
    'order': 
      [{
        "PizzaId": ['p03', 'p03', 'p03'],
        "BebidaID": ['b01', 'b02', 'b02'],
        "HamburguesaId": ['h01', 'h02'],
        'Precio_order': 12.90,
      }],
    'atendido_por':
      [{
        'Nombre_empleado': 'Oscar',
        'Apellido': 'marquez',
        'id_nif': '8438283J',
        'telefono': 616222222,
        'profesión': 'repartidor',
      }],
});


