import { PageTitle } from "../../../PageTitle";
import { Mainbanner } from "./Mainbanner";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";

export const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Mainbanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};
