"use client";
import SearchBar from "../../components/SearchBar";
import ActivityImageCard from "../../components/ActivityImageCard";
import React, { useEffect, useState } from "react";

export default function tree_details() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLargeScreen) {
    // Render for larger screens
    return (
      <div className="flex flex-col justify-center items-center">
        <SearchBar />
        <p className="pt-8 paragraph-text text-left">
          Each of our tree is tagged and is uniquely trackable. To find the
          details of any tree search with the tree details.
        </p>
        <div className="flex flex-col items-start w-2/3 mt-10">
          <p className="head-text">Recent</p>
          <div className="flex flex-col md:flex-row gap-x-10 items-center my-10 pl-2.5 pb-5">
          <a href="/tree-details/000182"> {/* Replace with the appropriate URL */}
    <ActivityImageCard src="/tree.jpeg" name="Banayan" id="000182" />
  </a>
            <ActivityImageCard src="/tree.jpeg" name="Shegun" id="000183" />
            <ActivityImageCard src="/tree.jpeg" name="Papaya" id="000184" />
            <ActivityImageCard src="/tree1.jpeg" name="Mango" id="000185" />
            <ActivityImageCard src="/tree1.jpeg" name="Apple" id="000186" />
          </div>
        </div>
      </div>
    );
  } else {
    // Render for smaller screens
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <SearchBar />
        <p className="pt-8 paragraph-text text-left px-5">
          Each of our trees is tagged and uniquely trackable. To find the
          details of any tree, search with the tree details.
        </p>
        <div className="w-2/3 mt-10">
          <p className="head-text">Recent</p>
          <div className="flex flex-col md:flex-row gap-x-10 gap-y-5 my-10 pl-2.5 pb-5 justify-center items-center"> {/* Center align */}
            <div className="flex flex-row flex-wrap gap-3"> {/* Adding gap between cards */}
              <ActivityImageCard src="/tree.jpeg" name="Banayan" id="000182" />
              <ActivityImageCard src="/tree.jpeg" name="Shegun" id="000183" />
              <ActivityImageCard src="/tree.jpeg" name="Papaya" id="000184" />
            </div>
            <div className="flex flex-row flex-wrap gap-3"> {/* Adding gap between cards */}
              <ActivityImageCard src="/tree1.jpeg" name="Mango" id="000185" />
              <ActivityImageCard src="/tree1.jpeg" name="Apple" id="000186" />
              <ActivityImageCard src="/tree1.jpeg" name="Apple" id="000186" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
