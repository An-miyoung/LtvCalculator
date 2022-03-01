import React, { useState } from "react";
import styled from "styled-components";

import DragDropInput from "./forms/DragDropInput";

const Container = styled.div`
  position: relative;
  width: 650px;
`;

const FileUpload = () => {
  const [file, setFile] = useState(null);

  return (
    <Container>
      <DragDropInput setFile={setFile} />
      {file !== null && <p>{file}</p>}
    </Container>
  );
};

export default FileUpload;
