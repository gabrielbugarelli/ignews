import { signIn, useSession } from 'next-auth/client';
import styles from './styles.module.scss';

type SubscribeButtonProps = {
  priceId: string
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps ) => {

  const [ session ] = useSession();

  const handleSubscribe = () => {
    if(!session) {
      signIn('github')
      return
    }
  }

  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}