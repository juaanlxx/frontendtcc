import styles from './styles.module.scss';
import MenuAdmin from '../../../components/MenuAdmin/page'
import { api } from '@/services/api';
import { getCookieServer } from '@/lib/cookieServer';
import { redirect } from 'next/navigation';

export default function Autor() {
    async function handleRegisterAuthor(formData: FormData){
        "use server"

        const name = formData.get("name")

        if(name === "") return;

        const data = {
            name: name,
        }

        const token = getCookieServer();

        await api.post("/author", data, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .catch((err) => {
            console.log(err);
        })

        redirect("/homeAdmin")
    }

    return (    <>
            <header>
            <MenuAdmin />
            </header>
            <main>
                <section className={styles.container}>
                    <form action={handleRegisterAuthor}>
                        <h1>Adicionar Autor</h1>
                        <label>
                        Nome do Autor
                        </label>
                        <input type="text" name="name" required placeholder='Nome do Autor' />
                        <button type='submit'>Adicionar</button>
                    </form>
                </section>

            </main>
        </>

    );
}