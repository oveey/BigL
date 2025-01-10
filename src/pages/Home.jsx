import React, { useEffect } from "react";
import { Footer } from "../component/Footer";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (milliseconds)
      easing: "ease-in-out", // Easing for animation
      startEvent: "DOMContentLoaded", // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed
      once: true, // Animation will run only once
    });
  }, []);

  return (
    <>
      <section className="header__section" id="home">
        <div className="hero_image">
        <img src="/assets/herodog.png"></img>

        </div>

        <div className="header__inner__con ">
          <div className="header__con">
            <h1 className="header__text">The Tale of BigL</h1>

            <div className="header__p">
              <p>
                BigL grew up hustling in the neighborhood, leading a loyal crew
                of Beagles with quiet strength and a sharp mind. He was the boss
                funny, loyal, and always looking out for his own. When asked
                what the “L” stood for, he’d smirk and say, “Big Laughs, kid.
                ‘Cause I’m funny.”
              </p>
              <p>
                One day at Mama Rosa’s Calzone Spot, BigL’s nose picked up
                something unusual. He convinced Mama Rosa to see a doctor, and
                she was diagnosed with early-stage cancer. His gift saved her
                life.
              </p>
            </div>
          </div>

          <h2>
            BigL realized his nose wasn’t just for trouble it was for saving
            lives. That’s when his true mission began.
          </h2>

          <div className="button__con">
            <p> Click for the Full Story on X</p>
            <img className="pointing__img" src="/assets/pointing.svg"></img>
          </div>
        </div>
      </section>

      <section className="comment__section" id="who">
        <div className="comment">
          <div className="comment__con">
            <img src="/assets/comment.svg"></img>

            <div className="box_1">
              <img src="/assets/coin2.svg"></img>
            </div>
          </div>
          <div className="comment__tag">
            <img src="/assets/startbigling.svg"></img>
            <button className="button">
              <p className="contract">Contract Address</p>
              <p className="address">djdsfb384y34o343n </p>
              <img src="/assets/copy.svg"></img>
            </button>
          </div>
        </div>
      </section>

      <section className="Purpose__section">
        <h1>Flip it with a purpose</h1>

        <div className="Purpose__con">
          <div className="Purpose__heading">
            <p>
              BigL’s mission ain’t just about loyaייlty and laughs it’s about
              making moves that matter. With a nose sharper than my Uncle Toni’s
              for lasagna, BigL found a way to sniff out trouble before it
              starts, giving folks a chance to catch cancer early.{" "}
            </p>
            <div className="Purpose__text">
              <h2>
                Now, he’s taking it further backing early cancer detection and
                research that uses his crew’s unique talents. Every transaction
                of BigL Coin fuels this cause, turning loyalty into action and
                helping the people who need it most. That’s BigL’s way no fluff,
                just purpose. Forget about it.
              </h2>
              <img src="/assets/startbigling.svg"></img>
            </div>
          </div>
          <div className="paw__image">
            <img src="/assets/likepaw1.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section__5">
        <div className="ba_da_bling">
          <h1 className="ba">Ba</h1>
          <h1 className="da">Da</h1>
          <h1 className="bling">Bling</h1>
        </div>
        <img src="/assets/paaawws.svg" alt="" />
      </section>

      <section className="whoweare__section" id="who">
        <h1>Tax for Course</h1>
        <h2>How does it work</h2>
        <div className="whoweare__con">
          <div className="whoweare">
            <div className="box">
              <div className="box_1">
                <img src="/assets/bag-gif 1.svg"></img>
                <h2>3% Grants Wallet</h2>
                <h3>B 15,000,000,000</h3>
                <h4>Raised</h4>
                <p>
                  Advancing the research industry in cancer detection through
                  the integration of dogs and technology
                </p>
              </div>

              <div className="box_1">
                <img src="/assets/paw-gif 1.svg"></img>
                <h2>1% Charity Wallet</h2>
                <h3>15,000</h3>
                <h4>Raised</h4>
                <p>
                  Contributions to organizations and associations fighting
                  cancer
                </p>
              </div>

              <div className="box_1">
                <img src="/assets/calzone-gif 1.svg"></img>
                <h2>1% Token Burn</h2>
                <h3>45,000</h3>
                <h4>Burned</h4>
                <p>A dog needs to eat, you know</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tokenomics__section">
        <div className="tokenomics__container">
          <img src="/assets/biglcoins.png"></img>

          <div className="tokenomics__con">
            <div className="tokenomics__header">
              <h1>Token—omics</h1>

              <ul>
                <li>• FIXED SUPPLY</li>
                <li>• FAIR LAUNCH</li>
              </ul>
            </div>
            <div className="tokenomics">
              <ul className="tokenomics__list">
                <li>Total supply</li>
                <li>Creator</li>
                <li>Liquidity reserved</li>
                <li>Community airdrop</li>
                <li>Community growth</li>
                <li>Liquidity insensitives</li>
                <li>Ecosystem development</li>
              </ul>

              <ul className="tokenomics__list_2">
                <li>10,000,000,000</li>
                <li>10%</li>
                <li>15%</li>
                <li>25%</li>
                <li>20%</li>
                <li>20%</li>
                <li>10%</li>
              </ul>
            </div>{" "}
            <div className="start__bling">
              <img src="/assets/startbigling.svg"></img>
              <img src="/assets/errow-gif 5.svg"></img>
            </div>
          </div>

          <img src="/assets/gif3.png"></img>
        </div>
      </section>

      <section className="whoweare__section2" id="who">
        <div className="paws">
          <h1>Paws & reflect <span>How to start BigLing</span></h1>
          <img className="sketch" src="/assets/sketches2.svg"></img>

        </div>

        <div className="whoweare__con">
          <div className="whoweare">
            <div className="box__3">
              <div className="box_2">
                <h3>Create your wallet</h3>
                <h6>
                  Download PHANTOM or any other SOLANA Wallet of choice from the
                  App Store or Google Play. For Desktop download the Google
                  Chrome extantion.
                </h6>
              </div>

              <div className="box_2">
                <h3>Where is your SOL?</h3>
                <h6>
                  You will need some SOL in your Wallet SO you can buy directly
                  on PHANTOM, transfer from another Wallet or just Buy elsewhere
                  and transfer to your Wallet
                </h6>
              </div>

              <div className="box_2">
                <h3>Go to JUPITER or RAYDIUM</h3>
                <h6>
                  Connect your Wallet in Chrome, paste the $BigL Token Address,
                   select trade and confirm. Sign on PHANTOM
                </h6>
              </div>

              <div className="box_2">
                <h3>Swap for BigL</h3>
                <h6>Swap your SOL for BigL</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our__service__section">
        <div className="our__service__con">
          <div className="our__service">
            {" "}
            <h1 className="our__service__heading">Start BigLing</h1>
            <div className="Jup__button">
              <button> Go to Jupiter.com</button>
            </div>
          </div>

          <div className="jupiter__image">
            <img src="./assets/jupiter.png" alt="" />
          </div>
        </div>
      </section>

      <section className="location__section" id="location">
        <div className="location__header">
          <img src="./assets/dogsnif.svg" alt="" />
          <h1>Yes, Dogs can smell cancer</h1>
        </div>

        <div className="location__conn">
          <div className="location__con">
            <div className="dogtext">
              <h2>
                Dogs possess one of the most extraordinary olfactory systems in
                the animal kingdom, making their noses true marvels of biology.
                With over 300 million scent receptors—compared to just 5 million
                in humans—a dog’s nose can detect scents at concentrations as
                low as one part per trillion. To put this into perspective,
                that’s like detecting a teaspoon of sugar dissolved in two
                Olympic-sized swimming pools. Their sense of smell is truly
                unparalleled.
              </h2>
              <h2>
                Their ability doesn’t stop at detecting general odors. Dogs can
                discern individual components within a complex mixture of
                scents, separating each layer like a master chef tasting a rich
                dish. This is why dogs can track faint trails left days earlier,
                locate missing people in disaster zones, or even detect
                explosives. When applied to medical science, this sensitivity
                becomes even more remarkable.
              </h2>
            </div>
            <img
              src="/assets/dogpic.png"
              loading="lazy"
              className="dogpic"
            ></img>

            <div className="dogtext_2_container">
              <div className="dogtext_2">
                <h1>Yet traditional funding is significantly lacking.</h1>
                <h2>
                  Mainstream VC funding often flows to large corporations
                  focused on expensive detection methods that are not only less
                  accessible but, in many cases, less accurate, invasive, and
                  emit radiation.
                </h2>
              </div>

              <div className="dogtext_3">
                <h2>
                  This creates a critical gap in advancing early detection
                  methods that are both powerful and affordable for everyone.
                </h2>

                <h2>
                  To bridge this gap, alternative funding models are essential.
                  Supporting cancer detection innovation means recognizing the
                  immense potential of combining the latest technology with
                  natural, cost-effective solutions like canine scent detection.
                  With support from the crypto community and the right
                  resources, this groundbreaking ability could become a
                  widespread tool in the fight against cancer—saving lives and
                  transforming the way we approach early-stage diagnosis.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
