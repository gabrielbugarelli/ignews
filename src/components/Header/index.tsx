import { SignInButton } from '../SignInButton';
import Link from 'next/link';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href='/' prefetch>
          <img src="/images/logo.svg" alt="ig.news" />
        </Link>
        <nav>
          <Link href='/' prefetch>
            <a className={styles.active}>Home</a>
          </Link>

          <Link href='/posts' prefetch>
            <a>Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}