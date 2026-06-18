"use client"
// "use server"
import "./usuarios.css"
import { useEffect, useState } from "react";



interface Usuario {
  nome: string,
  email: string
}

export default function UsuariosClient() {


  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {

    buscarUsuarios()

  }, [])

  async function buscarUsuarios() {
    const reponse = await fetch("http://localhost:3000/api/usuarios")

    const usuarios = await reponse.json()
    console.log(usuarios);

    setUsuarios(usuarios)
  }


  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">




        <h1>USUARIOS</h1>

        <div className="blueviolet-custon">minha cor </div>


        {usuarios.map((user: Usuario) => {
          return (
            <div>
              {user.nome} - {user.email}
            </div>
          )
        })}

      </main>
    </div>
  );
}
