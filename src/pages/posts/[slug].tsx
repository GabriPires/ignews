import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { RichText } from 'prismic-dom';
import { prismicClient } from '../../services/prismic';

interface PostPageProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

const Post = ({ post }: PostPageProps) => {
  return <h1>Teste</h1>;
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  const { slug } = params;

  const response = await prismicClient.getByUID('post', String(slug));

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
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
