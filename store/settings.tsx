import { getCookie } from "cookies-next";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsStoreState {
  selectedLanguage: string;
  updateSelectedLanguage: (lang: string) => void;
}

const getDefaultLanguage = (): string => {
  const cookieStore = getCookie("lang");
  const selectedLanguage = cookieStore; // Read from cookies
  return selectedLanguage || "en"; // Default to "en" if not set
};

const useSettingsStore = create<SettingsStoreState>()(
  persist(
    (set) => ({
      selectedLanguage: getDefaultLanguage(), // Set the default language here
      updateSelectedLanguage: (selectedLanguage) => set({ selectedLanguage }),
    }),
    { name: "settings" }
  )
);

export default useSettingsStore;
