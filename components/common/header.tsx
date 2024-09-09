// Copyright Sreehari Soman 2023,2024. All Rights Reserved.
// Project: portfolio
// Author contact: https://www.linkedin.com/in/sreehari-soman/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import Image from "next/image";
import { useState } from "react";
import Menu from "@/components/common/menu";

const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  return (
    <header className="w-full fixed top-0 py-8 select-none z-50 bg-gradient-to-b from-gray-900 to-transparent">
      <div className="flex justify-between section-container">
        <a href="#home" className="link">
          <Image
            src="/logo.svg"
            alt="Logo - Sreehari Soman"
            width={82}
            height={82}
          />
        </a>
        <nav className={`outer-menu ${menuVisible ? "menu-visible" : ""}`}>
          <button
            className="hamburger w-6 h-6 flex items-center justify-center link relative"
            onClick={setmenuVisible.bind(null, !menuVisible)}
          >
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
          </button>
          <Menu setmenuVisible={setmenuVisible} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
