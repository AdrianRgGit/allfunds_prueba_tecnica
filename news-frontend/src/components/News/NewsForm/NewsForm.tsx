import { Form, Formik } from "formik";
import * as Yup from "yup";
import CustomTextField from "../../Ui/CustomTextField/CustomTextField";
import CustomButton from "../../Ui/CustomButton/CustomButton";
import { useNewsStore } from "../../../store/newsStore";
import { useNavigate } from "react-router-dom";

// NOTE: VALIDACIÓN DE FORMULARIO CON YUP
const NewsSchema = Yup.object({
  title: Yup.string(),
  description: Yup.string(),
  content: Yup.string(),
});

// NOTE: FORMULARIO DE CREACIÓN DE NOTICIAS
const NewsForm = () => {
  const { createNew } = useNewsStore();
  const navigate = useNavigate();

  // NOTE: VALORES POR DEFECTO
  const initialValues = {
    title: "",
    description: "",
    content: "",
  };

  // NOTE: ENVÍO DEL FORMULARIO Y REDIRECCIONAMIENTO A HOME
  const handleSubmit = (values: any) => {
    createNew(values);
    navigate("/");
  };

  // NOTE: UTILIZO FORMIK PARA CREAR EL FORMULARIO Y VALIDACIÓN CON YUP
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
