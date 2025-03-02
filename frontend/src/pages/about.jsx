import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobelContext.js";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import SidebarGuest from "../components/sidebar-guest.js";
function About() {
  const { setIsAuthUser, isAuthUser } = useContext(GlobalContext);
  const [more, setMore] = useState("");
  const auth = isAuthUser?.email;
  return (
    <div className="px-4 md:px-8 lg:px-[150px]">
      <Navbar />
      <div className="flex flex-col md:flex-row my-6 md:my-10">
        <div className="hidden md:block">
          {auth ? (
            <Sidebar className="hidden md:block bg-gray-800 text-white w-full md:w-auto mb-4 md:mb-0" />
          ) : (
            <SidebarGuest className="hidden md:block w-full md:w-auto mb-4 md:mb-0" />
          )}
        </div>
        <div className="w-full md:ml-4">
          <h3 className="text-2xl md:text-3xl text-center font-bold mb-6 md:mb-10">
            About
          </h3>
          {/* Hero Section */}
          <div className="flex border flex-col-reverse md:flex-row justify-between bg-[#f8f5f1] rounded-xl">
            <div className="flex flex-col justify-center items-center text-center mb-4 md:mb-0">
              <h3 className="font-bold mt-6 md:mt-0 text-xl md:text-2xl mb-4">
                About Climate Heritage
              </h3>
              <p className="text-sm px-2 md:px-5">
                Heritage Climate is your hub for archaeological and heritage
                conservation exploration. Connect with fellow enthusiasts, share
                knowledge, and collaborate on projects. Discover a world of
                ancient civilizations and modern preservation efforts. Join our
                community and be part of the future of heritage.
              </p>
            </div>
            <img
              src="/about.png"
              alt=""
              className="w-full md:w-[300px] object-contain"
            />
          </div>
          {/* Research Interests Section */}
          <div className="mt-5">
            <h3 className="text-left mt-4 my-4 text-xl font-bold">
              Research interests
            </h3>
            {/* History Timeline */}
            <div className="bg-[#f8f5f1] border p-4 md:p-5 rounded-xl mb-4">
              <p className=" mb-3 font-bold">History and Timeline</p>
              <div className="flex items-center flex-row justify-between">
                <img
                  src="/Research-about.png"
                  alt=""
                  className="w-[150px] md:mx-0 mb-4 md:mb-0"
                />
                <div className="grid items-center ml-2 grid-cols-2 gap-4 md:gap-10">
                  <div>
                    <p className="text-[10px] md:text-base mb-4 md:mb-10">
                      Ancient Civilizations
                    </p>
                    <p className="text-[10px] md:text-base">Medieval Period</p>
                  </div>
                  <div>
                    <p className=" text-[10px] md:text-base mb-4 md:mb-10">
                      Modern Era
                    </p>
                    <p className="text-[10px] md:text-base">Prehistoric Era</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Sites and Monuments */}
            <div className="bg-[#f8f5f1] border p-4 md:p-5 rounded-xl mb-4">
              <p className=" mb-3 font-bold">Sites and Monuments</p>
              <div className="flex items-center flex-row justify-between">
                <img
                  src="/Research-about 2.png"
                  alt=""
                  className="w-[150px] md:mx-0 mb-4 md:mb-0"
                />
                <div className="grid ml-2 items-center grid-cols-2 gap-4 md:gap-10">
                  <div>
                    <p className="text-[10px] md:text-base mb-4 md:mb-10">
                      World Heritage Sites
                    </p>
                    <p className=" text-[10px] md:text-base">Virtual Tours</p>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-base mb-4 md:mb-10">
                      Regional Archaeology
                    </p>
                    <p className=" text-[10px] md:text-base">
                      Archaeological Sites
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Cultural Heritage */}
            <div className="bg-[#f8f5f1] border p-4 md:p-5 rounded-xl">
              <p className=" mb-3 font-bold">Cultural Heritage</p>
              <div className="flex items-center flex-row justify-between">
                <img
                  src="/Research-about 3.png"
                  alt=""
                  className="w-[150px] md:mx-0 mb-4 md:mb-0"
                />
                <div className="grid ml-2 items-center grid-cols-2 gap-4 md:gap-10">
                  <div>
                    <p className="text-[10px] md:text-base mb-4 md:mb-10">
                      Conservation Projects
                    </p>
                    <p className="text-[10px] md:text-base">
                      Heritage Management
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-base mb-4 md:mb-10">
                      Cultural Impact
                    </p>
                    <p className="text-[10px] md:text-base">
                      Legal Protections
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Section */}
          <div className="flex  border mt-4 flex-col-reverse lg:flex-row justify-between bg-[#f8f5f1] rounded-xl">
            <div className="flex flex-col  text-center">
              <h3 className="font-bold  text-xl md:text-2xl mt-3 ">
                About Agya
              </h3>
              <p className="text-[12px] px-2 md:px-5 mb-4">
                The Arab-German Young Academy of Sciences and Humanities (AGYA)
                brings together excellent Arab and German scholars to address
                common challenges and develop solutions through sustainable
                research cooperation.
              </p>
              <p className="text-[12px] px-2 md:px-5">
                AGYA promotes early-career scholars (3–10 years after PhD) from
                22 countries in the Arab world and Germany. The academy members
                implement joint research projects and initiatives at the
                interface of science and society with a focus on education,
                innovation, and science policy.
              </p>
            </div>
            <img
              src="/about-1.png"
              alt=""
              className="w-full md:w-[400px] object-contain"
            />
          </div>
          <div className="my-6">
            <h3 className="text-center mt-4 my-4 text-xl">Agya Members</h3>
            <div className=" flex flex-col lg:flex-row ">
              <div>
                <img src="/about-2.png" alt="" className=" block mx-auto " />
                <h4 className=" font-bold text-center mt-3">
                  Phillip Grimberg
                </h4>
                <p className="text-[#aaa] text-center">
                  University of Heidelberg & Friedrich-Alexander University
                  Erlangen-Nuremberg, Germany
                </p>
                <p className="text-center max-w-full w-[500px] lg:w-96   block mx-auto ">
                  Philip is a cultural historian interested in the interplay of
                  material culture, collecting, and elite cultures as well as
                  antiquarianism and early practices of archaeology in Late
                  Imperial (11th-19th century) China. His current research
                  focuses on{" "}
                  {more === "" || more ===  "m" ? (
                    <button
                      className="text-blue-500 hover:no-underline underline"
                      onClick={() => setMore("Phillip")}
                    >
                      see more
                    </button>
                  ) : null}{""}
                  {more === "Phillip" ? (
                    <span>
                      the private art collections of the Qing-Emperor Yongzheng
                      (1723-1735) and their use as tools for cultural and
                      political propaganda. In addition, I work on the role of
                      cultural heritage and cultural diplomacy in modern and
                      contemporary China as well as on the influence of climate
                      change on heritage protection and policymaking. Currently,
                      I am the Principal Investigator of the research project
                      “Guwantu – Die ‘Illustrationen antiker Kuriosa’ des
                      Yongzheng-Kaisers (1723-1735). Ein Beispiel höfischer
                      Sammlungspraxis und -dokumentation in der Qing-Zeit“ at
                      the University of Heidelberg as well as Associate
                      Professor of Chinese Studies at Friedrich-Alexander
                      University Erlangen-Nuremberg.
                    </span>
                  ) : null}
                </p>
              </div>
              <div className="hidden lg:flex  w-1 bg-black/40 mx-4 " />
              <div>
                <img src="/about-3.png" alt="" className="   block mx-auto" />
                <h4 className=" font-bold text-center mt-3">Lobna Said</h4>
                <p className="text-[#aaa] text-center">
                  Nile University, Egypt
                </p>
                <p className="text-center max-w-full w-[500px] lg:w-96  block mx-auto">
                  {" "}
                  Lobna A. Said (Senior Member IEEE 2020) is a full-time
                  Associate Professor at the Faculty of Engineering and Applied
                  Science, Nile University (NU). She is the director of the
                  Microelectronics System Design Master Program(MSD){" "}
                  {more === "" || more === "Phillip" ? (
                    <button
                      className="text-blue-500 hover:no-underline underline"
                      onClick={() => setMore("m")}
                    >
                      see more
                    </button>
                  ) : null}{" "}
                  {more === "m" ? (
                    <span>
                      {" "}
                      and the former Co-director of the Nanoelectronics
                      Integrated System Design Research Center (NISC). She
                      received her B.Sc., M.Sc., and PhD in electronics and
                      electrical communications from Cairo University, Egypt, in
                      2007, 2011, and 2016, respectively. She has over 200
                      publications distributed between high-impact journals,
                      conferences, and book chapters. She has an H- index of 31,
                      as reported by the Scopus database. Her interdisciplinary
                      research interests include modeling, control, optimization
                      techniques, analog and digital integrated circuits,
                      fractional-order circuits and systems, Memristors,
                      non-linear analysis, and chaos theory. She was involved in
                      many national/international research grants as a PI,
                      Co-PI, or Senior Researcher/ Member. She is the Vice-Chair
                      of the technical Chapters of the IEEE Egypt Section and
                      the Chair of the IEEE Computational Intelligence Egypt
                      Chapter. She is the Counselor of the IEEE NU student
                      branch 2018-present. She has been the Co-chair of WIE in
                      the IEEE CAS Egypt Technical Chapter since 2021. She won
                      the state encouragement award for the year 2019 in
                      engineering science. She received the Excellence Award
                      from the Center for the Development of Higher Education
                      and Research in 2019 for the best PhD thesis in 2016. She
                      won the Dr Hazem Ezzat Prize for Outstanding Researcher NU
                      2019 and 2020. Her name was in the Top 2% of Scientists,
                      according to the Stanford Report for 2019, 2020, and 2021.
                      She has received the Recognized Reviewer Award from many
                      international journals. She was awarded the IEEE
                      Outstanding Branch Counselor & Branch Chapter Advisor
                      Award in 2021. In 2022, she received the Junior Faculty
                      Development Program (JFDP) from Fulbright. In 2023, She
                      received the Africa Science Leadership Programme (ASLP)
                      fellowship from The University of Pretoria and the Global
                      Young Academy, with the support of the Robert Bosch
                      Stiftung. In 2019, she was selected as a member of the
                      Egyptian Young Academy of Sciences (EYAS) to empower and
                      encourage young Egyptian scientists in science and
                      technology and build knowledge-based societies. In 2020,
                      she was elected as the Co-Chair of EYAS. Furthermore, in
                      2020, she was selected to be an African Academy of Science
                      (AAS) affiliate member. In 2020, she was also chosen to be
                      a Member of the Arab-German Young Academy of Sciences and
                      Humanities (AGYA). In 2021, she was selected to be a
                      Member of the Council for Future Studies and Risk
                      Management, ASRT, Egypt. Additionally, she served on the
                      technical and organizing committees of many international
                      conferences, organized special sessions, and was selected
                      as a TWAS Young Affiliate. In 2022, she was elected as a
                      steering committee member of AGYA. In 2022, she joined the
                      editorial board of Four journals belonging to these
                      publishers: Elsevier, MDPI, and Frontiers. In 2023, she
                      was elected to be the co-president of AGYA and selected to
                      be a Member of the Organization for Women in Science for
                      the Developing World (OWSD)
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
          {/* Climate Heritage Aim Section */}
          <div className="my-6">
            <h3 className="text-center mt-4 my-4 text-xl">
              The Heritage Watcher Aim
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: "/heroicons-outline_user-group.png",
                  text: "Enhance collective efforts in heritage preservation",
                },
                {
                  icon: "/icon-park_future-build-three.png",
                  text: "Bridge gaps between disciplines",
                },
                {
                  icon: "/mdi_lightbulb-group-outline.png",
                  text: "Provide community for knowledge exchange and scientific topics discussions",
                },
                {
                  icon: "/grommet-icons_book.png",
                  text: "Provide educational materials for enthusiasts and professionals",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border py-6 px-4 flex flex-col justify-center items-center text-center border-[#8f4012] rounded-xl"
                >
                  <img alt="" className="w-8 mb-4" src={item.icon} />
                  <p className="font-bold text-xs">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Collaborations Section */}
          <div className="my-6">
            <h3 className="text-center mt-4 my-4 text-xl">Collaborations</h3>
            <div className="bg-[#f8f5f1] rounded-xl">
              <div className="flex flex-col sm:flex-row justify-center items-center p-6 md:p-10 gap-6 md:gap-10">
                <img
                  src="/Nile_University_logo 1.png"
                  className="w-24 md:w-28"
                  alt="Nile University"
                />
                <img
                  src="/BMBF_Logo.svg 1.png"
                  className="w-24 md:w-28"
                  alt="BMBF"
                />
                <img src="/image 1371.png" className="w-24 md:w-28" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
