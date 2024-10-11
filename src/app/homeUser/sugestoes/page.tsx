import styles from './styles.module.scss'
import Menu from '../../../components/MenuUsuario/page';
import { getCookieServer } from '@/lib/cookieServer';
import { api } from '@/services/api'
import { error } from 'console';
import { Redirect } from 'next';
import { redirect } from 'next/navigation';


export default function Sugestao(){
    async function handleRegisterSuggestion(formData: FormData) {
    'use server'
        const subject = formData.get("subject")
        const suggestedBook = formData.get("suggestedBook")

        if (!subject || !suggestedBook) {
            console.log(error)
            return;
        }

        const data = {
            subject: subject,
            suggestedBook: suggestedBook,
        }


        const token = getCookieServer()       

        await api.post("/suggestion", data, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .catch((err) => {
            console.log(err);
        })
        
        console.log("CERTO")
        redirect("/homeUser")
    }


    return(
        <>
        <Menu />
        <main className={styles.container}>
        
            <h1>Sugestão de Livros</h1>
            <form action={handleRegisterSuggestion} className={styles.form}>
                <label>Categoria</label>
                <input type="text" className={styles.input} name='subject' placeholder='Digite o nome da categoria do livro' required/>
                <label>Nome do Livro</label>
                <input type="text" className={styles.input} name='suggestedBook' placeholder='Digite o nome do livro desejado' required />
                <button type='submit'>Enviar Sugestão</button>
            </form>
        </main>
        </>
    )
}
