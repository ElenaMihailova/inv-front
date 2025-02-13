// export default function IntroNews() {
//   return (
//     <div>
//       <div className='container'>
//         <p className='pt-[43px] leading-4
//         md:text-xl
//         xl:w-1/2'>
//           Футболка Owo дает ощутимую обратную связь в виртуальной реальности,
//           как тактильный жилет, но с электрическим током до предела личной боли.
//         </p>
//       </div>
//     </div>
//   );
// }

import TagItemSection from "../ui/TagItemSection";
import TagItemContainer from "../ui/TagItemContainer";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { getStrapiMediaCarousel } from "lib/mediaCarousel";

export default function IntroNews({ blog }) {
  const router = useRouter();
  const onClickLink = (link) => {
    router.push(`/${link}`);
  };

  return (
    <div>
      <div className="container pt-3">
        <TagItemContainer>
          {blog.attributes.tag.data && (
            <TagItemSection
              text={blog.attributes.tag.data?.attributes?.Name}
              color="white"
              onClick={() =>
                onClickLink(blog.attributes.tag.data?.attributes?.slug)
              }
            />
          )}
          <TagItemSection
            text="Новости"
            color="white"
            onClick={() => onClickLink("news")}
          />
        </TagItemContainer>
        <ReactMarkdown className="pt-[43px] pb-[30px] markDown mx-auto">
          {blog.attributes.Preview}
        </ReactMarkdown>
      </div>
      <Image
        className="w-full "
        src={getStrapiMediaCarousel(blog.attributes.Image_preview.data)}
        width="1200"
        height="800"
        alt=""
        quality={100}
      />
    </div>
  );
}
