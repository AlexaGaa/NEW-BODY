"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="flex min-h-screen items-center justify-center">
      {!session ? (
        <button
          onClick={() => signIn("github")}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Iniciar sesión con GitHub
        </button>
      ) : (
        <div className="text-center">
          <p>Bienvenida {session.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="mt-4 bg-red-500 text-white px-6 py-3 rounded"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  )
}