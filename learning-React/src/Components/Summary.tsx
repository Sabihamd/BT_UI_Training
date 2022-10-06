import React from "react";

type IProps = {
  colors: string[];
};

export default function Summary(props: IProps) {
  return (
    <div>
      {props.colors.map((c: string, index: number) => (
          <li key={index}>{c}</li>
      ))}
    </div>
  );
}
