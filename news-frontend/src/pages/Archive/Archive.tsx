import { useEffect, useState } from "react";
import NewsCard from "../../components/News/NewsCard/NewsCard";
import CustomLoadingSpinner from "../../components/Ui/CustomLoadingSpinner/CustomLoadingSpinner";
import { useNewsStore } from "../../store/newsStore";
import CustomButton from "../../components/Ui/CustomButton/CustomButton";
import Error from "../Error/Error";
import NoArchiveNewsToShow from "../../components/News/NoArchiveNewsToShow/NoArchiveNewsToShow";

// NOTE: PÁGINA DE NOTICIAS ARCHIVADAS
const Archive = () => {
  const { archivedNews, totalPages, loading, error, getAllArchivedNews } =
    useNewsStore();
  const [localPage, setLocalPage] = useState(1);

  // NOTE: OBTENER TODAS LAS NOTICIAS ARCHIVADAS
  useEffect(() => {
    getAllArchivedNews(localPage);
  }, [localPage, getAllArchivedNews]);

  // NOTE: CARGAR MAS NOTICIAS ARCHIVADAS
  const handleLoadMore = () => {
    if (localPage < totalPages) {
      setLocalPage((prevPage) => prevPage + 1);
    }
  };

  // NOTE: LOADING, ERROR Y NO HAY NOTICIAS ARCHIVADAS
  if (loading && archivedNews.length === 0) {
    return <CustomLoadingSpinner />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (archivedNews.length === 0) {
    return <NoArchiveNewsToShow />;
  }

  return (
    <main className="mx-auto flex w-[80%] flex-col gap-y-2 overflow-y-auto pr-1">
      {archivedNews.map((newsItem) => (
        <NewsCard
          key={newsItem._id}
          id={newsItem._id}
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
        <CustomButton bg="bg-gray-400" onClick={handleLoadMore}>
          Ver más
        </CustomButton>
      )}
    </main>
  );
};

export default Archive;
