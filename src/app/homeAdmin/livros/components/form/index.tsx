"use client";

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { api } from '@/services/api'; // Importando a API
import { getCookieClient } from '@/lib/cookieClient'; // Função para pegar o cookie
import { toast } from 'sonner'; // Notificações

interface BookProps {
  title: string;
  isbn: string;
  editor: string;
  publicationYear: string;
  availableQuantity: number;
  volume: string;
  numberPages: number;
  banner: string; // URL da imagem armazenada no banco
}

export function Form() {
  const [books, setBooks] = useState<BookProps[]>([]); // Estado para armazenar os livros

  // Função para buscar os livros do banco de dados
  async function fetchBooks() {
    const token = getCookieClient(); // Pega o token de autenticação

    try {
      const response = await api.get('/livros', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Verifica os dados recebidos
      const receivedBooks = response.data;
      console.log(receivedBooks); // Verifica os dados recebidos no console

      // Ordena os livros por título em ordem alfabética
      const sortedBooks = receivedBooks.sort((a: BookProps, b: BookProps) => 
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()) // Converte para minúsculas para evitar problemas de case-sensitive
      );

      setBooks(sortedBooks);
    } catch (err) {
      console.error(err); // Log do erro detalhado
      toast.warning('Falha ao carregar os livros.');
    }
  }

  // useEffect para buscar os dados ao carregar o componente
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <main className={styles.container}>
      <h1>Livros</h1>

      <form className={styles.form}>
        <div className={styles.cardContainer}>
          {/* Mapeia os livros do estado e cria um card para cada um */}
          {books.map((book) => (
            <div key={book.isbn} className={styles.card}>
              <img
                alt={`Capa do livro ${book.title}`}
                className={styles.cardImage}
                src={`http://localhost:3333/files/${book.banner}`}
                height={200}
                width={150}
              />
              <h2 className={styles.cardTitle}>{book.title}</h2>
              <div className={styles.buttonContainer}>
                <button className={styles.editButton}>Editar</button>
                <button className={styles.deleteButton}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
      </form>
    </main>
  );
}
