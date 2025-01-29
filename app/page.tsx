import AppBreadCrumb from "@/components/AppBreadCrumb";
import AppContainer from "@/components/AppContainer";
import CategoriesSlider from "@/components/CategoriesSlider";
import Header from "@/components/Header";
import { getCategories } from "@/lib/actions/categories";

export default async function Home() {
  const categories = await getCategories();
  return (
    <div className="bg-[#fefefe]">
      <Header />
      <AppContainer>
        <div className="py-8">
          <AppBreadCrumb />
        </div>
        <CategoriesSlider categories={categories.data.data} />
      </AppContainer>
    </div>
  );
}
