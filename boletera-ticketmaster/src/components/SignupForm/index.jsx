import { useForm } from "react-hook-form";

const SignupForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  const handleClearClick = () => {
    reset();
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name
        <input {...register('name', { required: true })} />
      </label>
      <br />
      <label>
        Age
        <input {...register('age', { required: true })} />
      </label>
      <br />
      <label>
        Address
        <input {...register('address', { required: true })} />
      </label>
      <br />
      <label>
        Zipcode
        <input {...register('zipcode', { required: true })} />
      </label>
      <br />
      <label>
        Phone
        <input {...register('phone', { required: true })} />
      </label>
      <div>
        <button type="button" onClick={handleClearClick}>Clear</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;