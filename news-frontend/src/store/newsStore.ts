import { create } from "zustand";
import { NewsStore } from "../types/store/newsStoreTypes";

export const useNewsStore = create<NewsStore>((set) => ({
  news: [],
  archivedNews: [],
  loading: false,
  error: null,

  getAllNews: async () => {
    set({ loading: true });
    try {
      const response = await fetch("http://localhost:5000/api/news/getallnews");

      const data = await response.json();
      set({ news: data, loading: false });
    } catch (error) {
      set({ error: "Error fetching news", loading: false });
    }
  },
}));
