



export async function GET() {

  const resultado = [
    { nome: "JAO", email: "email" },
    { nome: "maria", email: "email" },
    { nome: "luiz", email: "email" },
    { nome: "carlos", email: "email" }
  ]

  return Response.json(resultado)
}

export async function POST(request: Request) {



  const body = await request.json();



  return Response.json(body)
}

export async function PUT(request: Request) {

  const body = request.body


  return Response.json(body)
}