import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Logo from '../../../public/logo.png';
import Perfil from '../../../public/perfil.png';
import Login from '../../../public/login.png';
import Link from 'next/link';


const Menu = () => {
  return (
    <header className={styles.body}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Logo da Biblioteca Next" layout="intrinsic" className={styles.logo} />
        </div>
        <ul className={styles.nav_links}>
          <li><Link href="/homeUser">Home</Link></li>
          <li><Link href="/homeUser/catalogo">Catálogo</Link></li>
          <li><Link href="/homeUser/sugestoes">Sugestões</Link></li>
          <li><Link href="/homeUser/contato">Contato</Link></li>
          <div className={styles.botao}>
        </div>
        <div className={styles.iconePerfil}>
        <Link href="/homeUser/perfil"><Image src={Perfil} alt="Icone de Perfil" layout="intrinsic" /></Link>
        </div>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;