function cargaProdutos() {
    fetch('https://twsisgrvc.herokuapp.com/api/v1/produtos')
        .then((resp) => resp.json())
        .then((obj) => {
            obj.produtos.forEach (item => {
                let textoHtml = `<p>${item.descricao} (${item.marca}) - ${item.valor}</p>`;
                document.getElementById('lista').innerHTML += textoHtml;
            });
            console.log(obj);
        })
        .catch((e) => console.log(e));
}

function excluiProduto(){
    let codProduto = document.getElementById('codProduto').value;
    fetch(`https://twsisgrvc.herokuapp.com/api/v1/produtos/${codProduto}`, {
        method: 'DELETE'
    })
    .then((resp) => resp.json())
    .then((obj) => {
        alert(obj.message);
    })
    .catch((e) => console.log(e));
}