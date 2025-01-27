const NewsCard = () => {
  return (
    <article className="space-y-2 rounded border p-2 shadow">
      <h2 className="text-2xl font-bold">Título</h2>
      <p>Descripción</p>
      <p className="text-sm text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eaque
        labore quos ex adipisci sit, accusantium ducimus voluptatem suscipit
        sint qui, beatae cumque ad deleniti! Placeat corrupti consequuntur
        blanditiis ea! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Laudantium assumenda neque iure nulla repellat maxime accusamus ipsum
        reprehenderit adipisci amet voluptas libero quasi recusandae sunt ab
        aliquam molestiae, nisi voluptates?
      </p>
      <div className="flex justify-between">
        <div className="space-x-2">
          <small>Autor</small>
          <small>fecha publicación</small>
        </div>
        <button>Ver noticia</button>
      </div>
    </article>
  );
};

export default NewsCard;
