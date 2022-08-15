import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useAds } from "../../providers/Ads";
import { useUser } from "../../providers/User";
import { randomColors } from "../../utils/randomColors";

const FilterAd = () => {
  const { type } = useParams<{ type: string }>();
  const { ads } = useAds();
  const { userAuth } = useUser();

  document.title = type ? type : "Veiculos"

  const bgColor = randomColors();

  const vehicles = ads.filter(
    ({ type_of_ad, type_of_vehicle }) =>
      type_of_ad.toLowerCase() === type ||
      type_of_vehicle.toLowerCase() === type
  );

  return (
    <>
      {userAuth.token ? <HeaderAdmin bgColor={bgColor} /> : <Header />}
      <h1>{type}</h1>
      <Footer />
    </>
  );
};

export default FilterAd;
