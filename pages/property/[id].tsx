import { useEffect, useState } from "react";
import axios from "axios";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  // const property = PROPERTYLISTINGSAMPLE.find(
  //   item => item.id === parseInt(id as string)
  // );
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }


  if (!property) return <p className="text-black">Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
