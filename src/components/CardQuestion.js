import styled from "styled-components";
const CardQuestion = styled.div`
  position: relative;
  width: 299px;
  height: 131px;
  box-sizing: border-box;
  padding: 18px 15px;

  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  p {
    font-size: 18px;
    color: #333333;
  }
  img {
    width: 30px;
    height: 20px;

    position: absolute;
    bottom: 5px;
    right: 15px;
    cursor: pointer;
  }
`;
export default CardQuestion;