import { FC } from "react";
import CustomLink from "../components/Ui/CustomLink/CustomLink";
import { LayoutProps } from "../types/layout/layout";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col bg-gray-100 p-2">
      <header className="mb-2 w-full">
        <h1 className="mb-2 text-3xl font-bold">NOTICIARIO SEMANAL</h1>
        <nav className="space-x-4 border-b border-gray-500">
          <CustomLink href="/" title="Noticias" />
          <CustomLink href="/archive  " title="Noticias archivadas" />
          <CustomLink href="/create-new  " title="Publicar una noticia" />
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
