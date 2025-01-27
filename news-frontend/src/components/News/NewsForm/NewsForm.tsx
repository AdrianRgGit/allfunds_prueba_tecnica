import { Form, Formik } from "formik";
import * as Yup from "yup";
import CustomTextField from "../../Ui/CustomTextField/CustomTextField";
import CustomButton from "../../Ui/CustomButton/CustomButton";

const NewsSchema = Yup.object({
  title: Yup.string(),
  description: Yup.string(),
  content: Yup.string(),
});

const NewsForm = () => {
  const initialValues = {
    title: "",
    description: "",
    content: "",
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={NewsSchema}
      onSubmit={handleSubmit}
    >
      <Form className="grid grid-cols-2 gap-x-2 gap-y-4">
        <CustomTextField
          type="text"
          name="title"
          label="Titulo"
          placeholder="Título"
          required
        />
        <CustomTextField
          type="text"
          name="description"
          label="Descripción"
          placeholder="Descripción"
          required
        />
        <div className="col-span-2">
          <CustomTextField
            as="textarea"
            type="text"
            name="content"
            label="Contenido"
            placeholder="Contenido"
            required
          />
        </div>

        <div className="col-span-2 m-auto">
          <CustomButton type="submit">Crear Noticia</CustomButton>
        </div>
      </Form>
    </Formik>
  );
};

export default NewsForm;
