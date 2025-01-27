import { FC } from "react";
import CustomLink from "../components/Ui/CustomLink/CustomLink";
import { LayoutProps } from "../types/layout/layout";
import { motion } from "framer-motion";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col bg-gray-100 p-2">
      <header className="relative mb-6">
        <div className="absolute inset-0 origin-top-left transform bg-gradient-to-r from-violet-600 to-indigo-600" />
        <div className="relative container mx-auto px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-6xl font-black tracking-tight text-white"
          >
            El Noticiario Semanal
          </motion.h1>
          <nav className="flex max-h-8 gap-8 text-lg">
            <CustomLink href="/" title="Inicio" />
            <CustomLink href="/archive" title="Noticias Archivadas" />
            <CustomLink href="/create-new" title="Publicar" />
          </nav>
        </div>
      </header>

      {children}
    </div>
  );
};

export default Layout;
