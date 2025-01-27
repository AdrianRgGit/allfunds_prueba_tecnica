import { useEffect } from "react";
import { useNewsStore } from "../../store/newsStore";
import NewsCard from "../../components/News/NewsCard/NewsCard";
import CustomLoadingSpinner from "../../components/Ui/CustomLoadingSpinner/CustomLoadingSpinner";

const Home = () => {
  const { news, loading, error, getAllNews } = useNewsStore();

  useEffect(() => {
    getAllNews();
  }, [getAllNews]);

  if (loading) {
    return <CustomLoadingSpinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(news);

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
    </main>
  );
};

export default Home;
