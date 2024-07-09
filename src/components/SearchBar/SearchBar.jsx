import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

const initValues = {
  query: "",
};

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    const query = values.query.trim();
    if (query === "") {
      return;
    }
    onSubmit({ query });
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            type="text"
            placeholder="What film now?"
          />
          <button className={css.sendBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
}
