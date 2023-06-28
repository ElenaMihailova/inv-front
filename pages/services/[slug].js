import Seo from "@/components/seo";
import Layout from "@/components/layout";

import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import ServiceIntro from "@/components/Services/ServiceIntro";
import { fetchAPI } from "lib/api";
import useTranslation from "next-translate/useTranslation";
import IntroCost from "@/components/ui/IntroCost";
import ServicesSlides from "@/components/Services/ServicesSlides";
import ProjectsList from "@/components/Projects/ProjectsList";

// todo Тестовые данные удалить
const breadCrumbsItems = [
  {
    title: "Главная",
    path: "/index",
  },
  {
    title: "Услуги",
    path: "/products",
  },
  {
    title: "Архитектурная 3D визуализация",
  },
];

export default function Service({ category }) {
  const i18n = useTranslation();
  const { t } = useTranslation("common");
  const locale = i18n.lang;

  console.log(category);
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    <Layout bg="white" headerBg="white" footerBg="black">
      {/* <Seo seo={seo} /> */}
      <div className="lg:max-w-[1920px]">
        <div
          className="px-3.8
	  lg:px-21"
        >
          <TitleSection text={category.name} />
          <BreadCrumbs links={breadCrumbsItems} />
        </div>
        <ServiceIntro title={t("About service")} text={category.Description} />
      </div>
      <div className="hidden md:block px-3.8 pt-20">
        <IntroCost />
        <ServicesSlides />
      </div>
      <div className="px-3.8 pt-20">
        <ProjectsList moreProjects={true} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", {
    fields: ["slug"],
  });

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        //slug: category.attributes.slug,
        slug:
          category.attributes.slug !== null
            ? category.attributes.slug.toString()
            : "",
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const matchingCategories = await fetchAPI("/categories", {
    fields: ["name", "text", "Description"],
    locale: locale,
    populate: "*",
    filters: {
      slug: params.slug,
    },
  });

  return {
    props: {
      category: matchingCategories.data[0].attributes,
    },
    revalidate: 1,
  };
}