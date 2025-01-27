import { useEffect, useState } from "react";
import { useNewsStore } from "../../store/newsStore";
import NewsCard from "../../components/News/NewsCard/NewsCard";
import CustomLoadingSpinner from "../../components/Ui/CustomLoadingSpinner/CustomLoadingSpinner";

const Home = () => {
  const { news, totalPages, loading, error, getAllNews } = useNewsStore();
  const [localPage, setLocalPage] = useState(1); // Controla la página local

  useEffect(() => {
    getAllNews(localPage);
  }, [localPage, getAllNews]);

  const handleLoadMore = () => {
    if (localPage < totalPages) {
      setLocalPage((prevPage) => prevPage + 1);
    }
  };

  if (loading && news.length === 0) {
    return <CustomLoadingSpinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="mx-auto flex w-[80%] flex-col gap-y-2 overflow-y-auto pr-1">
      {news.map((newsItem) => (
        <NewsCard
          key={newsItem._id}
          title={newsItem.title}
          description={newsItem.description}
          content={newsItem.content}
          author={newsItem.author}
          archivedDate={
            newsItem.archiveDate
              ? new Date(newsItem.archiveDate).toLocaleDateString()
              : ""
          }
          date={new Date(newsItem.createdAt).toLocaleDateString()}
        />
      ))}

      {localPage < totalPages && (
        <button
          type="button"
          onClick={handleLoadMore}
          className="mt-4 cursor-pointer rounded bg-gray-300 px-4 py-2"
        >
          Ver más
        </button>
      )}
    </main>
  );
};

export default Home;
