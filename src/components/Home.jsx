import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram, AiFillGithub} from "react-icons/ai";

const Home = () => {
  return (
    <>  
      <div className="Home" id='home'>
        <main>
          <h1>GrowthKarts</h1>
          <p>Solution to all the problem</p>
        </main>
      </div>

      <div className="Home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are yourone and only solution to the tech problems you face every
            day we are leading tech companies who amis is to increase the
            problem solving ability in children
          </p>
        </div>
      </div>

      <div className="Home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad modi
            quasi. Quidem odio est amet fugiat quam, veniam molestias! Id
            suscipit veniam veritatis deserunt natus, rem temporibus. Unde
            maxime pariatur temporibus nesciunt nulla, laborum vero, fugiat
            facilis possimus eius cupiditate in quo eos! Minus ullam asperiores
            dolorem soluta possimus quia, nisi officia laboriosam excepturi,
            ipsam alias aut recusandae accusantium quae dicta! Aut commodi neque
            veniam iste iusto, cumque perspiciatis doloribus rem dicta dolor a
            quibusdam fugit necessitatibus, veritatis incidunt nihil doloremque
            repudiandae omnis deleniti beatae ad exercitationem eligendi,
            voluptate libero. Porro facere eum aperiam iste doloremque eaque
            aliquam tenetur.
          </p>
        </div>
      </div>
        
        <div className="Home4" id="brands">
            <div>
                <h1>Brands</h1>

                <article>
                        <div style={{
                            animationDelay:"0.3"
                        }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                        </div>

                        <div style={{   
                            animationDelay:"0.5s"
                        }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay:"0.7s"
                        }}>
                        <AiFillYoutube />   
                        <p>YouTube</p>
                        </div>

                        <div style={{
                            animationDelay:"1s"
                        }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                        </div>

                        <div style={{
                            animationDelay:"1s"
                        }}>
                        <AiFillGithub />
                        <p>Git Hub</p>
                        </div>
                </article>
            </div>
        </div>

    </>
  );
};

export default Home;
