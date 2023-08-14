'use client'
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

const Payment: React.FC = () => {
  const router = useRouter();
  router.push('/other-page');

  return null;
};

export default Payment;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/other-page',
      permanent: false,
    },
  };
};
