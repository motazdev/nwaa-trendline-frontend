import AppBreadCrumb from "@/components/AppBreadCrumb";
import AppContainer from "@/components/AppContainer";
import CategoriesSlider from "@/components/CategoriesSlider";
import Header from "@/components/Header";

export default async function Home() {
  return (
    <div className="bg-[#fefefe]">
      <Header />
      <AppContainer>
        <div className="py-8">
          <AppBreadCrumb />
        </div>
        <CategoriesSlider />
      </AppContainer>
    </div>
  );
}
