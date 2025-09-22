const Categories = () => {
  const categories = ["Food", "Travel", "Tech", "Lifestyle", "Culture"];

  return (
    <div className="flex gap-3 justify-center my-6 flex-wrap">
      {categories.map((cat, index) => (
        <button key={index} className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200">
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
