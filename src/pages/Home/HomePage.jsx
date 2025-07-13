import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/api";
import { Product } from "../../components/Product";
import { ProductPagination } from "../../components/ProductPagination";
import { SearchInput } from "../../components";

function HomePage() {


  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (isLoading) {
    return (
      <div className="text-center text-gray-600 dark:text-gray-300 mt-10 min-h-screen bg-white dark:bg-gray-900">
        <div className="loader-container">
          <span className="loader" />
        </div>
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500 text-center mt-10">Greška prilikom učitavanja proizvoda.</div>;
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mt-30 p-6 flex justify-center dark:text-white">
        <SearchInput
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); 
          }}
          placeholder="Pretraži proizvode..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {currentProducts.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <ProductPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}

export { HomePage };
