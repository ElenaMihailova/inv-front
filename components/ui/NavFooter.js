import FooterNavItem from './FooterNavItem';
import Loading from './Loading';

export default function NavFooter({menu}) {
  if (!menu) {
    return <Loading />;
  }
  return (
    <div
      className='pb-5
    lg:w-[445px] lg:pt-10 lg:pl-7'
    >
      <ul
        className='grid 
      md:grid-cols-2 md:grid-rows-4 md:grid-flow-col md:max-w-[62%]
      lg:max-w-none
      '
      >
        {menu.map((item) => (
          <FooterNavItem key={item.id} text={item.title} link={item.path} />
        ))}
      </ul>
    </div>
  );
}
