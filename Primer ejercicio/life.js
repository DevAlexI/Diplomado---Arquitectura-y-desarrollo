//EJ02
let datos = [42, true, function() {return 'El significado de la vida es: '}];
//El significado de la vida es: 42
let datos2 = datos[2]() + datos[0];

datos[1] ? console.log(datos2) : '';