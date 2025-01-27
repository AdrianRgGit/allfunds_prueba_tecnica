const NoNewsToShow = () => {
  return (
    <main className="mx-auto flex w-[80%] flex-col gap-y-2">
      <div className="text-center">
        <h2 className="text-2xl font-bold">No hay noticias para mostrar</h2>
        <p>
          ¡Sé el primero en{" "}
          <a href="/create-new" className="text-blue-500 hover:underline">
            públicar
          </a>{" "}
          o vuelve a{" "}
          <a href="/" className="text-blue-500 hover:underline">
            inicio
          </a>{" "}
          a esperar que alguien publique!
        </p>
      </div>
    </main>
  );
};

export default NoNewsToShow;
