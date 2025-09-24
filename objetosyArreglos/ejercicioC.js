const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];

// 1. Usar find() para buscar a Luis
const personaLuis = personas.find(p => p.nombre === "Luis");
console.log("Encontrado:", personaLuis);

// 2. Usar forEach() para imprimir nombre y edad
personas.forEach(p => {
  console.log(`${p.nombre} tiene ${p.edad} años`);
});

// 3. Usar reduce() para sumar todas las edades
const totalEdades = personas.reduce((total, p) => total + p.edad, 0);
console.log("Suma total de edades:", totalEdades);
