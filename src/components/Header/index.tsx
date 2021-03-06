import { SignInButton } from '../SignInButton';
import Link from 'next/link';

import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href='/' prefetch>
          <img src="/images/logo.svg" alt="ig.news" />
        </Link>

        <nav>
          <ActiveLink prefetch activeClassName={styles.active} href='/'>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink prefetch activeClassName={styles.active} href='/posts'>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}