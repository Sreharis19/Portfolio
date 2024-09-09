// Copyright Sreehari Soman 2023,2024. All Rights Reserved.
// Project: portfolio
// Author contact: https://www.linkedin.com/in/sreehari-soman/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
