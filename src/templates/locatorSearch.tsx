import * as React from "react";
import "../index.css";
import { GetPath, Template, TemplateProps, TemplateRenderProps, TemplateConfig, GetHeadConfig,
  HeadConfig } from "@yext/pages";
import { SearchHeadlessProvider, useSearchActions } from "@yext/search-headless-react";
import PageLayout from "../components/layouts/PageLayout";
import SearchLayout from "../components/locatorPage/SearchLayout";
import {  AnswerExperienceConfig  } from "../config/globalConfig";
import favicon from "../images/favicon.png";
// import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";

// export const config: TemplateConfig = {
//   stream: {
//     $id: "locatorsearch",
//     filter: {
//       entityIds: ["global-data"]
//     },
//     fields: [
//       "id",
//       "uid",
//       "meta",
//       "name"
//       // "c_header",
//       // "c_footerServices",
//       // "c_footerOrders",
//       // "c_footerNewatdiptyque",
//       // "c_footerMostpopular",
//       // "c_service"
//     ],
//     localization: {
//       locales: ["en_GB"],
//       primary: false
//     },
//   },
// };


export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  let metaDescription = document.c_metaDescription
    ? document.c_metaDescription
    : "Buy office supplies in the UK for your business, office, school, or small business. Our range has everything from stationery to furniture at great prices with a service you can trust." + document.name;
  let metaTitle = document.c_metaTitle
    ? document.c_metaTitle
    : "Ryman Business® UK | Office Supplies | Businesses, Offices, & Schools " + document.name;

  return {
    charset: "UTF-8",
    title: `${metaTitle}`,
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${metaDescription}`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "author",
          content: "Ryman Business® UK | Office Supplies | Businesses, Offices, & Schools",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: "https://uprightly-mobile-cat.sbx.pgsdemo.com/" + "index.html",
        },
      },
      // {
      //   type: "meta",
      //   attributes: {
      //     property: "og:url",
      //     content: stagingBaseUrl + "/" + currentUrl,
      //   },
      // },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${metaDescription}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: "https://eu.evocdn.io/dealer/1411/content/media/My_Theme/ry-foot-logo.png",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          content:"https://lucidly-brainy-coyote.sbx.pgsdemo.com/" + "index.html",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content:"Buy office supplies in the UK for your business, office, school, or small business. Our range has everything from stationery to furniture at great prices with a service you can trust.",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: "https://eu.evocdn.io/dealer/1411/content/media/My_Theme/ry-foot-logo.png",
        },
      },
    ],
  };
};

const locatorSearch: Template<TemplateRenderProps> = ({relativePrefixToRoot, path, document}) => {

const { _site } = document;

const providerOptions: google.maps.MapOptions = {
  disableDefaultUI: true
}

return (
    <>
     {/* <Header></Header> */}
    {/* <Header header={_site.c_header} /> */}
  
      <PageLayout>
        <SearchHeadlessProvider
            experienceKey={AnswerExperienceConfig.experienceKey}
            locale={AnswerExperienceConfig.locale}
            apiKey={AnswerExperienceConfig.apiKey}               
            verticalKey={AnswerExperienceConfig.verticalKey}
            experienceVersion={AnswerExperienceConfig.experienceVersion}
            sessionTrackingEnabled={AnswerExperienceConfig.sessionTrackingEnabled}  
            endpoints={AnswerExperienceConfig.endpoints}         
        >
           <SearchLayout/>           
        </SearchHeadlessProvider>   
      </PageLayout>
     <Footer></Footer>
      {/* <Footer c_footerServices={_site.c_footerServices} c_footerOrders={_site.c_footerOrders} c_footerNewatdiptyque={_site.c_footerNewatdiptyque} c_footerMostpopular={_site.c_footerMostpopular} c_service={_site.c_service} /> */}
    </>
  );
};

export default locatorSearch;