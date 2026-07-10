import { listaProdutos } from "./_mocks/produtos"

//  http://localhost:3000/api/produtos?nome=joao
export async function GET(
    request: Request,
) {
    // QUERYPARANS  url?nome=jao
    const { searchParams } = new URL(request.url)

    const nome = searchParams.get("nome")
    const id = searchParams.get("id")
    const codigo = searchParams.get("codigo")

    const produtos = listaProdutos.filter((item) => {

        if (item.nome.toUpperCase() == nome?.toUpperCase()) {
            return true
        }
        if (item.id == id) {
            return true
        }
        if (item.codigo == codigo) {
            return true
        }

        console.log(id && !nome && !codigo);


        if (!id && !nome && !codigo) {
            return true
        }

        return false
    })

    return Response.json(produtos)
}


export async function POST(request: Request) {


    const body = await request.json()

    listaProdutos.push(body)


    return Response.json(body)
}
