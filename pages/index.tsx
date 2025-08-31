import { useEffect, useState } from "react";
import Image from "next/image";
import HERO from "@/public/assets/images/svgs/hero.svg";
import Card from "@/components/common/Card";
import Pill from "@/components/common/Pill";
import { PropertyProps } from "@/interfaces";
import { PROPERTYLISTINGSAMPLE, FILTERS } from "@/constants";
import axios from "axios";
import PropertyCard from "@/components/property/PropertyCard";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);
  return (
    <main className="w-full px-5">
      <div className="relative w-full h-[400px] lg:h-[500px] aspect-square mb-3 md:mb-4 overflow-hidden rounded-lg">
        <Image
          src={HERO}
          alt="hero image"
          className="w-full h-full object-cover rounded-t-md"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col items-center justify-center gap-2 text-center p-5">
          <h1 className="text-white text-[40px] md:text-[32px] font-bold">
            Find your favourite place here!
          </h1>
          <div>The best prices for over 2 million properties worldwide</div>
        </div>
      </div>
      <div className="flex justify-between w-full my-4">
        <div className="flex gap-3 items-center justify-between">
          {FILTERS.map((filter, index) => (
            <Pill key={index} title={filter} />
          ))}
        </div>
        <div>Sort here</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
          <Card
            id={property.id}
            price={property.price}
            address={property.address}
            rating={property.rating}
            image={property.image}
            name={property.name}
            category={property.category}
            offers={property.offers}
            discount={property.discount}
            key={property.id}
          />
        ))} */}
        {properties.map((property: PropertyProps) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            price={property.price}
            address={property.address}
            rating={property.rating}
            image={property.image}
            name={property.name}
            category={property.category}
            offers={property.offers}
            discount={property.discount}
          />
        ))}
      </div>
    </main>
  );
}
