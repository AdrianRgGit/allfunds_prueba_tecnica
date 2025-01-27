import { Calendar, Pencil } from "lucide-react";
import CustomButton from "../../Ui/CustomButton/CustomButton";
import { FC } from "react";
import { NewsCardProps } from "../../../types/home/newsCard";

const NewsCard: FC<NewsCardProps> = ({
  title,
  description,
  content,
  author,
  date,
}) => {
  return (
    <article className="space-y-2 rounded border p-2 shadow">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
      <p className="text-sm text-gray-500">{content}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1">
            <Pencil size={12} />
            <small>{author}</small>
          </div>
          <div className="flex items-center gap-x-1">
            <Calendar size={12} />
            <small>{date}</small>
          </div>
        </div>
        <CustomButton>
          <span>Archivar noticia</span>
        </CustomButton>
      </div>
    </article>
  );
};

export default NewsCard;
