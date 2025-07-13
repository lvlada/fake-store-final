import { Header } from "../components/Header";
import { SingleProductContainer } from "../pages/SingleProduct/SingleProductContainer";

function SingleProductLayout() {
  return (
    <div
      style={{ paddingLeft: "10%" }}
      className="text-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 flex flex-col"
    >
      <Header />
      <SingleProductContainer />
    </div>
  );
}

export { SingleProductLayout };
