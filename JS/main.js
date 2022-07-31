//LISTADO DE PRODUCTOS DISPONIBLES

class Productos{    

    constructor (id, item, descripcion, cantidad_min, precio){

        this.id = id ;
        this.item = item;
        this.descripcion = descripcion;
        this.cantidad_min = cantidad_min;
        this.precio = precio;
    }    

    descripcion_completa_productos(){

        return this.id+" - "+this.item+" - "+this.descripcion+" - "+this.cantidad_min+" - "+" $"+ +this.precio ; 
    }
}

let list_productos = new Array() ;
list_productos.push(new Productos('id: 01','AgendasTB', 'Tapa blanda full color', '100 unidades', 10000)) ;
list_productos.push(new Productos('id: 02','AgendasTD', 'Tapa dura ByN', '100 unidades', 7000)) ;
list_productos.push(new Productos('id: 03','AgendasTD2', 'Tapa dura full color', '100 unidades', 13000)) ;
list_productos.push(new Productos('id: 04','Almanaques', 'Con base full color', '1000 unidades', 15000)) ;
list_productos.push(new Productos('id: 05','Banners', 'Lona y rollup', '1 unidad', 5000)) ;
list_productos.push(new Productos('id: 06','Bolsas', 'Bolsas de tela con cierre', '500 unidades', 4000)) ;
list_productos.push(new Productos('id: 07','Cajas', 'Diseño personalizado', '500 unidades', 20000)) ;
list_productos.push(new Productos('id: 08','Cartelería', 'Colgante PVC espumado', '1 unidad', 3500)) ;
list_productos.push(new Productos('id: 09','CatálogosAc', 'Acaballado full color', '500 unidades', 11000)) ;
list_productos.push(new Productos('id: 10','CatálogosPre', 'Premiun lomo cuadrado full color', '500 unidades', 25000)) ;
list_productos.push(new Productos('id: 11','CuadernosTB', 'Tapa blanda full color', '100 unidades', 10000)) ;
list_productos.push(new Productos('id: 12','CuadernosTD', 'Tapa dura full color', '100 unidades', 23000)) ;
list_productos.push(new Productos('id: 13','LibrosTB', 'Tapa blanda full color', '100 unidades', 40000)) ;
list_productos.push(new Productos('id: 14','LibrosTD', 'Tapa dura full color', '100 unidades', 65000)) ;
list_productos.push(new Productos('id: 15','RevistasCLom', 'Con lomo full color', '1000 unidades', 150000)) ;
list_productos.push(new Productos('id: 16','RevistasAc', 'Acaballadas full color', '1000 unidades', 70000)) ;

let adm_prod = prompt("Elija una opción: \n A) Ver listado de productos \n B) Actualizar precio de producto \n C) Eliminar producto \n D) Actualizar descripcion de un producto") ;

if (adm_prod == "A"){
    
    alert("Productos disponibles: "+prod_disp())
    
    }else if (adm_prod == "B"){ 
        
        let item = prompt("Ingrese el producto a actualizar") ;
        let indice = buscarProducto(item) ;

        if (indice >=0){
            
            let precio_nuevo = prompt("Ingrese nuevo importe") ;
            list_productos[indice].precio = precio_nuevo ;
            alert("Listado de productos actualizado: " +prod_disp()) ;
        
        }else{
            alert("No ingresaste un producto válido...") ;
        
            }
        
        }else if (adm_prod == "C"){
            let idAEliminar = prompt("Ingrese el Id del producto que desea eliminar") ;
            let indice = buscar_id_Producto(id) ;

            if(indice >=0){
                list_productos = list_productos.filter(list_productos => list_productos.id !== idAEliminar) ;
                alert("Acaba de eliminar el producto: " +idAEliminar()) ;
            }
            
        }else if (adm_prod == "D"){

            let descripcion = prompt("Ingrese producto a actualizar") ;
            let indice = buscarProducto(descripcion) ;

            if (indice >=0){
                
                let nueva_descripcion = prompt("Actualice descripcion de producto seleccionado") ;
                list_productos[indice].descripcion = nueva_descripcion ;
                alert("Listado de productos actualizado: " +prod_disp()) ;
                
        }else{
            alert("No ingresaste un producto válido para actualizar descripcion...");
        }

    }

function buscarProducto(item){
    
    let i = 0;
    while ( i < list_productos.length ){

        if (list_productos[i].item == item) {
            return i ;
        }

    i++

    }

    return -1 ;
}


function prod_disp(){

    let p_disp = "";
    for (let i = 0 ; i < list_productos.length ; i++){

        p_disp += "\n" +list_productos[i].descripcion_completa_productos();
    }

    return p_disp ;
}


function buscar_id_Producto(id){
    
    let i = 0;
    while ( i < list_productos.length ){

        if (list_productos[i].id == id) {
            return i ;
        }

    i++

    }

    return -1 ;
}

