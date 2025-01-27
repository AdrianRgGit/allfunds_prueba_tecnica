const NotFound = () => {
  return (
    <main className="flex h-[95vh] items-center justify-center">
      <p className="rounded bg-white p-8 text-3xl shadow">
        No se encuentra esta página{" "}
        <a href="/" className="font-bold text-blue-500 hover:underline">
          Inicio
        </a>
      </p>
    </main>
  );
};

export default NotFound;
