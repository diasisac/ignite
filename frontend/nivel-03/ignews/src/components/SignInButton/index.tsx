import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignIButton(){

    const isUserLoggedIn=true;

    return isUserLoggedIn ? (
        <button 
        className={styles.signInButton}
        type="button">
            <FaGithub color="#04d361"/>
            Isac Dias
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ):
    (
        <button 
        className={styles.signInButton}
        type="button">
            <FaGithub color="#eba417"/>
            Sing with Github
        </button>
    )
}

