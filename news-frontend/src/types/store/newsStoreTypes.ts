import { NewsData } from "../data/news";

export interface NewsStore {
  news: NewsData[];
  archivedNews: NewsData[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;

  getAllNews: (page?: number) => Promise<void>;
}
