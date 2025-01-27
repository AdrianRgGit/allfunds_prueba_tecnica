import { useEffect, useState } from "react";
import { useNewsStore } from "../../store/newsStore";
import NewsCard from "../../components/News/NewsCard/NewsCard";
import CustomLoadingSpinner from "../../components/Ui/CustomLoadingSpinner/CustomLoadingSpinner";
import CustomButton from "../../components/Ui/CustomButton/CustomButton";

const Home = () => {
  const { news, totalPages, loading, error, getAllNews } = useNewsStore();
  const [localPage, setLocalPage] = useState(1);

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
        <CustomButton bg="bg-gray-400" onClick={handleLoadMore}>
          Ver más
        </CustomButton>
      )}
    </main>
  );
};

export default Home;
