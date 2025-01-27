import NewsCard from "./components/Home/NewsCard/NewsCard";
import CustomLink from "./components/Ui/CustomLink/CustomLink";

const App = () => {
  return (
    <main className="h-screen bg-gray-100 p-2">
      <header className="mb-2 w-full">
        <h1 className="mb-2 text-3xl font-bold">NOTICIARIO SEMANAL</h1>
        <nav className="space-x-4 border-b border-gray-500">
          <CustomLink href="#" title="Noticias" />
          <CustomLink href="#" title="Noticias archivdas" />
        </nav>
      </header>

      <section className="mx-auto flex h-screen w-[80%] flex-col gap-y-2 overflow-y-auto">
        <NewsCard />

        <article className="grid-cols-3 bg-red-500">
          <div>
            <h3>Noticia</h3>
            <p>Descripción</p>
            <button>Ver noticia</button>
          </div>

          <div>
            <h3>Noticia</h3>
            <p>Descripción</p>
            <button>Ver noticia</button>
          </div>

          <div>
            <h3>Noticia</h3>
            <p>Descripción</p>
            <button>Ver noticia</button>
          </div>

          <div>
            <h3>Noticia</h3>
            <p>Descripción</p>
            <button>Ver noticia</button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default App;
