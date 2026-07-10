import { alterarListaProdutos, listaProdutos } from "../_mocks/produtos"


export async function GET(
  request: Request,

  { params }: { params: { id: string } }
) {

  // pegar o PARAMS
  const { id } = await params


  const produto = listaProdutos.filter((item) => item.id == id)



  return Response.json(produto)

}


export async function PUT(
  request: Request,

  { params }: { params: { id: string } }
) {

  // pegar o PARAMS
  const { id } = await params
  const body = await request.json()



  const novosProdutos = listaProdutos.map((item) => {
    if (item.id == id) {
      return { ...item, ...body }
    }

    return item

  })

  alterarListaProdutos(novosProdutos)


  return Response.json(body)

}


export async function DELETE(
  request: Request,

  { params }: { params: { id: string } }
) {

  // pegar o PARAMS
  const { id } = await params


  const produtosAtualizados = listaProdutos.filter((item) => item.id != id)

  alterarListaProdutos(produtosAtualizados)


  return Response.json({
    message: "delete com sucesso"
  })

}