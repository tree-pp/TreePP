import * as React from "react";
import { Metadata } from "next";
import "./globals.css";

import styles from "../styles/Home.module.css";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "../components/HowItWorks";
import Activities from "../components/Activities";
import OurTeam from "@/components/OurTeam";
import OurGoals from "@/components/OurGoals";
import Testimony from "@/components/Testimony";

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
        <main>
          <div className="bg-slate-50 px-5">
            <WhoWeAre />
          </div>
          <div className="px-5">
            <WhatWeDo />
          </div>
          <div className="bg-slate-50 px-5">
            <HowItWorks />
          </div>
          <div className="px-5">
            <Activities />
          </div>
          <div className="bg-slate-50 px-5">
            <OurGoals />
          </div>
          <div className="px-5">
            <Testimony />
          </div>
          <div className="bg-slate-50 px-5">
            <OurTeam />
          </div>
        </main>
      </div>
    </div>
  );
}
