import NewsCard from "../../components/Home/NewsCard/NewsCard";

const Archive = () => {
  return (
    <main className="mx-auto flex w-[80%] flex-col gap-y-2 overflow-y-auto pr-1">
      <NewsCard
        title="Noticia"
        description="Descripción"
        content="Contenido"
        author="Autor"
        date="Fecha"
        archivedDate="Fecha de archivado"
      />
      <NewsCard
        title="Noticia"
        description="Descripción"
        content="Contenido"
        author="Autor"
        date="Fecha"
      />
    </main>
  );
};

export default Archive;
