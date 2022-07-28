import { PageTitle } from "../../../PageTitle";
import { MainBanner } from "./MainBanner";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";

export const Service = () => {
  console.log(window.pageYOffset);
  return (
    <>
      <PageTitle title="Service" />
      <MainBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
};
