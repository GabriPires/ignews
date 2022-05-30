import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { RichText } from 'prismic-dom';
import { prismicClient } from '../../../services/prismic';

import styles from '../post.module.scss';
import { useRouter } from 'next/router';

interface PostPreviewPageProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

const PostPreview = ({ post }: PostPreviewPageProps) => {
  const { data: session } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (session?.activeSubscription) {
      push(`/posts/${post.slug}`);
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href={'/'}>
              <a>Subscribe now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default PostPreview;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await prismicClient.getByUID('post', String(slug));

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
  };

  return {
    props: {
      post,
    },
  };
};
