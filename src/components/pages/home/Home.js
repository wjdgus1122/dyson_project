import { PageTitle } from "../../../PageTitle";
import { Mainbanner } from "./Mainbanner";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";

export const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Mainbanner />
      <Section1 />
      <Section2 />
    </>
  );
};
