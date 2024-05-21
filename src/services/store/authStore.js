// store.js
import { create } from "zustand";
import { getData } from "../api/requests";

const useStore = create((set) => ({
  news: [],
  currentNews: null,
  fetchNews: async () => {
    const data = await getData("/core/news/");
    set({ news: data });
  },
  setCurrentNews: (newsItem) => set({ currentNews: newsItem }),
}));

export default useStore;
