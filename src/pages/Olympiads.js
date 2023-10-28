import "./Olympiads.css";
import Typewriter from "../components/Typewriter";
import ResponsiveText from "../components/ResponsiveText";

function TableKey() {
  return (
    <div className="tableKey">
      <p> <q>—</q> means that I took part but didn't do well enough :( </p>
      <p> HM - Honourable Mention</p>
      <p> B - Bronze </p>
    </div>
  );
}

export default function Olympiads() {
  return (
    <>
      <section className="screenSection">
        <div className="sectionContent">
          <div className="introText">
            <Typewriter lines={[
              "I did some olympiads...",
              "If you're bored, scroll down", 
              "to see some of my achievements.",
            ]} letterTime={15} lineTime={200} />
          </div>
        </div>
      </section>

      <section className="screenSection">
        <div className="sectionContent">
          <div className="infoText">
            <h1> Mathematics </h1>
            <p> When I started highschool, my sister told me that I should do math olympiads because they're fun. </p>
            <p> I will NEVER forgive her for lying to me. </p>

            <div className="tableContainer">
              <table>
                <tr>
                  <th> <ResponsiveText longText="Olympiad" shortText="" /> </th>
                  <th> 2018 </th>
                  <th> 2019 </th>
                  <th> 2020 </th>
                  <th> 2021 </th>
                  <th> 2022 </th>
                  <th> 2023 </th>
                </tr>

                <tr>
                  <th> <a href="https://www.uctmathscompetition.org.za/"> 
                    <ResponsiveText longText="UCT Maths competition" shortText="UCT" />
                  </a> </th>
                  <td> <ResponsiveText longText="6th Place" shortText="6th" /> </td>
                  <td> <ResponsiveText longText="8th Place" shortText="8th" /> </td>
                  <td> </td>
                  <td> <ResponsiveText longText="2nd Place" shortText="2nd" /> </td>
                  <td> <ResponsiveText longText="3rd Place" shortText="3rd" /> </td>
                  <td> </td>
                </tr>

                <tr>
                  <th> <a href="https://wmc.ms.wits.ac.za">
                    <ResponsiveText longText="Wits Maths competition" shortText="Wits" />
                  </a> </th>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> <ResponsiveText longText="5th Place" shortText="5th" /> </td>
                  <td> <ResponsiveText longText="8th Place" shortText="8th" /> </td>
                  <td> </td>
                </tr>

                <tr>
                  <th> <a href="https://www.up.ac.za/mathematics-and-applied-mathematics/article/47663/up-mathematics-competition">
                    <ResponsiveText longText="UP Maths competition" shortText="UP" />
                  </a> </th>
                  <td> </td>
                  <td> <ResponsiveText longText="1st Place" shortText="1st" /> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>

                <tr>
                  <th> <a href="https://www.simonmarais.org/">
                    <ResponsiveText longText="Simon Marais Maths competition" shortText="SMMC" />
                  </a> </th>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> TBA </td>
                </tr>

                <tr>
                  <th> <a href="https://www.samf.ac.za/en/">
                    <ResponsiveText longText="South African Maths Olympiad" shortText="SAMO" />
                  </a> </th>
                  <td> — </td>
                  <td> — </td>
                  <td> — </td>
                  <td> <ResponsiveText longText="7th Place" shortText="7th" /> </td>
                  <td> <ResponsiveText longText="7th Place" shortText="7th" /> </td>
                  <td> </td>
                </tr>

                <tr>
                  <th> <a href="https://www.samf.ac.za/en/">
                    <ResponsiveText longText="South African Tertiary Maths Olympiad" shortText="SATMO" />
                  </a> </th>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> <ResponsiveText longText="13th Place" shortText="13th" /> </td>
                  <td> <ResponsiveText longText="1st Place" shortText="1st" /> </td>
                  <td> <ResponsiveText longText="3rd Place" shortText="3rd" /> </td>
                </tr>

                <tr>
                  <th> <a href="https://www.imo-official.org/">
                    <ResponsiveText longText="International Maths Olympiad" shortText="IMO" />
                  </a> </th>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> <ResponsiveText longText="H. Mention" shortText="HM" /> </td>
                  <td> </td>
                </tr>

                <tr>
                  <th> <a href="https://www.imc-math.org.uk/">
                    <ResponsiveText longText="International Maths Competitions" shortText="IMC" />
                  </a> </th>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> <ResponsiveText longText="Bronze Medal" shortText="B" /> </td>
                </tr>

              </table>
            </div>
            <TableKey />
          </div>
        </div>
      </section>

      <section className="screenSection">
        <div className="sectionContent">
          <div className="infoText">
            <h1> Programming </h1>
            <p> In the 11th grade, my IT teacher asked us if we wanted to take part in the programming olympiad. </p>
            <p> Of course I said yes, and then took it way too seriously. </p>

            <div className="tableContainer">
              <table>
                <tr>
                  <th> 
                    <ResponsiveText longText="Olympiad" shortText="" />
                  </th>
                  <th> 2021 </th>
                  <th> 2022 </th>
                  <th> 2023 </th>
                </tr>

                <tr>
                  <th> <a href="https://olympiad.org.za/programming-olympiad/">
                    <ResponsiveText longText="South African Programming Olympiad" shortText="SAPO" />
                  </a> </th>
                  <td> <ResponsiveText longText="H. Mention" shortText="HM" /> </td>
                  <td> <ResponsiveText longText="1st Place" shortText="1st" /> </td>
                  <td>  </td>
                </tr>

                <tr>
                  <th> <a href="https://olympiad.org.za/programming-olympiad/">
                    <ResponsiveText longText="International Olympiad in Informatics" shortText="IOI" />
                  </a> </th>
                  <td>  </td>
                  <td> — </td>
                  <td> <ResponsiveText longText="Bronze Medal" shortText="B" /> </td>
                </tr>

              </table>
            </div>

            <TableKey />

          </div>
        </div>
      </section>

    </>
  );
}
