import React from "react";

import { Container } from "./styles";

interface Services {
  icon?: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<Services> = ({ icon, title, description }) => (
  <Container>
    <div>
      <img src={icon} alt={title} />
    </div>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </Container>
);

export default ServiceItem;
