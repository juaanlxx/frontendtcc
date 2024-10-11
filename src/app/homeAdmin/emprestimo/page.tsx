import styles from './styles.module.scss'; // Importando os estilos
import MenuAdmin from '../../../components/MenuAdmin/page'; // Importando o menu do admin
import { api } from '@/services/api'; // Importando o serviço da API
import { redirect } from 'next/navigation'; // Importando o redirecionamento
import { getCookieServer } from '@/lib/cookieServer'; // Função para pegar o cookie

export default function Emprestimo() {
    async function handleRegisterLoan(formData: FormData) {
        "use server"; // Marcação para indicar que esta função é executada no servidor

        const userEmail = formData.get("userEmail")?.toString(); // Obtém o email do usuário
        const bookIsbn = formData.get("bookIsbn")?.toString(); // Obtém o ISBN do livro

        if (!userEmail || !bookIsbn) return; // Verifica se os campos estão preenchidos

        const data = {
            userEmail,
            bookIsbn, // Agora enviamos o ISBN
        };

        const token = getCookieServer(); // Obtém o token de autenticação

        // Envia a requisição POST para criar o empréstimo
        await api.post("/emprestimo", data, {
            headers: {
                Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
            }
        })
        .catch((err) => {
            console.log(err); // Lida com erros
        });

        redirect("/homeAdmin"); // Redireciona após o sucesso
    }

    return (
        <>
            <MenuAdmin />

            <main>
                <section className={styles.container}>
                    <form action={handleRegisterLoan}>
                        <h1>Empréstimo</h1>

                        <h3>Livro</h3>

                        <h4>ISBN do Livro</h4>
                        <input type="text" placeholder='ISBN' name='bookIsbn' required />

                        <h3>Usuário</h3>
                        <h4>Email do Usuário</h4>
                        <input type="text" placeholder='Email' name='userEmail' required />

                        <button>Emprestar</button>
                    </form>
                </section>
            </main>
        </>
    );

    }
    

