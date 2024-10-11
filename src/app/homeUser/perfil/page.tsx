import styles from './styles.module.scss';
import Menu from '../../../components/MenuUsuario/page';
import Image from 'next/image';
import Imagem1 from '../../../../public/perfil1.png'



export default function Perfil() {
    return (
        <>
        <Menu />
            <div className={styles.container}>
                <main className={styles['main-content']}>
                    <section className={styles['left-section']}>
                        <div className={styles['user-profile']}>
                            <h2>Usuário</h2>
                            <div className={styles['profile-picture']}>
                            <Image src={Imagem1} className={styles.icon} alt='Perfil' />
                            </div>
                            <button className={styles['edit-profile-btn']}>Editar Perfil</button>
                        </div>
                    </section>
                    <section className={styles['right-section']}>
                     
                        <div className={styles['personal-details']}>
                            <h3>Dados pessoais</h3>
                            <p><strong>CPF:</strong> 123.456.789-00</p>
                            <p><strong>Endereço:</strong> Rua Exemplo, 123</p>
                            <p><strong>Email:</strong> exemplo@email.com</p>
                        </div>

                       
                        <div className={styles['books-section']}>
                            <h3>Livros emprestados</h3>
                            <div className={styles['book-list']}>
                                <div className={styles['book-card']}></div>
                                <div className={styles['book-card']}></div>
                                <div className={styles['book-card']}></div>
                                <div className={styles['book-card']}></div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    );
}
