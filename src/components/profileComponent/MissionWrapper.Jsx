import styled from "styled-components";

const MissionWrapper = styled.div`
  width: 100%;
  div {
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction column;
    h4 {
      color: #555;
      border-bottom: 1px solid black;
      padding: 1rem 1rem;
      margin: 0;
    }

    h4:last-of-type {
      border: none;
    }
  }
`;

export default MissionWrapper;