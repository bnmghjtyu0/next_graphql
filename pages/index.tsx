import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import { useAmp } from 'next/amp';
import { useCount, useDispatchCount } from './context/CounteContext';
import { client } from './api/custom';
export const config = { amp: 'hybrid' };
interface HomeProps {
    stars: [];
}
const imgSrc = 'https://placekitten.com/1000/1000';
const Home: NextPage<HomeProps> = ({ results }) => {
    console.log(results);
    const count = useCount();
    const dispatch = useDispatchCount();

    console.log(count);

    const isAmp = useAmp();
    console.log(isAmp);

    const handleIncrease = (event) =>
        dispatch({
            type: 'INCREASE',
        });
    const handleIncrease15 = (event) =>
        dispatch({
            type: 'INCREASE_BY',
            payload: 15,
        });

    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Link href="/blog/[slug]" as="/blog/hello-world">
                <a>To Hello World Blog post</a>
            </Link>
            {/* <button onClick={() => Router.push(url, as, options:{ shallow: true })}></button> */}
            {count}
            <button onClick={() => Router.push('/post/[...slug]', '/post/b/c')}>
                連結
            </button>
            <button onClick={() => Router.replace('/')}>replace</button>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleIncrease15}>Increase By 15</button>
            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
};

Home.getInitialProps = async (ctx) => {
    const res = await client(
        'movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1',
        {}
    );
    return { results: res.results };
    // const res = await fetch('https://api.github.com/repos/zeit/next.js');
    // const json = await res.json();
    // return { stars: json.stargazers_count };
};

export default Home;
