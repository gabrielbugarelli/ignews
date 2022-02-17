import Head from 'next/head';
import styles from './styles.module.scss';

const Posts = () => {
  return (
    <>
      <Head> 
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href=''>
            <time> Data do Post</time> 

            <strong>Título do post</strong>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio nisi blanditiis distinctio maiores assumenda fugit. Qui, totam vel! Inventore ullam et quas! Fugiat officiis aspernatur aliquam rem eveniet repudiandae.
            </p>
          </a>

          <a href=''>
            <time> Data do Post</time> 

            <strong>Título do post</strong>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio nisi blanditiis distinctio maiores assumenda fugit. Qui, totam vel! Inventore ullam et quas! Fugiat officiis aspernatur aliquam rem eveniet repudiandae.
            </p>
          </a>

          <a href=''>
            <time> Data do Post</time> 

            <strong>Título do post</strong>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio nisi blanditiis distinctio maiores assumenda fugit. Qui, totam vel! Inventore ullam et quas! Fugiat officiis aspernatur aliquam rem eveniet repudiandae.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

export default Posts;