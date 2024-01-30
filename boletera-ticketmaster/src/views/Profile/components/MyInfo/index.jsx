import { useForm } from 'react-hook-form';
import styles from './MyInfo.module.css';
import { useEffect } from 'react';

const USER_DATA = 'userData';

const MyInfo = () => {
  const { handleSubmit, register, setValue, formState: { errors } } = useForm();

 useEffect(() => {
  window.scrollTo(0, 0);
    try {
      const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};
      setValue('name', userData?.name);
      setValue('email', userData?.email);
      setValue('age', userData?.age);
    } catch (error) {
      console.error(error);
    }
 }, [setValue]);

  const handleFormSubmit = (data) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      alert('Usuario actualizado');
    } catch (error) {
      alert('Ha acurrido un error');
    }
  };

  if (Object.keys(errors).length > 0) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <label className={styles.label}>
        Name
        <input 
          {...register('name', {required: true, minLength: 1, maxLength: 120})} 
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Email
        <input 
          {...register('email', {required: true, minLength: 1, maxLength: 200})} 
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Age
        <input 
          type='number' 
          {...register('age', {required: true, min: 1, max: 120, valueAsNumber: true})} 
          className={styles.input}
        />
      </label>
      <button type='submit' className={styles.submitButton}>Save</button>
    </form>
  )
};

export default MyInfo;