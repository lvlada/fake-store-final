import { useNavigate } from "react-router";
import { useState } from "react";

function Product({ product }) {
  const navigate = useNavigate();
  const [isImageLoading, setIsImageLoading] = useState(true);

  function handleProduct(id) {
    navigate(`/product/${id}`);
  }

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-gray-700 p-6 m-4 w-80 transition hover:shadow-xl dark:hover:shadow-2xl flex flex-col cursor-pointer"
      onClick={() => handleProduct(product.id)}
    >
      <div className="relative h-40 w-full mb-4 flex items-center justify-center">
        {isImageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-700 bg-opacity-80 z-10">
            <span className="loader"></span>
          </div>
        )}
        <img
          src={product.thumbnail}
          alt="product image"
          className="h-40 w-full object-contain bg-white dark:bg-gray-700 rounded-xl"
          style={isImageLoading ? { visibility: "hidden" } : {}}
          onLoad={() => setIsImageLoading(false)}
        />
      </div>
      <h2
        className="font-semibold text-gray-800 dark:text-white mb-2 h-22 overflow-hidden"
        style={{ fontSize: "1.1rem" }}
      >
        {product.title}
      </h2>
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300 mb-1">
        <span>ID:</span>
        <span>{product.id}</span>
      </div>
      <div className="flex justify-between text-lg font-bold text-blue-600 dark:text-blue-400 mt-auto">
        <span>Cena:</span>
        <span>${product.price}</span>
      </div>
    </div>
  );
}

export { Product };
