import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut ,useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export const SignInButton = () => {

  const [ session ] = useSession();

  return session ? 
  (
    <button
      onClick={() => signOut()}
      type='button'
      className={styles.signInButton}
    >
      <FaGithub color='#04d361'/>
        Welcome, {session.user.name}!
      <FiX />
    </button>
  ) :
  (
    <button
      onClick={() => signIn('github')}
      type='button'
      className={styles.signInButton}
    >
      <FaGithub color='#eba417'/> 
        SignIn with Github
    </button>
  )
}