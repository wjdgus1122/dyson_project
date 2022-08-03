import styled from "styled-components";

const Wrap = styled.iframe`
  width: 100%;
  height: 80vh;
`;

export const Section2 = () => {
  return (
    <Wrap
      src="https://www.youtube.com/embed/Yh_jmGso64E"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
};
