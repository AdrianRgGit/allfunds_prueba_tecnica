import { NewsData } from "../data/news";

export interface NewsStore {
  news: NewsData[];
  archivedNews: NewsData[];
  currentPage: number;
  totalPages: number;
  totalNews: number;
  totalArchivedNews: number;
  loading: boolean;
  error: string | null;

  getAllNews: (page?: number) => Promise<void>;
  getAllArchivedNews: (page?: number) => Promise<void>;
  createNew: (newNews: NewsData) => Promise<void>;
  archiveNew: (id: string) => Promise<void>;
  deleteNew: (id: string) => Promise<void>;
}
