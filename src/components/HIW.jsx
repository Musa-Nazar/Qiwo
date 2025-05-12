import HIWWrapper from "./HIWWrapper";
import HIWCard from "./HIWCard.jsx";
import icon1 from "../assets/1st-icon.svg";
import icon2 from "../assets/2nd-icon.svg";
import icon3 from "../assets/3rd-icon.svg";
function HIW() {
  const xml = (
    <HIWWrapper>
      <HIWCard
        img={icon1}
        title="Attach Device"
        text={
          <>
            set up the smart health-tracking <br />
            device on the animal
          </>
        }
      />
      <HIWCard
        img={icon2}
        title="Track In Real-Time"
        text={
          <>
            Monitor health data live on your
            <br />
            phone or dashboard, anytime, <br />
            anywhere
          </>
        }
      />
      <HIWCard
        img={icon3}
        title="Get Smart Alerts"
        text={
          <>
            Receiving instant alerts and reports
            <br /> when any unusual signs are detected
          </>
        }
      />
    </HIWWrapper>
  );
  return xml;
}

export default HIW;
