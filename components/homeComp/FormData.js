import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/home/FormData.module.css";

const FormData = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.form}>
      <div className={styles.formData}>
        <div className={styles.formCard}>
          <div>
            <h1>Contact Us</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="enter your name" {...register("name")} />

            <input
              placeholder="enter your email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <spam>email required</spam>}

            <input
              placeholder="enter your phone"
              {...register("phone", { required: true })}
            />

            {errors.phone && <span>phone nunber required</span>}

            <input placeholder="enter your address" {...register("address")} />
            <br />
            <textarea
              id={styles.massage}
              placeholder="massage"
              {...register("massage")}
            />
            <br />
            <div id={styles.submitBtn}>
              <input type="submit" />
            </div>

            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormData;
