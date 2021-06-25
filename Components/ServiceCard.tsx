import React, { FunctionComponent } from "react";
import { Service } from "../type";

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center p-4 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <h5 className="font-bold ">{title}</h5>
      <p dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default ServiceCard;
