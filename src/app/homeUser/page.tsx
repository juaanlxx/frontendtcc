import styles from '../homeUser/styles.module.scss';
import Menu from '../../components/MenuUsuario/page';
import Image from 'next/image';
import Imagem1 from "../../../public/imagem1Home.png";
import Imagem2 from "../../../public/imagem2Home.png";
import Imagem3 from "../../../public/imagem3Home.png";
import Imagem4 from "../../../public/imagem4Home.png";
import Imagem5 from "../../../public/imagem5Home.png";
import Imagem6 from "../../../public/imagem6Home.png";
import Imagem7 from "../../../public/LEITOR 1.png";

export default function Home() {
  return (
    <>
      <Menu />

      <main className={styles.mainContainer}>
        <div className={styles.row1}>
          <Image src={Imagem1} className={styles.icon} alt='Memórias Póstumas de Brás Cubas' />
          <Image src={Imagem2} className={styles.icon} alt='Dom Casmurro' />
          <Image src={Imagem3} className={styles.iconBanner} alt='Coleção Machado de Assis' />
        </div>
        <div className={styles.row2}>
          <Image src={Imagem4} className={styles.iconBanner} alt='Quincas Borba' />
          <Image src={Imagem5} className={styles.icon} alt='O Alienista' />
          <Image src={Imagem6} className={styles.icon} alt='Imagem de Machado de Assis' />
        </div>
        <hr className={styles.linha}/>
        <Image src={Imagem7} className={styles.banner} alt='Banner dia do leitor' />
      </main>
    </>
  );
}
