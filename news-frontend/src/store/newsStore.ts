import { create } from "zustand";
import { NewsStore } from "../types/store/newsStoreTypes";

export const useNewsStore = create<NewsStore>((set) => ({
  news: [],
  archivedNews: [],
  currentPage: 1,
  totalPages: 0,
  loading: false,
  error: null,

  getAllNews: async (page = 1, limit = 3) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `http://localhost:5000/api/news/getallnews?page=${page}&limit=${limit}`,
      );
      const data = await response.json();

      set((state) => ({
        news: [...state.news, ...data.news],
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        loading: false,
      }));
    } catch (error) {
      set({ error: "Error fetching news", loading: false });
    }
  },
}));
