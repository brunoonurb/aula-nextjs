export let listaProdutos = [
    { id: '1', nome: "JAO", codigo: "codigo" },
    { id: '2', nome: "maria", codigo: "codigo" },
    { id: '3', nome: "luiz", codigo: "codigo" },
    { id: '4', nome: "carlos", codigo: "codigo" }
]


export function alterarListaProdutos(produtos: any[]) {

    listaProdutos = produtos
}