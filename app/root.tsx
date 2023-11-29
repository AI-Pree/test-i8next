import rainbow from "@rainbow-me/rainbowkit/styles.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import type {
  LoaderFunctionArgs,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import skeleton from "react-loading-skeleton/dist/skeleton.css";
import { useChangeLanguage } from "remix-i18next";

import stylesheet from "~/tailwind.css";

import i18next from "./i18next.server";
import styles from "./styles/app.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: skeleton },
  { rel: "stylesheet", href: rainbow },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: MetaFunction = () => {
  return [
    {
      charset: "utf-8",
      "og:title": "Gyrowin ",
      title: "Gyrowin ",
      viewport: "width=device-width,initial-scale=1",
      keywords:
        "Gyrowin, Lottery, DEFI, Decentralized Finance, Crypto, ERC20, Ethereum, Decentralize, Solana, SOL, SPL, Cross-Chain, Borrowing, Lending, Fastest, Fast, FDUSD, TRX, ETH, BNB, SPL Tokens",
      description:
        "Gyrowin - Decentralißsed, lottery, borrowing and lending platform.",
      "msapplication-TileColor": "#da532c",
      "theme-color": "#ffffff",
      "twitter:card": "summary_large_image",
      "twitter:title": "Gyrowin",
      "twitter:description":
        "GyroWin - Decentralised, lottery, borrowing and lending platform",
      "twitter:image": "",
      google: "notranslate",

      // ContentSecurityPolicy: {
      //   httpEquiv: "Content-Security-Policy",
      //   content: "default-src 'self'; img-src https://*; child-src 'none';",
      // },
    },
  ];
};

export const handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await i18next.getLocale(request);
  return json({ locale });
}

export default function App() {
  // Get the locale from the loader
  const { locale } = useLoaderData<typeof loader>();

  const { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()} className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/_static/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
