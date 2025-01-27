const NoArchiveNewsToShow = () => {
  return (
    <main className="mx-auto flex w-[80%] flex-col gap-y-2">
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          No tienes ninguna noticia archivada
        </h2>
        <p>
          Vuelve a {" "}
          <a href="/" className="text-blue-500 hover:underline">
            inicio
          </a>{" "}
          y archiva alguna
        </p>
      </div>
    </main>
  );
};

export default NoArchiveNewsToShow;
