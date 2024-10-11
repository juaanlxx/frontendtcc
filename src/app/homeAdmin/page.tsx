import styles from './page.module.scss';
import MenuAdmin from '../../components/MenuAdmin/page';
import Image from 'next/image';
import IconAutor from '../../../public/image 17.png';
import IconCategoria from '../../../public/image 18.png';
import Banner from '../../../public/Página Bibliotecário.png';
import Bibliotecario from '../../../public/homeBibliotecario.png';


export default function Home() {
    return (
        <>
            <MenuAdmin />
            <main className={styles.container}>
                <div className={styles.cardsContainer}>
                    <div className={styles.alignCards}>
                        <div className={styles.card}>
                            <a href="/homeAdmin/autor">
                                <div className={styles.content}>
                                    <Image src={IconAutor} className={styles.icon} alt='Ícone de Folha com uma caneta de pena' />
                                    <h3>Adicionar Autor</h3>
                                </div>
                            </a>
                        </div>

                        <div className={styles.card}>
                            <a href="/homeAdmin/categoria">
                                <div className={styles.content}>
                                    <Image src={IconCategoria} className={styles.icon} alt='Ícone de Livro' />
                                    <h3>Adicionar Categoria</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <Image src={Bibliotecario} className={styles.image} alt='Imagem de um bibliotecário' />
                </div>
                <Image src={Banner} className={styles.imageFull} alt='Banner com a importância do bibliotecário' />
            </main>
        </>
    );
}