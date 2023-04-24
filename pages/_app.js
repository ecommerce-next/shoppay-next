import '../styles/globals.scss'
import {Provider} from "react-redux";
import { SessionProvider } from "next-auth/react";
import store from "../store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import Head from "next/head";

let persistor = persistStore(store);

function App({Component, pageProps: {session, ...pageProps}}) {
    return (
        <>
            <Head>
                <title>Shoppay</title>
                <meta
                    name="description"
                    content="Shoppay-online shopping service for all of your needs."
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            <SessionProvider session={session}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Component {...pageProps} />
                    </PersistGate>
                </Provider>
            </SessionProvider>
        </>
    )
}

export default App;
