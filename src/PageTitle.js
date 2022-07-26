import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Dyson | {title}</title>
    </Helmet>
  );
};
