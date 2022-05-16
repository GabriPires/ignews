import Image from 'next/image';

import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={'100%'}
          height={'100%'}
        />
        <nav>
          <a href="/home" className={styles.active}>
            Home
          </a>
          <a href="/posts">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};