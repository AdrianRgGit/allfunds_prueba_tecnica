import { create } from "zustand";
import { NewsStore } from "../types/store/newsStoreTypes";
import { API_URL } from "../utils/constants/api";

// NOTE: UTILIZAMOS ZUSTAND PARA TENER UN ESTADO GLOBAL DE LAS NOTICIAS
export const useNewsStore = create<NewsStore>((set) => ({
  // NOTE: VALORES POR DEFECTO
  news: [],
  archivedNews: [],
  currentPage: 1,
  totalPages: 0,
  totalNews: 0,
  totalArchivedNews: 0,
  loading: false,
  error: null,

  // NOTE: OBTENER TODAS LAS NOTICIAS
  getAllNews: async (page = 1) => {
    set({ loading: true });
    try {
      const response = await fetch(`${API_URL}/news/getallnews?page=${page}`);
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

  // NOTE: OBTENER TODAS LAS NOTICIAS ARCHIVADAS
  getAllArchivedNews: async (page = 1) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `${API_URL}/news/getarchivednews?page=${page}`,
      );
      const data = await response.json();
      const { news, currentPage, totalPages, totalArchivedNews } = data;

      set((state) => ({
        archivedNews: [...state.archivedNews, ...news],
        currentPage: currentPage,
        totalPages: totalPages,
        totalNews: totalArchivedNews,
        loading: false,
      }));
    } catch (error) {
      set({ error: "Error fetching archived news", loading: false });
    }
  },

  // NOTE: CREAR NUEVA NOTICIA
  createNew: async (newNews) => {
    try {
      const response = await fetch(`${API_URL}/news/createnew`, {
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

  // NOTE: ARCHIVAR NOTICIA
  archiveNew: async (id) => {
    try {
      const response = await fetch(`${API_URL}/news/archiveNew/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

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

  // NOTE: ELIMINAR NOTICIA
  deleteNew: async (id) => {
    try {
      const response = await fetch(`${API_URL}/news/deletenew/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

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
