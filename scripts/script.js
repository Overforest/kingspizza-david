function calcDate() {
    var lastDate = new Date(document.lastModified);
    var sysDate = new Date();
    function format(x) {
        return x.toLocaleString('es-ES');
    }
    var lastDateDisplay = document.querySelector('#mod-date');
    var sysDateDisplay = document.querySelector('#sys-date');
    lastDateDisplay.innerHTML = 'Fecha y hora de modificación: ' + format(lastDate);
    sysDateDisplay.innerHTML = 'Fecha y hora del sistema: ' + format(sysDate);
}

calcDate();

var footer = document.querySelector('#nav-version');
footer.innerHTML = 'Versión del navegador: ' + navigator.appVersion;

function inputFocus(id) {
    document.getElementById(id).style.backgroundColor = 'gainsboro';
}

function inputBlur(id) {
    document.getElementById(id).style.backgroundColor = '';
    document.getElementById(id).value = document.getElementById(id).value.toUpperCase();
}

function contactForm() {
    var nombre = document.contact.nombre.value;
    var apellido = document.contact.apellido.value;
    var telefono = document.contact.telefono.value;
    confirm('¿Los datos ingresados son correctos?\n Nombre y Apellido: ' + nombre + ' ' + apellido + '\nTeléfono: ' + telefono);
}

function orderForm() {
    var nombre = document.order.nombre.value;
    var apellido = document.order.apellido.value;
    var direccion = document.order.direccion.value;
    confirm('¿Los datos ingresados son correctos?\n Nombre y Apellido: ' + nombre + ' ' + apellido + '\nDirección: ' + direccion);
}