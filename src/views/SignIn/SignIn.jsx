import styles from './styles.module.css'

const SignIn = () => {
    return (
        <form className={styles.form}>
            <div className={styles.form__header}>
                <h2 className={styles.form__headerTitle}>Sign In</h2>
            </div>
            <div className={styles.from__body}>
                <div className={styles.mb_3}></div>
                <div className={styles.mb_3}></div>
            </div>
            <div className={styles.from__footer}></div>
        </form>
    )
}

export default SignIn