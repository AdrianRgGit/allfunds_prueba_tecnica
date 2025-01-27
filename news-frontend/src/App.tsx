import NewsCard from "./components/Home/NewsCard/NewsCard";
import CustomLink from "./components/Ui/CustomLink/CustomLink";

const App = () => {
  return (
    <main className="flex h-screen flex-col bg-gray-100 p-2">
      <header className="mb-2 w-full flex-shrink-0">
        <h1 className="mb-2 text-3xl font-bold">NOTICIARIO SEMANAL</h1>
        <nav className="space-x-4 border-b border-gray-500">
          <CustomLink href="#" title="Noticias" />
          <CustomLink href="#" title="Noticias archivadas" />
        </nav>
      </header>

      <section className="mx-auto flex w-[80%] flex-1 flex-col gap-y-2 overflow-y-auto">
        <NewsCard
          title="Noticia"
          description="Descripción"
          content="Contenido"
          author="Autor"
          date="Fecha"
        />
        <NewsCard
          title="Noticia"
          description="Descripción"
          content="Contenido"
          author="Autor"
          date="Fecha"
        />
        <NewsCard
          title="Noticia"
          description="Descripción"
          content="Contenido"
          author="Autor"
          date="Fecha"
        />
        <NewsCard
          title="Noticia"
          description="Descripción"
          content="Contenido"
          author="Autor"
          date="Fecha"
        />
        <NewsCard
          title="Noticia"
          description="Descripción"
          content="Contenido"
          author="Autor"
          date="Fecha"
        />
        <NewsCard
          title="Noticia"
          description="Descripción"
          content="Contenido"
          author="Autor"
          date="Fecha"
        />
      </section>
    </main>
  );
};

export default App;
