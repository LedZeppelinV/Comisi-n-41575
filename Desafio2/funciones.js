let nombre_producto = prompt("Indique el producto que quiere comprar.");
let precio_producto = prompt("Indique el precio del producto.");
let cantidad_producto = prompt("Indique la cantidad que quiere comprar.");
let cupon_descuento = parseInt(prompt("Seleccione su cupon de descuento"));

function precio_total(){
    let precio = precio_producto * cantidad_producto;
    return precio 
}

function precio_con_descuento(){
    if(cupon_descuento == 10){
        let cupon_10 = precio_total() * 0.1;
        let precio_final = precio_total() - cupon_10;
        return precio_final
    }
    else if (cupon_descuento == 25){
        let cupon_25 = precio_total() * 0.25;
        let precio_final = precio_total() - cupon_25;
        return precio_final
    }
    else if (cupon_descuento == 50){
        let cupon_50 = precio_total() * 0.5;
        let precio_final = precio_total() - cupon_50;
        return precio_final
    }
    else{
        let cupon_0 = 0;
        let precio_final = precio_total() - cupon_0;
        return precio_final
    }
}
console.log("El precio final es" , precio_con_descuento());