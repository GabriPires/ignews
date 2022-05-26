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
          <a href={'#'}>
            <time>12 de março de 2022</time>
            <strong>Título do post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              exercitationem, porro dolore a ratione sed consectetur iure
              repudiandae quibusdam officia, quidem natus deleniti placeat,
              perferendis dolor nesciunt molestiae ipsam omnis.
            </p>
          </a>

          <a href={'#'}>
            <time>12 de março de 2022</time>
            <strong>Título do post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              exercitationem, porro dolore a ratione sed consectetur iure
              repudiandae quibusdam officia, quidem natus deleniti placeat,
              perferendis dolor nesciunt molestiae ipsam omnis.
            </p>
          </a>

          <a href={'#'}>
            <time>12 de março de 2022</time>
            <strong>Título do post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              exercitationem, porro dolore a ratione sed consectetur iure
              repudiandae quibusdam officia, quidem natus deleniti placeat,
              perferendis dolor nesciunt molestiae ipsam omnis.
            </p>
          </a>
        </div>
      </main>
    </>
  );
};

export default Posts;
