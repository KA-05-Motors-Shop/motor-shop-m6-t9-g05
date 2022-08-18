import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardAuction from "../../components/Cards/CardAuction";
import CardShowcase from "../../components/Cards/CardShowcase";
import EmptyList from "../../components/EmptyList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderAdmin from "../../components/HeaderAdmin";
import Loading from "../../components/Loading";
import { useAds } from "../../providers/Ads";
import { useUser } from "../../providers/User";
import { randomColors } from "../../utils/randomColors";
import { H2, Main, Section, DivSection } from "./styles";

const FilterAd = () => {
  const { type } = useParams<{ type: string }>();
  const { ads, getAds } = useAds();
  const { userAuth } = useUser();

  document.title = type
    ? `${type?.charAt(0).toUpperCase()}${type?.substring(1)}`
    : "Veiculos";

  const bgColor = randomColors();

  useEffect(() => {
    getAds();
  }, []);

  if (!ads) {
    return <Loading bgColor={bgColor} />;
  }

  const vehicles = ads.filter(
    ({ type_of_ad, type_of_vehicle }) =>
      type_of_ad
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") === type ||
      type_of_vehicle.toLowerCase() === type?.replace("s", "")
  );

  return (
    <>
      {userAuth.token ? <HeaderAdmin bgColor={bgColor} /> : <Header />}
      <Main>
        <Section>
          <H2>{`${type?.charAt(0).toUpperCase()}${type?.substring(1)}`}</H2>
          <DivSection auction={type === "leilao" ? true : false}>
            {vehicles.length > 0 ? (
              type === "leilao" ? (
                vehicles.map((vehicle) => (
                  <CardAuction vehicle={vehicle} key={vehicle.id} />
                ))
              ) : (
                vehicles.map((vehicle) => (
                  <CardShowcase vehicle={vehicle} key={vehicle.id} />
                ))
              )
            ) : (
              <EmptyList />
            )}
          </DivSection>
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default FilterAd;
