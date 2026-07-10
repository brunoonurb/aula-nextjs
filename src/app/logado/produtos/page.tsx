
"use client"

import { useEffect, useState } from "react"



export default function Produtos() {

    const [produtos, setProdutos] = useState([])

    async function buscaProdutos() {

        try {
            const reponse = await fetch("http://localhost:3000/api/produtos")

            const produtos = await reponse.json()

            setProdutos(produtos)
        } catch (error) {
            alert("Não possivel buscar produtos")
        }
    }

    async function buscarProduto(produtos: any) {

    }

    async function criarProdutos(produtos: any) {

    }

    async function atualizarProdutos(produtos: any) {

    }

    async function deletarProduto(produtos: any) {

    }

    useEffect(() => {
        buscaProdutos()

    }, [])

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