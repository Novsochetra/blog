import { Post } from "@/interfaces/post";
import Link from "next/link";

interface CardProps {
  id: Post["id"];
  title: Post["title"];
  description: Post["description"];
  tags: Post["tags"];
  date: Post["date"];
}

export default function Card({
  id,
  title,
  description,
  tags,
  date,
}: CardProps) {
  return (
    <div className="flex p-2 sm:w-12/12 w-full md:w-6/12 lg:w-4/12">
      <Link
        href={`/${id}`}
        className="group transition ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 bg-white shadow-md border border-slate-500 hover:border-blue-400 hover:bg-blue-400 p-4 rounded-lg flex-1"
      >
        <h5 className="font-bold group-hover:text-white">{title}</h5>

        <p className="text-xs group-hover:text-white text-gray-500 mb-2">
          {description}
        </p>

        <div className="flex flex-row items-center justify-between mt-8">
          <div>
            {tags.map?.((t) => {
              return <Tag key={`post-item-${id}-tag-${t}`} label={t} />;
            })}
          </div>

          <p className="text-xs group-hover:text-white text-gray-500">{date}</p>
        </div>
      </Link>
    </div>
  );
}

interface TagProps {
  label: string;
}
function Tag({ label }: TagProps) {
  return (
    <span className="group-hover:text-white mr-1 group-hover:border-white text-xs border-slate-500 border rounded-full px-2 text-gray-500">
      {label}
    </span>
  );
}
