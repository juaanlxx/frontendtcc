import Head from 'next/head';
import styles from './page.module.scss';
import logo from '../../public/logo.png';
import Image from 'next/image';
import { api } from '@/services/api';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'

export default function Login() {
  async function handleLogin(formData: FormData){
    "use server"

    const email = formData.get("email")
    const password = formData.get("password")

    if ( email === "" || password === ""){
      return;
    }
 
    try{

      const response = await api.post('/session', {
        email,
        password
      })

      console.log(response.data);

      const expressTime = 60 * 60 * 24 * 30 * 1000;
      cookies().set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production"
      })

    }catch(err){
      console.log(err);
      return;
    }

    redirect("/homeUser")
  }


  return (
    <>
      <div className={styles.all}>
        <div className={styles.body}>
          <Head>
            <title>Biblioteca Next</title>
            <link rel="stylesheet" href="/styles/globals.scss" />
          </Head>
          <div className={styles.container}>
            <div className={styles.block}>
              <div className={styles.logo}>
                <Image src={logo} alt="Logo da Biblioteca Next" layout="intrinsic" />
              </div>
              <h4>Login</h4>
              <form action={handleLogin} className={styles.form}>
                <input type="email" required name="email" placeholder="Digite seu email" className={styles.input} />
                <input type="password" required name="password" placeholder="Digite sua senha" className={styles.input} />
                <button type="submit" className={styles.button}>Entrar</button>
              </form>
              <a href='/cadastro' className={styles.link}>Não tem uma conta?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
