import { useFormik } from 'formik'
import { useState } from 'react/cjs/react.development'
import { UserCirle, EyeOn, EyeOff } from '../../../assets/Icons'
import styles from './styles.module.css'
import * as Yup from 'yup'

const SignIn = () => {
    const [show, setShow] = useState(false)

    const formik = useFormik({
        initialValues: {
          username: '',
          password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().min(8, 'Debe tener 8 caracteres').max(16, 'Debe tener 16 caracteres').required('Este campo es requerido'),
            password: Yup.string().min(8, 'Debe tener 8 caracteres').max(16, 'Debe tener 16 caracteres').required('Este campo es requerido')
        }),
        onSubmit: values => {
          alert(JSON.stringify(values));
        },
    });

    return (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.form__header}>
                <h2 className={styles.form__headerTitle}>Sign In</h2>
                <UserCirle className={styles.form__headerIcon} />
            </div>
            <div className={styles.form__body}>
                <div className={styles.mb_3}>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        className={styles.input__control} 
                        placeholder='Usuario'
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        autoComplete='off'
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div className={styles.form__error}>{formik.errors.username}</div>
                    ) : null}
                </div>
                <div className={styles.mb_3}>
                    <input 
                        type={show ? 'text' : 'password'} 
                        name="password" 
                        id="password" 
                        className={styles.input__control} 
                        placeholder='Contraseña'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <div className={styles.eye__control} onClick={() => setShow(!show)}>
                        { show ? <EyeOn /> : <EyeOff />}
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                        <div className={styles.form__error}>{formik.errors.password}</div>
                    ) : null}
                </div>
            </div>
            <div className={styles.form__footer}>
                <button type="submit">Iniciar Sesion</button>
            </div>
        </form>
    )
}

export default SignIn