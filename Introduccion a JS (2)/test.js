personas = [{
    nombre : "Mateo",
    apellido : "Peduto",
    edad : 23
},{
    nombre : "Martina",
    apellido : "Perez",
    edad : 21
}
]
persona1 =JSON.stringify(personas[1])
persona2 = JSON.parse(persona1)
console.log(persona2)
