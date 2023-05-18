import React from "react";
import "./InfoCard.scss";
import images from "../../config/images";

const InfoCard = () => {
  const stats = [
    {
      id: 1,
      name: "redBus is trusted by over 36 million happy customers globally",
      value: "36 M",
      extra: "CUSTOMERS",
    },
    {
      id: 2,
      name: "network of over 3500 bus operators worldwide",
      value: "3500",
      extra: "OPERATORS",
    },
    {
      id: 3,
      name: "Over 220 million trips booked using redBus",
      value: "220+ M",
      extra: "BUS TICKETS",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="showcards">
          <article className={"card"}>
            <h3 className={"title"}>
              Save upto Rs 300 on Ap and TS route
            </h3>
            <img
              src={images.supperhit}
              width={200}
              height={200}
              priority
              alt="superhit"
            />
            <p className={"code"}>Use Code SUPERHIT</p>
          </article>
          <article className={"card"}>
            <h3 className={"title"}>
              Save upto Rs 300 on Ap and TS route
            </h3>
            <img
              src={images.bannerdown}
              width={200}
              height={200}
              priority
              alt="superhit"
            />

            <p className={"code"}>Use Code SUPERHIT</p>
          </article>
        </div>
        <div className="promisecard">
          <div className="card">
            <div className="cardimg">
              <img src={images.promise} alt="promise" />
            </div>
            <h2 className="title">WE PROMISE TO DELIVER</h2>
          </div>
          <div className="promisecardinfo">
            <div className="infodiv">
              <article className="card">
                <img
                  src={images.one}
                  className="card-image"
                  width={100}
                  height={100}
                  alt="superhit"
                />
                <h3 className="card-title">UNMATCHED BENEFITS</h3>
                <p className="card-description">
                  We take care of your travel beyond ticketing by providing you with innovative and unique benefits.
                </p>
              </article>
              <article className="card">
                <img
                  src={images.two}
                  className="card-image"
                  width={100}
                  height={90}
                  alt="superhit"
                />
                <h3 className="card-title">SUPERIOR CUSTOMER SERVICE</h3>
                <p className="card-description">
                  We put our experience and relationships to good use and are available to solve your travel issues.
                </p>
              </article>
              <article className="card">
                <img
                  src={images.three}
                  className="card-image"
                  width={110}
                  height={100}
                  alt="superhit"
                />
                <h3 className="card-title">LOWEST PRICES</h3>
                <p className="card-description">
                  We always give you the lowest price with the best partner offers.
                </p>
              </article>
            </div>
          </div>
        </div>
        <section className="awards-section">
          <h2 className="awards-section-title">AWARDS &amp; RECOGNITION</h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-card">
                <div className="award-image-container">
                  <img
                    src={images.four}
                    className="award-image"
                    alt="Business_Standard1"
                    width="250"
                    height="200"
                  />
                </div>
                <h5 className="award-title">Most Innovative Company</h5>
              </div>
            </div>
            <div className="award-item">
              <div className="award-card">
                <div className="award-image-container">
                  <img
                    src={images.five}
                    className="award-image"
                    alt="Brand_Trust_Report"
                    width="250"
                    height="200"
                  />
                </div>
                <h5 className="award-title">Most Trusted Brand</h5>
              </div>
            </div>
            <div className="award-item">
              <div className="award-card">
                <div className="award-image-container">
                  <img
                    src={images.six}
                    className="award-image"
                    alt="Eye_for_Travel1"
                    width="250"
                    height="200"
                  />
                </div>
                <h5 className="award-title">Mobile Innovation Award</h5>
              </div>
            </div>
          </div>
        </section>
        <div className="statistics-section">
          <h2 className="statistics-section-title">THE NUMBERS ARE GROWING!</h2>
          <div className="statistics-grid">
            <dl className="statistics-list">
              {stats.map((stat) => (
                <div key={stat.id} className="statistic-item">
                  <p className="statistic-extra">{stat.extra}</p>
                  <div className="statistic-values">
                    <dd className="statistic-value">{stat.value}</dd>
                    <dt className="statistic-name">{stat.name}</dt>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <footer class="footer-section">
          <div class="footer-content">
            <div class="footer-grid">
              <div class="footer-item">
                <h5 class="footer-item-title">Top Bus Routes</h5>
                <ul class="footer-list">
                  <li>
                    <p>Hyderabad to Bangalore Bus</p>
                  </li>
                  <li>
                    <p>Bangalore to Chennai Bus</p>
                  </li>
                  <li>
                    <p>Pune to Bangalore Bus</p>
                  </li>
                  <li>
                    <p>Mumbai to Bangalore Bus</p>
                  </li>
                </ul>
              </div>
              <div class="footer-item">
                <h5 class="footer-item-title">Top Cities</h5>
                <ul class="footer-list">
                  <li>
                    <p>Hyderabad Bus Tickets</p>
                  </li>
                  <li>
                    <p>Bangalore Bus Tickets</p>
                  </li>
                  <li>
                    <p>Chennai Bus Tickets</p>
                  </li>
                  <li>
                    <p>Pune Bus Tickets</p>
                  </li>
                </ul>
              </div>
              <div class="footer-item">
                <h5 class="footer-item-title">Other</h5>
                <ul class="footer-list">
                  <li>
                    <p>TSRTC</p>
                  </li>
                  <li>
                    <p>SBSTC</p>
                  </li>
                  <li>
                    <p>RSRTC</p>
                  </li>
                  <li>
                    <p>KeralaRTC</p>
                  </li>
                </ul>
              </div>
              <div class="footer-item">
                <h5 class="footer-item-title">Tempo Traveller in Cities</h5>
                <ul class="footer-list">
                  <li>
                    <p>Tempo traveller in Bangalore</p>
                  </li>
                  <li>
                    <p>Tempo traveller in Chennai</p>
                  </li>
                  <li>
                    <p>Tempo traveller in Mumbai</p>
                  </li>
                  <li>
                    <p>Tempo traveller in Hyderabad</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default InfoCard;
