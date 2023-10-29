import Typewriter from "../components/Typewriter";
import "./Interests.css";

export default function Interests() {
  return (
    <>
      <section className="scrollSection">
        <div className="sectionContent">
          <div className="infoText">
            <Typewriter lines={[
              "Here are some of my interests ♥"
            ]} letterTime={40} lineTime={40} />
          </div>
        </div>
      </section>

      <section className="scrollSection">
        <div className="interestContent">

          <div className="sectionText">
            <h1> Mathematics </h1>

            <p> I've been doing mathematics for fun as long as I can remember. </p>

            <p> When I was 8 I started doing Origami as a hobby, which eventually evolved into folding polyhedra out of their nets in my free time. </p>

            <p> After that, I found the YouTube channel "Numberphile" and I realized that I loved maths. </p>
              
            <p> 
              This was a blessing and a curse since I became much better at maths because it was fun for me,
              but all of my math classes at school became boring and I didn't have any friends who could relate. 
            </p>

            <p>
              Eventually I started doing mathematics olympiads and got to make like-minded friends which was really epic.
            </p>
            <p> 
              In 2023 I started studying maths at Stellenbosch University and now I hate it.
            </p>
          </div>

          <figure>
            <img src="kleynbottle.png"/>
            <figcaption>
              Me, in a Klein bottle, <a href="http://www.math.olympiaadid.ut.ee/eng/html/?id=safest"> SAFEST </a> 2022. <br/>
              (Guess you could call it a Kleyn bottle)
            </figcaption>
          </figure>

          <figure>
            <img src="shapes.png"/>
            <figcaption>
              I still have the shapes I folded in 2013.
            </figcaption>
          </figure>

        </div>
      </section>
      
      <section className="scrollSection">
        <div className="interestContent">

          <div className="sectionText">
            <h1> Computers </h1>
            
            <p> I've been obsessed with computers since forever. </p>
            <p> I also like coding and making things. </p>
            <p> For some reason I started doing programming olympiads and am now mentally unstable. </p>
          </div>

          <figure>
            <img src="ioi.png"/>
            <figcaption>
              Me, coding, <a href="https://ioi2023.hu/"> ioi 2023 </a>.
            </figcaption>
          </figure>

        </div>
      </section>

      <section className="scrollSection">
        <div className="interestContent">

          <div className="sectionText">
            <h1> Gaming </h1>
            
            <p> Gaming is a hobby that goes hand-in-hand with liking computers </p>
            
            <p> My favorite games include osu!, Minecraft, Counter-Strike, Stardew Valley, Among Us and Factorio. </p>

            <p> Recently I was recommended Genshin Impact and I don't know how to feel about it. </p>

          </div>

          <figure>
            <img src="gaming.png"/>
            <figcaption>
              Me, gaming and picking my nose at the age of 2.
            </figcaption>
          </figure>

        </div>
      </section>

    </>
  );
}
