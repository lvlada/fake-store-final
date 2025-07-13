import { useParams, useNavigate } from "react-router";
import { getOneProducts } from "../../services/api";
import { useEffect, useState } from "react";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    getOneProducts(id).then((data) => setProduct(data));
  }, [id]);

  if (!product)
    return (
      <div className="text-center text-gray-600 dark:text-gray-300 mt-10 bg-white dark:bg-gray-900 min-h-screen">
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      </div>
    );

  return (
    <div className="mt-30 max-w-6xl mx-auto p-2 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <span
        className="font-semibold py-2 px-6 rounded-xl shadow-md border border-blue-700 transition duration-200 cursor-pointer hover:shadow-xl mb-6 inline-block"
        onClick={() => navigate(-1)}
        style={{ backgroundColor: "#f3f4f6", color: "black" }}
      >
        ← Nazad
      </span>

      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-8 flex items-center justify-center min-h-[460px]">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 border border-gray-200 dark:border-gray-700 flex items-center justify-center relative">
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-80 z-10">
                <span className="loader"></span>
              </div>
            )}
            <img
              src={product?.images[0]}
              alt={product.title}
              className="object-contain h-[420px] w-[420px] mx-auto bg-white dark:bg-gray-900 rounded-xl"
              style={isImageLoading ? { visibility: "hidden" } : {}}
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {product.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                <strong>Brend:</strong> {product.brand}
              </span>
              <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                <strong>Ocena:</strong> {product.rating}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-blue-600">${product.price}</p>
            <span
              className="font-semibold py-2 px-6 rounded-xl shadow-md border border-blue-700 transition duration-200 cursor-pointer hover:shadow-xl"
              onClick={() => alert("Proizvod dodat u korpu!")}
              style={{ backgroundColor: "#f3f4f6", color: "#f87171" }}
            >
              Dodaj u korpu 🛒
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SingleProduct }