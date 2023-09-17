import * as React from "react";
import { Metadata } from "next";
import "./globals.css";

import styles from "../styles/Home.module.css";
import TopBanner from "@/components/TopBanner";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "../components/HowItWorks";
import Activities from "../components/Activities";
import OurTeam from "@/components/OurTeam";
import OurGoals from "@/components/OurGoals";
import SlideshowCard from "@/components/SlideshowCard";

// const theme = createTheme();
// const sections = [
//   { title: "What is Tree++", url: "#" },
//   { title: "How it Works", url: "#" },
//   { title: "Recent Activities", url: "#" },
//   { title: "Contribute", url: "#" },
//   { title: "Team", url: "#" },
//   { title: "Donors", url: "#" },
//   { title: "Partners", url: "#" },
// ];

export const metadata: Metadata = {
  title: "Tree++ | Digital Carbon Offsetting through Tree Plantation",
};

export default function Home() {
  return (
    <div className={styles.bgimg} style={{ backgroundColor: "white" }}>
      {/* <TheaameProvider theme={theme}> */}

      {/* <Header title="Tree++" pages={sections} /> */}
      <div>
        <TopBanner />
        <main>
          <div className="bg-slate-50">
            <WhoWeAre />
          </div>
          <div className="" id="mission">
            <WhatWeDo />
          </div>
          <div className="bg-slate-50" id="vision">
            <HowItWorks />
          </div>
          <div className="">
            <Activities />
          </div>
          <div className="bg-slate-50">
            <OurGoals />
          </div>
          <div className="">
            <SlideshowCard />
          </div>
          <div className="bg-slate-50" id="team">
            <OurTeam />
          </div>
        </main>
      </div>
    </div>
  );
}
