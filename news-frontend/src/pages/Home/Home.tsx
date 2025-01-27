import { useEffect, useState } from "react";
import { useNewsStore } from "../../store/newsStore";
import NewsCard from "../../components/News/NewsCard/NewsCard";
import CustomLoadingSpinner from "../../components/Ui/CustomLoadingSpinner/CustomLoadingSpinner";
import CustomButton from "../../components/Ui/CustomButton/CustomButton";
import Error from "../Error/Error";
import NoNewsToShow from "../../components/News/NoNewsToShow/NoNewsToShow";

// NOTE: PÁGINA DE NOTICIAS (PRINCIPAL)
const Home = () => {
  const { news, totalPages, loading, error, getAllNews } = useNewsStore();
  const [localPage, setLocalPage] = useState(1);

  // NOTE: OBTENER TODAS LAS NOTICIAS
  useEffect(() => {
    getAllNews(localPage);
  }, [localPage, getAllNews]);

  // NOTE: CARGAR MAS NOTICIAS
  const handleLoadMore = () => {
    if (localPage < totalPages) {
      setLocalPage((prevPage) => prevPage + 1);
    }
  };

  // NOTE: LOADING, ERROR Y NO HAY NOTICIAS
  if (loading && news.length === 0) {
    return <CustomLoadingSpinner />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (news.length === 0) {
    return <NoNewsToShow />;
  }

  return (
    <main className="mx-auto flex w-[80%] flex-col gap-y-2 overflow-y-auto pr-1">
      {news.map((newsItem) => (
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

export default Home;
