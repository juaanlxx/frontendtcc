import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import styles from '../page.module.scss';
import { api } from '@/services/api';
import { redirect } from 'next/navigation';

export default function Cadastro() {
    
    async function handleRegister(formData: FormData){
        "use server"

        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")
        const phone = formData.get("phone")
        const address = formData.get("address")
        const cpf = formData.get("cpf")

        if ( name === "" || email === "" || password === "" || phone === "" || address === "" || cpf === ""){
            return;
        }

        try{
            await api.post("/users", {
                name,
                email,
                password,
                phone,
                address,
                cpf
            })
        }catch(err){
            console.log("error")
            console.log(err)
        }

        redirect('/')
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
                                <Image src={Logo} alt="Logo da Biblioteca Next" layout="intrinsic" />
                            </div>
                            <h4>Cadastro</h4>
                            
                            <form action={handleRegister} className={styles.form}>
                                <input type="text" required name="name" placeholder="Digite seu nome completo" className={styles.input} />
                                <input type="email" required name="email" placeholder="Digite seu email" className={styles.input} />
                                <input type="password" required name="password" placeholder="Crie uma senha" className={styles.input} />
                                <input type='text' required name="phone" placeholder='Digite seu telefone' className={styles.input} />
                                <input type="text" required name="address" placeholder='Digite seu endereço' className={styles.input} />
                                <input type="text" required name="cpf" placeholder='Digite seu CPF' className={styles.input} />
                                <button type="submit" className={styles.button}>Cadastrar</button>
                            </form>
                            <a href='/login' className={styles.link}>Já tem uma conta?</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
