import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { CounterProvider } from './context/CounteContext'
export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }
    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <title>My new cool app</title>
                </Head>
                <CounterProvider>
                    <Component {...pageProps} />
                </CounterProvider>
            </>
        )
    }
}
