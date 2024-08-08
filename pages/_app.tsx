import MainLayout from "@/components/Mainlayout/MainLayout";
import type { AppProps } from "next/app";
import "../styles/fonts.scss";
import "../_global.scss";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { init_i18n } from "../i18n";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Routes } from "@/Routes";
import { BreakpointProvider } from "@/components/Providers/ProviderMenu";
import { useEffect } from "react";
import { SnackbarProvider } from "notistack";
import Head from "next/head";

function getCookieValue(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function getToken(): string | null {
  const tokenCookieName = "currentUser";
  const tokenValue = getCookieValue(tokenCookieName);

  let token: string | null = null;
  try {
    const cookieObject = tokenValue ? JSON.parse(tokenValue) : null;
    token = cookieObject ? cookieObject.token : null;
  } catch (e) {
    console.error("Error parsing cookie:", e);
  }
  return token;
}

const authLink = new ApolloLink((operation, forward) => {
  const token = getToken();

  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});

const BACKEND_URL = `${process.env.BACKEND_URL}` || "http://localhost:8080";
const httpLink = new HttpLink({ uri: `${BACKEND_URL}/graphql` });

const logLink = new ApolloLink((operation, forward) => {
  console.log(`[Request]:`, operation);
  return forward(operation).map((response) => {
    console.log(`[Response]:`, response);
    return response;
  });
});

const client = new ApolloClient({
  link: ApolloLink.from([logLink, authLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let locale = router.locale || "ru";
  init_i18n(locale);
  const noLayout = router.pathname === Routes.landing();

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll detected on window");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <BreakpointProvider>
          <Head>
            <title>TaskMinder</title>
            <link rel="icon" href="/images/logo.png" />
          </Head>
          {noLayout ? (
            <Component {...pageProps} />
          ) : (
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          )}
        </BreakpointProvider>
      </SnackbarProvider>
    </ApolloProvider>
  );
}

export default appWithTranslation(MyApp);
