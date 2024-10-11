"use client"

import { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'
import { UploadCloud } from 'lucide-react'
import Image from 'next/image'
import { api } from '@/services/api'
import { getCookieClient } from '@/lib/cookieClient'
import { toast } from 'sonner'

interface CategoryProps {
  id: string;
  name: string;
}

interface Props {
  categories: CategoryProps[]
  authors: AuthorProps[]
}

interface AuthorProps {
  id: string;
  name: string;
}



export function Form({ categories, authors }: Props) {

  async function handleRegisterBook(formData: FormData) {
    const title = formData.get("title")
    const isbn = formData.get("isbn")
    const editor = formData.get("editor")
    const publicationYear = formData.get("publicationYear")
    const availableQuantity = formData.get("availableQuantity")
    const categoryIndex = formData.get("categories")
    const authorIndex = formData.get("authors")
    const volume = formData.get("volume")
    const numberPages = formData.get("numberPages")

    if (!title || !isbn || !editor || !publicationYear || !availableQuantity || !categoryIndex || !authorIndex || !volume || !numberPages || !image) {
      toast.warning("Preencha todos os campos!")
      return;
    }

    const data = new FormData();

    data.append("title", title)
    data.append("isbn", isbn)
    data.append("editor", editor)
    data.append("publicationYear", publicationYear)
    data.append("availableQuantity", availableQuantity)
    data.append("categoriesId", categories[Number(categoryIndex)].id)
    data.append("authorId", authors[Number(authorIndex)].id)
    data.append("volume", volume)
    data.append("numberPages", numberPages)
    data.append("file", image)

    const token = getCookieClient();

    await api.post("/catalogacao", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .catch((err) => {
        console.log(err);
        toast.warning("Falha ao cadastrar o livro")
        return;
      })

    toast.success("Livro cadastrado com sucesso!")
  }

  const [image, setImage] = useState<File>()
  const [previewImage, setPreviewImage] = useState("")

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type !== "image/jpeg" && image.type !== "image/png") {
        console.log("FORMATO PROIBIDO!!!")
        return;
      }

      setImage(image);
      setPreviewImage(URL.createObjectURL(image))

    }
  }


  return (
    <main className={styles.container}>
      <h1>Novo Livro</h1>

      <form className={styles.form} action={handleRegisterBook}>
        <h3>
          Capa do Livro
        </h3>

        <label className={styles.labelImage}>
          <span>
            <UploadCloud size={30} color="#000" />
          </span>

          <input
            type="file"
            accept="image/png, image/jpeg"
            required
            onChange={handleFile}
          />

          {previewImage && (
            <Image
              alt="Imagem de preview"
              src={previewImage}
              className={styles.preview}
              width={100}
              height={150}
              fill={false}
              quality={100}
              priority={true}
            />
          )}

        </label>

        <h3>
          Nome do Livro
        </h3>
        <input type="text" name='title' placeholder='Digite o nome do Livro' required className={styles.input} />
        <h3>
          ISBN
        </h3>
        <input type="text" name="isbn" placeholder='Digite o ISBN do Livro' required className={styles.input} />
        <h3>
          Editora
        </h3>
        <input type="text" name="editor" placeholder='Digite a Editora do Livro' required className={styles.input} />
        <h3>
          Ano de Publicação
        </h3>
        <input type="text" name="publicationYear" placeholder='Digite o Ano de Publicação do Livro' required className={styles.input} />
        <h3>
          Quantidade de Exemplares
        </h3>
        <input type="text" name="availableQuantity" placeholder='Digite a Quantidade de Exemplares Disponíveis' required className={styles.input} />

        <h3>
          Categoria
        </h3>
        <select name="categories">
          {categories.map((category, index) => (
            <option key={category.id} value={index}>
              {category.name}
            </option>
          ))}
        </select>
        <h3>
          Autor
        </h3>
        <select name="authors">
          {authors.map((author, index) => (
            <option key={author.id} value={index}>
              {author.name}
            </option>
          ))}
        </select>
        <h3>
          Volume
        </h3>
        <input type="text" name="volume" placeholder='Digite o Volume do Livro' required className={styles.input} />
        <h3>
          Quantidade de Páginas
        </h3>
        <input type="text" name="numberPages" placeholder='Digite a Quantidade Páginas do Livro' required className={styles.input} />

        <button className='botao' type='submit'>Adicionar</button>

      </form>
    </main>
  )
}