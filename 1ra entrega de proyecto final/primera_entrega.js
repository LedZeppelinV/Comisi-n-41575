function precio_total(precio_juego , cantidad_copias){
    let precio = precio_juego * cantidad_copias;
    return precio 
}

function precio_con_descuento(){
    if(cupon_descuento == 10){
        let cupon_10 = precio_total(precio_juego , cantidad_copias) * 0.1;
        let precio_final = precio_total(precio_juego , cantidad_copias) - cupon_10;
        return precio_final
    }
    else if (cupon_descuento == 25){
        let cupon_25 = precio_total(precio_juego , cantidad_copias) * 0.25;
        let precio_final = precio_total(precio_juego , cantidad_copias) - cupon_25;
        return precio_final
    }
    else if (cupon_descuento == 50){
        let cupon_50 = precio_total(precio_juego , cantidad_copias) * 0.5;
        let precio_final = precio_total(precio_juego , cantidad_copias) - cupon_50;
        return precio_final
    }
    else{
        let cupon_0 = 0;
        let precio_final = precio_total(precio_juego , cantidad_copias) - cupon_0;
        return precio_final
    }
}
let nombre_juego = prompt("Indique el juego que quiere comprar.");
let precio_juego = prompt("Indique el precio del producto."); 
let cantidad_copias = prompt("Indique la cantidad de copias que quiere comprar."); 
let cupon_descuento = parseInt(prompt("Seleccione su cupon de descuento")); /* Elegir entre 0%, 10%, 25% o 50% de descuento */
console.log("El precio final es" , precio_con_descuento());



class Juego{
    constructor(nombre , genero , precio , stock){
        this.nombre = nombre;
        this.genero = genero;
        this.precio = precio; 
        this.stock = stock;
    }
    obtener_datos(){
        console.log("<-------Datos del Producto------->");
        console.log("Nombre:" , this.nombre);
        console.log("Genero:" , this.genero);
        console.log("Precio: $" , this.precio);
        console.log("Stock:" , this.stock);
    }
    establecer_precio(precio){
        this.precio = precio;
    }
    establecer_stock(stock){
        this.stock = stock;
    }
    obtener_stock(){
        if(this.stock > 0 && this.stock < 10){
            console.log("Ultimas unidades disponibles!");
        }
        else if(this.stock <= 0){
            console.log("Fuera de stock.");
        }
        else{
            console.log("Quedan " , this.stock , "unidades.")
        }
        return this.stock
    }
    actualizar_stock(){
        this.stock = this.stock - 1;
    }
}

let f1_22 = new Juego("F1 2022", "Carreras", 6200 , 50);
let cartel_tycoon = new Juego("Cartel Tycoon", "Estrategia", 1100, 25);
let farming_simulator_22 = new Juego("Farming Simulator 22", "Simulacion", 2500, 40);
let seven_days = new Juego("7 Days to Die", "Supervivencia", 300, 20);
let tekken_7 = new Juego("Tekken 7", "Lucha", 2000, 35);

f1_22.obtener_datos();
cartel_tycoon.obtener_datos();
farming_simulator_22.obtener_datos();
seven_days.obtener_datos();
tekken_7.obtener_datos();

/* SIMULACION DE UNA VENTA */
let confirmar_compra = prompt("Desea confirmar la compra? (SI/NO)");
if(confirmar_compra == "SI" || confirmar_compra == "si" || confirmar_compra == "Si"){
    if(f1_22.obtener_stock() > 0){
        console.log("Se vendio una copia!");
        f1_22.actualizar_stock();
        console.log("Su compra ha sido efectuada.");
    }
    f1_22.obtener_stock();
}
else{
    console.log("Su compra ha sido cancelada.");
}

let lista_juegos = [];
lista_juegos.push(f1_22); 
lista_juegos.push(cartel_tycoon);
lista_juegos.push(farming_simulator_22); 
lista_juegos.push(seven_days); 
lista_juegos.push(tekken_7);

for( let juego of lista_juegos){
    console.log(juego);
}

function buscar_precios(juego){
    return juego.precio <= 500
}
let resultado_busqueda_precios = lista_juegos.find(buscar_precios);
console.log("El siguiente juego cuesta menos de $500:" , resultado_busqueda_precios);

let generos = ["Accion" , "Aventura" , "Carreras" , "Deportes" , "Estrategia" , "FPS" , "Lucha" , "RPG"]
console.log("Generos:" , generos);
generos.push("Plataformas" , "Cooperativo" , "Simulacion");
console.log("Generos despues del push:" , generos);