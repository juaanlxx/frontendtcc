import { Form } from './components/form'
import Menu from '@/components/MenuAdmin/page'
import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'

export default async function Livros(){

    const token = getCookieServer();
    
    await api.get("/livros", {
        headers: {
            Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
        }
    })

    return(
        <main>
        <Menu />
        <Form />
        </main>
    )
}

