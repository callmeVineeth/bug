import React from "react";

interface CenterProps {
  children: React.ReactNode;
}

const Center: React.FC<CenterProps> = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "50%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: '10px'
      }}
    >
      {props.children}
    </div>
  );
};

export { Center };
