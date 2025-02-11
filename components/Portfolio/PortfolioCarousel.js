import PillowLink from "../ui/PillowLink";
import ProjectItemImage from "../ui/ProjectItemImage";
import Title from "../ui/Title";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectItemCarousel from "./ProjectItemCarousel";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getStrapiMedia } from "lib/media";
import useTranslation from "next-translate/useTranslation";
import Tag from "../ui/Tag";

export default function PortfolioCarousel({
  title = "Смотреть портфолио",
  projects,
}) {
  const { t } = useTranslation("common");

  return (
    <div
      className="container overflow-hidden pt-21 pb-18 flex flex-col gap-10 w-full
    md:flex-row flex-wrap justify-between   max-w-[1746px] lg:mx-auto "
    >
      <Title text={title} variant="white" />
      <PillowLink
        variant="white"
        text={t("All_projects")}
        variantSvg="blueSvg"
        link="/portfolio"
      />
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        className="pb-7
        w-full
        "
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} style={{ flexShrink: 1 }}>
            <ProjectItemCarousel
              name={project.attributes.Title}
              link={project.attributes.slug}
            >
              <ProjectItemImage
                link={getStrapiMedia(project.attributes.Poster)}
                width="288"
                height="147"
                variant="imageBlock"
              />
              <div className="flex gap-2">
                {project.attributes.tags.data.length > 0 &&
                  project.attributes.tags.data.map((tag) => {
                    return <Tag key={tag.id} text={tag.attributes.Name} />;
                  })}
              </div>
            </ProjectItemCarousel>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
