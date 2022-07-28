import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  background-color: beige;
  margin-top: 215px;
  position: relative;
`;
const Text = styled.div`
  width: 565px;
  font-size: 35px;
  font-weight: 500;
  line-height: 47px;
  position: absolute;
  top: 240px;
  right: 120px;
`;

export const Section6 = () => {
  return (
    <Wrap>
      <Text>
        "저는 과학과 엔지니어링을 적용하고, 행동 변화를 통해 더 효율적이고 지속
        가능한 세상을 만들 수 있다는 것에 긍정적인 변화에 대해 낙관적이며, 이를
        이루기 위한 열정을 가지고 있습니다."
      </Text>
    </Wrap>
  );
};
