import "../styles/globals.css";

import type { AppProps } from "next/app";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
