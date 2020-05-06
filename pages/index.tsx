import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import fetch from 'isomorphic-unfetch';

global.Headers = global.Headers || require('fetch-headers');

// Create a RestLink for the Github API
const link = new RestLink({
    uri: 'https://api.themoviedb.org/3',
    customFetch: fetch,
});

// Configure the ApolloClient with the recommended cache and RestLink
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

// A simple query to retrieve metada about a specific repository
const query = gql`
    query MovieNowPlay {
        movieDatas
            @rest(
                type: "MovieNowPlay"
                path: "/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1"
            ) {
            results
        }
    }
`;

const Home = () => {
    const [datas, setDatas] = React.useState({ results: [] });
    client.query({ query }).then((response) => {
        console.log(response);
        console.log(response.data.movieDatas);
        setDatas(response.data.movieDatas);
    });

    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            123
            {datas &&
                datas.results.map((data, idx) => {
                    return <div>{data.title}</div>;
                })}
        </div>
    );
};

export default Home;
