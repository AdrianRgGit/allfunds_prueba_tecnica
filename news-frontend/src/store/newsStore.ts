import { create } from "zustand";
import { NewsStore } from "../types/store/newsStoreTypes";

export const useNewsStore = create<NewsStore>((set) => ({
  news: [],
  archivedNews: [],
  currentPage: 1,
  totalPages: 0,
  totalNews: 0,
  totalArchivedNews: 0,
  loading: false,
  error: null,

  getAllNews: async (page = 1) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `http://localhost:5000/api/news/getallnews?page=${page}`,
      );
      const data = await response.json();
      const { news, currentPage, totalPages, totalNews } = data;

      set((state) => ({
        news: [...state.news, ...news],
        currentPage: currentPage,
        totalPages: totalPages,
        totalNews: totalNews,
        loading: false,
      }));
    } catch (error) {
      set({ error: "Error fetching news", loading: false });
    }
  },

  getAllArchivedNews: async (page = 1) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `http://localhost:5000/api/news/getarchivednews?page=${page}`,
      );
      const data = await response.json();
      const { news, currentPage, totalPages, totalNews } = data;

      set((state) => ({
        archivedNews: [...state.archivedNews, ...news],
        currentPage: currentPage,
        totalPages: totalPages,
        totalNews: totalNews,
        loading: false,
      }));
    } catch (error) {
      set({ error: "Error fetching archived news", loading: false });
    }
  },

  createNew: async (newNews) => {
    try {
      const response = await fetch("http://localhost:5000/api/news/createnew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNews),
      });

      if (!response.ok) {
        throw new Error("Failed to create news");
      }
    } catch (error) {
      console.error(error);
      set({ error: "Error creating news" });
    }
  },

  archiveNew: async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/news/archiveNew/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to archive news");
      }

      await response.json();

      set((state) => {
        const newsToArchive = state.news.find(
          (newsItem) => newsItem._id === id,
        );

        if (!newsToArchive) return state;

        return {
          news: state.news.filter((newsItem) => newsItem._id !== id),
          archivedNews: [...state.archivedNews, newsToArchive],
        };
      });
    } catch (error) {
      console.error(error);
      set({ error: "Error archiving news" });
    }
  },

  deleteNew: async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/news/deletenew/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete news");
      }

      await response.json();

      set((state) => ({
        news: state.news.filter((newsItem) => newsItem._id !== id),
        archivedNews: state.archivedNews.filter(
          (newsItem) => newsItem._id !== id,
        ),
      }));
    } catch (error) {
      console.error(error);
      set({ error: "Error deleting news" });
    }
  },
}));
