import PillowLink from '../../ui/PillowLink';
import TitleH2 from '@/components/ui/TitleH2';
import Article from '@/components/ui/Article';
import ButtonPagination from '@/components/ui/ButtonPagination';
import {useRef} from 'react';
import {Virtual, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Blog({titleColor, articleColor, buttonColor}) {
  const navigationPrevRef=useRef(null);
  const navigationNextRef=useRef(null);

  return (
    <section
      className='text-white pt-18 pb-[38px] mx-auto
    md:pb-20 md:pt-20
    lg:pb-20 lg:max-w-[1746px] lg:pt-33 pl-3.8'
    >
      <div
        className='flex justify-between pb-10 items-center
        md:pb-15 lg:pb-18'
      >
        <TitleH2 text='Блог invert' variant={titleColor} />

        <div className='flex'>
          <div ref={navigationPrevRef}>
            <ButtonPagination variant={buttonColor}>
              <svg
                className='w-[9px] h-[15px] viewBox="0 0 9 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
              </svg>
            </ButtonPagination>
          </div>
          <div ref={navigationNextRef}>
            <ButtonPagination variant={buttonColor}>
              <svg
                className='w-[9px] h-[15px] viewBox="0 0 9 15 rotate-180'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
              </svg>
            </ButtonPagination>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Virtual, Pagination]}
        spaceBetween={20}
        // slidesPerView={}
        scrollbar={{draggable: true}}
        onSlideChange={() => console.log('slide change')}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl=navigationPrevRef.current;
          swiper.params.navigation.nextEl=navigationNextRef.current;
        }}
        virtual
        loop={true}
        className='mySwiper flex mb-7
        lg:pl-0 lg:pb-9'
      >
        <SwiperSlide className='!w-auto shrink-0'>
          <Article
            link='/image/content/image-10.png'
            tag='VR'
            title='VR-футболка Owo: мнения тестеров'
            text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
            variant={articleColor}
          />
        </SwiperSlide>

        <SwiperSlide className='!w-auto shrink-0'>
          <Article
            link='/image/content/image-11.png'
            tag='3D'
            title='3D Max реально освоить самому'
            text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
            variant={articleColor}
          />
        </SwiperSlide>

        <SwiperSlide className='!w-auto shrink-0'>
          <Article
            link='/image/content/image-12.png'
            tag='Новости'
            title='Самый инновационный ноутбук от Apple — MacBook Retina'
            text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
            variant={articleColor}
          />
        </SwiperSlide>

        <SwiperSlide className='!w-auto shrink-0'>
          <Article
            link='/image/content/image-12.png'
            tag='Новости'
            title='Самый инновационный ноутбук от Apple — MacBook Retina'
            text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
            variant={articleColor}
          />
        </SwiperSlide>
      </Swiper>

      <div>
        <PillowLink
          text='Все новости'
          link='#'
          variant='dark'
          variantSvg='whiteSvg'
        />
      </div>
    </section>
  );
}
