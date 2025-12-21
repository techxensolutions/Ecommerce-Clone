import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <>
      <Link
        to={`/category/${category.name.toLowerCase().replaceAll(" ","_")}`}
        className="relative group overflow-hidden rounded-lg h-96 block"
      >
        <img
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h3 className="text-white text-5xl font-bold">{category.name}</h3>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
