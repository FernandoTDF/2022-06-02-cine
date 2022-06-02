let cantidadButacas:number = Number(prompt("ingrese la cantidad de butacas del cine"));
let arregloDeButacas:boolean[]=new Array(cantidadButacas);
let cantidadButacasLibres : number = 0;
let cantidadButacasOcupadas : number = 0;

function cargarVector(vCargar : boolean[], cantidadCargar : number) {
  for (let indice:number = 0; indice<cantidadCargar; indice++) {
  vCargar[indice] =  Boolean(Math.floor(Math.random() * (2 - 0) + 0));
  };
};

function mostrarVector(vMostrar : boolean[], cantidadMostrar : number) {
  for (let indice:number = 0; indice<cantidadMostrar; indice++) {
  console.log(vMostrar[indice] + "  ");
  };
};

function informarButacas(vInformar : boolean[], cantidadInformar : number){
  for (let indice : number = 0;indice < cantidadInformar; indice++){
    if (vInformar[indice] === true){
      cantidadButacasOcupadas++
    } else if (vInformar[indice] === false){
      cantidadButacasLibres++
    }
  };
  console.log("La cantidad de Butacas libres es: " + cantidadButacasLibres)
  console.log("La cantidad de Butacas ocupadas es: " + cantidadButacasOcupadas)
};

cargarVector(arregloDeButacas,cantidadButacas);
mostrarVector(arregloDeButacas,cantidadButacas);
informarButacas(arregloDeButacas,cantidadButacas)