import { useState } from 'react';
import { FaGithub, FaXbox } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export const SignInButton = () => {

  const [ isUserLogged, setIsUserLogged ] = useState(true);

  return isUserLogged ? 
  (
    <button
      type='button'
      className={styles.signInButton}
    >
      <FaGithub color='#04d361'/> 
        Welcome, Gabriel!
      <FiX />
    </button>
  ) :
  (
    <button
      type='button'
      className={styles.signInButton}
    >
      <FaGithub color='#eba417'/> 
        SignIn with Github
    </button>
  )
}