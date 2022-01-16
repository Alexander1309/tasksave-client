import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'

const Auth = () => {
    return (
        <div className={styles.container__all}>
            <header className={styles.header}>
                <h1 className={styles.header__title}>TaskSave</h1>
            </header>

            <Outlet />
        </div>
    )
}

export default Auth