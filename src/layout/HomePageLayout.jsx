import { Leaf } from "lucide-react";
import { Header } from "../components/Header";
import { HomePageContainer } from "../pages/Home";

function HomePageLayout() {
  return (
    <div style={{paddingLeft: "10%"}}
      className="text-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 flex flex-col"
    >
      <Header />
      <div className="flex-1 p-4">
        <HomePageContainer />
      </div>
    </div>
  );
}

export { HomePageLayout };
