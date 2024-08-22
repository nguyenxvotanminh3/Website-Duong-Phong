"use client";

import Container from "@srccommons/Container";
import Screen from "@srccommons/Screen";
import Image from "next/image";
import React, { Suspense, useEffect } from "react";
import styles from "@assets/scss/home.module.scss";
import service1 from "@assets/images/1-11.jpg";
import service2 from "@assets/images/1-12.jpg";
import service3 from "@assets/images/1-13.jpg";
import service4 from "@assets/images/1-14.jpg";
import service42 from "@assets/images/1-16.jpg";
import service5 from "@assets/images/1-15.jpg";
import service6 from "@assets/images/1-17.jpg";
import service62 from "@assets/images/1-18.jpg";


import service7 from "@assets/images/sv7.png";
import service71 from "@assets/images/1-24.jpg";
import service72 from "@assets/images/1-222.jpg";

import service8 from "@assets/images/1-27.jpg";
import service9 from "@assets/images/sv9.png";
import service10 from "@assets/images/sv10.png";
import service11 from "@assets/images/1-23.jpg";
import service12 from "@assets/images/1-22.jpg";
import service122 from "@assets/images/1-20.jpg";


import service13 from "@assets/images/sv13.png";
import service132 from "@assets/images/1-19.jpg";

import service14 from "@assets/images/sv14.png";
import service15 from "@assets/images/sv15.png";
import service16 from "@assets/images/sp.jpg";
import service17 from "@assets/images/sv17.png";
import service172 from "@assets/images/1-25.jpg";

import service18 from "@assets/images/1-28.jpg";

import { useParams } from "next/navigation";
import FooterComponent from "@srccomponents/home/FooterComponent";
import BannerSingle from "@srccommons/BannerSingle";
import Translations from "@srccommons/Translations";

import "../../../../i18n"; 
const ServiceDetail = () => {
  const params = useParams<{ slug: string }>();
  useEffect(() => {
    if (!params?.slug) {
      return;
    } else {
      const sectionToScrollTo = document.getElementById(params?.slug);
      if (sectionToScrollTo) {
        sectionToScrollTo.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [params?.slug]);

  return (

    <Screen _className="product-page relative">
      <div id="banner"></div>
      <BannerSingle classImage={"bg-banner-service"} />

      <Container>
        <h1 className="border-l-4 uppercase pl-5 border-[#FF9D00] text_yellow text-[40px] uppercase  md:text-[52.14px] mt-10">
          <Translations text="Dịch vụ" />{" "}
        </h1>
      </Container>

      <div id="thiet-ke-an-pham"></div>
      <div className="mt-[6rem]">
        <div className="bg-banner py-8 ">
          <Container>
            <h3 className="text-shadown text-center uppercase text-white text-[30px] md:text-[35px]">
              <Translations text="Thiết kế ấn phẩm" />{" "}
            </h3>
          </Container>
        </div>

        <Container>
          <div className="grid grid-cols-12 lg:grid-cols-8 items-stretch gap-1 mt-5 order-first">
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service1}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service2}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service5}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2 ">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service42}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service4}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service3}
                />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service6}
                />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service62}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div id="thiet-ke-tao-mau-bao-bi"></div>
      <div className="mt-[6rem]">
        <div className="bg-banner py-8">
          <Container>
            <h3 className="text-shadown text-center uppercase text-white text-[30px] md:text-[35px]">
              <Translations text="Thiết kế - tạo mẫu bao bì" />
            </h3>
          </Container>
        </div>

        <Container>
          <div className="grid grid-cols-12 lg:grid-cols-8 items-stretch gap-1 mt-5 order-first">
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service71}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service72}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service9}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2 ">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service10}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service11}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service12}
                />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service122}
                />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service7}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div id="thiet-ke-tao-mau-quay-ke-tu-trung-bay-san-pham"> </div>
      <div className=" mb-10 mt-[6rem]">
        <div className="bg-banner py-8">
          <Container>
            <h3 className="text-shadown uppercase text-center text-white text-[30px] md:text-[35px]">
              <Translations text="THIẾT KẾ - TẠO MẪU QUẦY KỆ," /> <br />
              <Translations text="TỦ TRƯNG BÀY SẢN PHẨM (POSM)" />
            </h3>
          </Container>
        </div>

        <Container>
          <div className="grid grid-cols-12 lg:grid-cols-8 items-stretch gap-1 mt-5 order-first">
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service13}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service132}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service15}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2 ">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service8}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service172}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service17}
                />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service14}
                />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-[5/4]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service18}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-20">
        <FooterComponent />
      </div>
    </Screen>

  );
};

export default ServiceDetail;
