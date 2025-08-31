import { PropertyProps } from "@/interfaces";
import React from "react";
import Card from "../common/Card";

const PropertyCard: React.FC<PropertyProps> = ({
  id,
  price,
  address,
  rating,
  image,
  name,
  category,
  offers,
  discount,
}) => {
  return (
    <div>
      <Card
        id={id}
        price={price}
        address={address}
        rating={rating}
        image={image}
        name={name}
        category={category}
        offers={offers}
        discount={discount}
        key={id}
      />
    </div>
  );
};

export default PropertyCard;
