import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function BreadCrumbs({itemLast}) {
  const {t}=useTranslation('common');
  return (
    <div
      className='pt-[12px] pb-[7px]
    md:pb-5
    lg:pb-10.5 lg:pt-2.5'
    >
      <ol className='flex text-base tracking-tight items-center opacity-50'>
        <li className='p-2 pl-0'>
          <Link href='/'>{t('mainPage')}</Link>
        </li>
        <li>/</li>
        <li className='p-2'>{itemLast}</li>
      </ol>
    </div>
  );
}
