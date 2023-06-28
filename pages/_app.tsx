import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'next-themes';
import { config } from '@fortawesome/fontawesome-svg-core';
import { SessionProvider } from "next-auth/react"
import { useRouter } from 'next/router'
import Script from 'next/script';


function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    config.autoAddCss = false;
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload">
                {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                        });
                    `}
            </Script>
            <Script id="facebook-pixel">
                {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${process.env.FB_PIXEL_ID});
                fbq('track', 'PageView');
            `}
            </Script>
            <meta name="google-site-verification" content="google7fb2af26d7848dd8.html" />
            <SessionProvider session={pageProps.session}>
                <ThemeProvider>
                    {(router.pathname === '/' || router.pathname === '/shop' || router.pathname === '/about') ?
                        <Layout className="bg-primary w-100 overflow-hidden">
                            <ParallaxProvider>
                                <Component {...pageProps} />
                            </ParallaxProvider>
                        </Layout>
                        :
                        <Component {...pageProps} />
                    }

                </ThemeProvider>
            </SessionProvider>
        </>
    );
}

export default MyApp;
