import NewsForm from "../../components/News/NewsForm/NewsForm";

// NOTE: PAGINA DE CREACIÓN DE NOTICIAS
const CreateNew = () => {
  return (
    <main className="mx-auto w-[80%]">
      <h2 className="mb-4 text-center text-2xl font-bold">Crear Noticia</h2>
      <NewsForm />
    </main>
  );
};
export default CreateNew;
