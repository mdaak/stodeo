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

            <div>
              <input
                placeholder="enter your email"
                {...register("email", { required: true })}
              />
                <br/>
              {errors.email && <spam>email required</spam>}
            </div>
            <br />
            <div>
            <input
              placeholder="enter your phone"
              {...register("phone", { required: true })}
            /><br/>
            {errors.phone && <span>phone nunber required</span>}

            </div>
           
            <div>
            <input placeholder="enter your address" {...register("address")} /><br/>
            {errors.address && <span> email address required </span>}
            </div>

           <div>
           <textarea
              id={styles.massage}
              placeholder="massage"
              {...register("massage")}
            />
           </div>
           

            <div id={styles.submitBtn}>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormData;
