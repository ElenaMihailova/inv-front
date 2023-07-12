import React, {useEffect} from "react";
import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import {fetchAPI} from "lib/api";
import ServicesSlides from "@/components/Services/ServicesSlides";
import Map from "@/components/ui/Map";
import IntroCost from "@/components/ui/IntroCost";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import Address from "@/components/ui/Address";
import Socials from "@/components/ui/Socials";
import AddressSocials from '@/components/Contacts.js/AddressSocial';

export default function Contacts({contact}) {
  const i18n=useTranslation();
  const locale=i18n.lang;

  return (
    <Layout bg="white" headerBg="white" footerBg="white">
      <TitleSection text={contact.attributes.Title} />
      <BreadCrumbs
        links={[
          {
            title: contact.attributes.Title,
            path: "",
            active: false,
          },
        ]}
      />
      <AddressSocials>
        <Address
          address={contact.attributes.Address}
          phone={contact.attributes.Phone}
          email={contact.attributes.Email}
        />
        <Socials variant="white" links={contact.attributes.ContactSocials} />
      </AddressSocials>
      <ServicesSlides />
      <Map />
      <IntroCost />
      <BlogsBlockList
        articleColor="inherit"
        titleColor="black"
        buttonColor="black"
      />
    </Layout>
  );
}

export async function getStaticProps({locale}) {
  const [contactRes]=await Promise.all([
    fetchAPI("/contact", {
      fields: ["Title", "Address", "Phone", "Email"],
      locale: locale,
      populate: "*",
    }),
  ]);

  return {
    props: {
      contact: contactRes.data,
    },
    revalidate: 1,
  };
}
