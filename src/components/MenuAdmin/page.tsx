import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Logo from '../../../public/logo.png';
import Link from 'next/link';



const Menu = () => {
  return (
    <header className={styles.body}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Logo da Biblioteca Next" layout="intrinsic" className={styles.logo} />
        </div>
        <ul className={styles.nav_links}>
          <li><Link href="/homeAdmin">Home</Link></li>
          <li><Link href="/homeAdmin/livros">Livros</Link></li>
          <li><Link href="/homeAdmin/categoria">Categoria</Link></li>
          <li><Link href="/homeAdmin/autor">Autor</Link></li>
          <li><Link href="/homeAdmin/catalogacao">Catalogação</Link></li>
          <li><Link href="/homeAdmin/emprestimo">Empréstimo</Link></li>
          <li><Link href="/homeAdmin/devolucao">Devolução</Link></li>         
        </ul>
      </nav>
    </header>
    
  );
};

export default Menu;