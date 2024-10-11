import { Form } from './components/form'
import Menu from '@/components/MenuAdmin/page'
import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'

export default async function Product(){

    const token = getCookieServer();

    const categoryResponse = await api.get("/category", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })


    const authorResponse = await api.get("/author", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })


    return(
        <main>
        <Menu />
        <Form categories={categoryResponse.data} authors={authorResponse.data}/>
        </main>
    )
}