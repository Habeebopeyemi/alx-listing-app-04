import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find(
    item => item.id === parseInt(id as string)
  );

  if (!property) return <p className="text-black">Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
