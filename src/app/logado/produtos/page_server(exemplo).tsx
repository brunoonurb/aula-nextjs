
'use server'



export default async function Produtos() {

    const reponse = await fetch("http://localhost:3000/api/produtos")

    const produtos = await reponse.json()
    console.log('tela produtos', produtos);

    return (
        <div>

            <h1>Produtos</h1>

            lista de produtos



            {produtos.map((item: any) => {
                return <p> itena - {item.id} - {item.nome}  - {item.codigo}  </p>
            })}

        </div>
    )
}