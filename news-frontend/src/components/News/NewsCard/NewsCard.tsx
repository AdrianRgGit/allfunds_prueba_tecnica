import { Calendar, Clock, Pencil } from "lucide-react";
import CustomButton from "../../Ui/CustomButton/CustomButton";
import { FC } from "react";
import { NewsCardProps } from "../../../types/news/newsCard";
import CustomSmallElementWrapper from "../../Ui/CustomSmallElementWrapper/CustomSmallElementWrapper";
import { useNewsStore } from "../../../store/newsStore";
import { motion } from "framer-motion";

const NewsCard: FC<NewsCardProps> = ({
  id,
  title,
  description,
  content,
  author,
  date,
  archivedDate,
}) => {
  const { archiveNew, deleteNew } = useNewsStore();

  const handleArchive = (id: string) => {
    archiveNew(id);
  };

  const handleDelete = (id: string) => {
    deleteNew(id);
  };

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group space-y-2 rounded border p-2 shadow"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold transition-colors duration-200 group-hover:text-blue-500">
          {title}
        </h2>
        {archivedDate ? (
          <CustomSmallElementWrapper>
            <Clock size={12} />
            <small>{archivedDate}</small>
          </CustomSmallElementWrapper>
        ) : null}
      </div>

      <p>{description}</p>
      <p className="text-sm text-gray-500">{content}</p>

      <div className="flex justify-between">
        <div className="flex items-center gap-x-2 self-end">
          <CustomSmallElementWrapper>
            <Pencil size={12} />
            <small>{author}</small>
          </CustomSmallElementWrapper>

          <CustomSmallElementWrapper>
            <Calendar size={12} />
            <small>{date}</small>
          </CustomSmallElementWrapper>
        </div>

        {archivedDate ? (
          <CustomButton bg="bg-red-500" onClick={() => handleDelete(id)}>
            <span>Eliminar noticia</span>
          </CustomButton>
        ) : (
          <CustomButton onClick={() => handleArchive(id)}>
            <span>Archivar noticia</span>
          </CustomButton>
        )}
      </div>
    </motion.article>
  );
};

export default NewsCard;
