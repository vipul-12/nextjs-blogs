import React, { useState } from "react";
import styles from "../styles/Contact.module.css"
import axios from "axios";

type ContactForm = {
  name: string;
  email: string;
  phoneNo: string;
  message: string;
}

type ContactState = {
  form: ContactForm;
}

const Contact = () => {
  const [state, setState] = useState<ContactState>({
    form: {
      name: "",
      phoneNo: "",
      email: "",
      message: "",
    }
  });

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8000/api/postContact", state.form);
    console.log(response);

    const defaultForm: ContactForm = {
      name: "",
      phoneNo: "",
      email: "",
      message: "",
    }
    setState((state: ContactState) => ({
      ...state,
      form: defaultForm,
    }));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newForm: ContactForm = state.form;
    switch (e.target.name) {
      case "name":
        newForm.name = e.target.value;
        break;

      case "email":
        newForm.email = e.target.value;
        break;

      case "phoneNo":
        newForm.phoneNo = e.target.value;
        break;

      case "message":
        newForm.message = e.target.value;
        break;

    }

    setState((state: ContactState) => ({
      ...state,
      form: newForm,
    }))
  };

  return (
    <div className={styles.container}>
      <h1>
        Contact us
      </h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formLabel}>Name</label>
          <input type="text" value={state?.form.name} onChange={handleChange} className={styles.formControl} id="name" name="name" />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formLabel}>Phone Number</label>
          <input type="text" value={state?.form.phoneNo} onChange={handleChange} className={styles.formControl} id="phoneNo" name="phoneNo" />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formLabel}>Email address</label>
          <input type="email" value={state?.form.email} onChange={handleChange} className={styles.formControl} id="email" name="email" />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formLabel}>Message</label>
          <textarea className={styles.formControl} value={state?.form.message} onChange={handleChange} id="message" name="message" placeholder="Write here" />
        </div>


        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
