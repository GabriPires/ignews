import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { client } from '../../services/prismic';
import styles from './styles.module.scss';

interface PostsProps {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsPageProps {
  posts: PostsProps[];
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <a href={'#'} key={post.slug}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.getAllByType('post', {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  });

  const posts = response.map((post) => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    excerpt:
      post.data.content.find(
        (content: { type: string }) => content.type === 'paragraph',
      )?.text ?? '',
    updatedAt: new Date(post.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
  }));

  return {
    props: { posts },
  };
};
