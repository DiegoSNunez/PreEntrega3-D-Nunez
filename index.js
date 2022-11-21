// CLASES para determinar las distintas categorías de productos y ARREGLOS
class OfertasSemanales { constructor (id, name, ut, price) 
    { this.id = id
       this.name = name
       this.ut = ut
       this.price = price };
    };
const ofertas = [];
const aceiteEucalipto = new OfertasSemanales (1, 'Aceite Esencial de Eucalipto','Respiración libre-Higiene Bucal-Defensas', '$3.000.-');
ofertas.push (aceiteEucalipto);
const aceiteManzanilla = new OfertasSemanales (2, 'Aceite Esencial de Manzanilla','Descanso-Estómago-Ciclo femenino', '$3.500.-');
ofertas.push (aceiteManzanilla);
const aceiteLimon = new OfertasSemanales (3, 'Aceite Esencial de Limon','Inspiración-Creatividad', '$4.000.-');
ofertas.push (aceiteLimon);
const oleo31 = new OfertasSemanales (4, 'Óleo 31','Cabeza-Estómago-Flexibilidad-Pre Actividad Física-Post Actividad Física y Sobreesfuerzos-Libertad de Movimientos', '$6.500.-');
ofertas.push (oleo31);
const antiStress = new OfertasSemanales (5, 'Anti-Stress', 'Relajante-Tranquilidad-Descanso', '$5.500.-');
ofertas.push (antiStress);
const sosMotivation = new OfertasSemanales (6,'SoS Motivation', 'Alegría-Motivación-Creatividad-Inspiración', '$5.000.-');
ofertas.push (sosMotivation);
console.log (ofertas);

// DOM
const estaSemana = document.getElementById ('estaSemana');
ofertas.forEach (e => { const productos = document.createElement('option')
    productos.innerText = `${e.name}:${e.ut}:${e.price}`
    productos.setAttribute('id',`${e.id}`)
    estaSemana.append (productos) });

// Carrito de compras
const carrito = [];
const seleccion = document.getElementById('seleccionar');
seleccion.onclick = () => { const indexProd = estaSemana.selectedIndex
    const pedido = ofertas[indexProd]
    carrito.push (pedido)
};
const comprar = document.getElementById ('comprar');
comprar.onclick = () => { console.log (carrito)
    localStorage.setItem ('compra',JSON.stringify (carrito)) 
};

// EVENTOS y STORAGE
const inputNombre = document.getElementById ('nombre');
const inputApellido = document.getElementById ('apellido');
const inputMail = document.getElementById ('mail');
const finalizar = document.getElementById ('finalizar')
const despedida = document.getElementById ('despedida')
finalizar.onclick = () => { if (inputNombre.value && inputApellido.value && inputMail.value) 
    {
    const usuario = { nombre: inputNombre.value, apellido: inputApellido.value, mail: inputMail.value,}
    inputNombre.value = ''
    inputApellido.value = ''
    inputMail.value = ''    
    localStorage.setItem ('datosCliente', JSON.stringify (usuario)) 
const proceso = document.getElementById('proceso')
proceso.remove ()
const saludo = document.createElement ('p')
saludo.innerText = `Muchas gracias ${usuario.nombre} ${usuario.apellido} por tu compra. En breve recibiras un mail con los datos de tu pedido en el siguiente correo ${usuario.mail}`
despedida.append (saludo) 
    }
};

