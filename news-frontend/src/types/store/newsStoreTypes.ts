import { NewsData } from "../data/news";

export interface NewsStore {
  news: NewsData[];
  archivedNews: NewsData[];
  loading: boolean;
  error: string | null;

  getAllNews: () => Promise<void>;
}
