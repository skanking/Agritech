document.getElementById('telefone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = '(' + (x[1] ? x[1] : '') + (x[2] ? ') ' + x[2] : '') + (x[3] ? '-' + x[3] : '');
});

document.getElementById('data').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    e.target.value = (x[1] ? x[1] : '') + (x[2] ? '/' + x[2] : '') + (x[3] ? '/' + x[3] : '');
});

document.getElementById('cpf').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    e.target.value = (x[1] ? x[1] : '') + (x[2] ? '.' + x[2] : '') + (x[3] ? '.' + x[3] : '') + (x[4] ? '-' + x[4] : '');
});

document.getElementById('rg').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,1})/);
    e.target.value = (x[1] ? x[1] : '') + (x[2] ? '.' + x[2] : '') + (x[3] ? '.' + x[3] : '') + (x[4] ? '-' + x[4] : '');
});
