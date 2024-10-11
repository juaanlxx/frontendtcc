import styles from './styles.module.scss'
import Menu from '../../../components/MenuUsuario/page';
import Facebook from '../../../../public/facebook.webp';
import Instagram from '../../../../public/instagram.png';
import X from '../../../../public/x.png';
import Whatsapp from '../../../../public/whatssap.png';
import Image from 'next/image';




export default function Contato() {
    return (
        <>
           <Menu />
            <div className={styles.container}>
                <h1>Siga nossas redes sociais</h1>
                <h2>Fique por dentro de todas as novidades de nossa Biblioteca</h2>

                <div className={styles.socialLinks}>
                    <div className={styles.socialLink}>
                        <Image src={Facebook} className={styles.icon} alt='Facebook' />
                        <h4>facebook.com/bibliotecanext</h4>
                    </div>

                    <div className={styles.socialLink}>
                        <Image src={Instagram} className={styles.icon2} alt='Instagram' />
                        <h4>instagram.com/bibliotecanext</h4>
                    </div>

                    <div className={styles.socialLink}>
                        <Image src={X} className={styles.icon2} alt='X' />
                        <h4>x.com/bibliotecanext</h4>
                    </div>

                    <div className={styles.socialLink}>
                        <Image src={Whatsapp} className={styles.icon} alt='Whatsapp' />
                        <h4>(14) 99647-2418</h4>
                    </div>
                </div>
            </div>
        </>
    );
}