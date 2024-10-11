import styles from './styles.module.scss';
import MenuAdmin from '../../../components/MenuAdmin/page'
import { api } from '@/services/api';
import { redirect } from 'next/navigation';
import { getCookieServer } from '@/lib/cookieServer';

export default function Categoria() {
    async function handleRegisterCategory(formData: FormData){
        "use server"

        const name = formData.get("name")

        if(name === "") return;

        const data = {
            name: name,
        }

        const token = getCookieServer();

        await api.post("/category", data, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .catch((err) => {
            console.log(err);
        })

        redirect("/homeAdmin")
    }

    return (
        <>
            <header>
                <MenuAdmin />
            </header>
            <main>
                <section className={styles.container}>
                <h1>Adicionar Categoria</h1>
                    <form action={handleRegisterCategory}>
                    <label>
                        Nome da Categoria
                        </label>
                    <input type="text" name="name" placeholder='Nome da Categoria' required />
                    <button type='submit'>Adicionar</button>
                    </form>
                </section>

            </main>
        </>

    );
}