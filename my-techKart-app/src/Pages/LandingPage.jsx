import React from "react";
import Header from "../components/Headers/Header";
import Footers from "../components/Footers";
import BannerMSI from "../components/BannerCarousel/BannerMSI";
import AboutProduct from "../components/AboutSection/AboutProduct";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="main-parent">
        <BannerMSI />
        <div className="container">
          <div className="row">
            <div className="bg-muted p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              tempora debitis vitae reprehenderit praesentium. Consequuntur odit
              dignissimos modi cumque, rem omnis, repellat officiis cum dolores
              aliquid, ex perspiciatis tempora autem enim! Qui earum voluptatum
              dolorum? Voluptatum enim iste reiciendis quasi dicta corporis! Ab
              minus quasi asperiores. Cumque ducimus dolores ipsam porro eos
              excepturi hic odit possimus in placeat, aut cum eveniet obcaecati
              sunt accusamus officiis debitis cupiditate ipsum aperiam,
              similique alias eligendi repellendus impedit. Perferendis officiis
              aspernatur inventore recusandae nostrum molestias ducimus nam
              optio assumenda dolorem labore eligendi atque, corrupti quam
              eveniet, eius officia asperiores rerum. Id eum aspernatur commodi
              laudantium impedit officia, dolor aut maxime, quibusdam quasi,
              esse et! Molestias optio nostrum soluta, amet laudantium quisquam
              veniam expedita consequatur ad quidem nisi?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, beatae doloremque vero fuga animi incidunt ducimus
              dolor? Iusto ipsum voluptates placeat delectus molestias eius
              adipisci, dolorem officia ipsam, corrupti dolorum ad cumque totam
              vero, iste illo quas eos pariatur quos cupiditate sint aliquam.
              Debitis exercitationem eligendi nihil esse sint officiis,
              recusandae atque sunt suscipit error deserunt voluptates, ex quasi
              aut soluta dolorem officia quod odio sapiente quisquam hic totam
              eveniet. Repudiandae ipsum vitae sed doloremque, quos deleniti
              esse.
            </div>
          </div>
        </div>
        <AboutProduct/>
      </div>
      <Footers />
    </div>
  );
};

export default LandingPage;
