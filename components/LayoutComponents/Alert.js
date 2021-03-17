import React from "react";
import styled from "styled-components";

const AlertWrapper = styled.div`
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  color: red;

  &:hover {
    color: blue;
  }
`;

const Alert = () => {
  return (
    <AlertWrapper>
      <p>
        Preview Modus ist aktiv! <Link href="/api/exit-preview">hier</Link>{" "}
        kannst du ihn deaktivieren
      </p>
    </AlertWrapper>
  );
};

export default Alert;
