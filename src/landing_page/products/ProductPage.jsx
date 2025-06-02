import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="assets/kite.png"
        producName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="assets/console.png"
        producName="Console"
        producDiscription="The central dashboard for your SwiftTrade account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore=""
        marginTop="8rem"
        marginLeft="4rem"
      />
      <LeftSection
        imageURL="assets/coin.png"
        producName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="assets/landing.svg"
        producName="Kite Connect API"
        producDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnmore=""
        marginLeft="4rem"
      />
      <LeftSection
        imageURL="assets/varsity.png"
        producName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Universe />
    </>
  );
}
