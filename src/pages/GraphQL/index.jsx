import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, ApolloLink } from '@apollo/client'
// Error Handling
// to catch and handle server errors, network errors, and GraphQL errors.
import { onError } from '@apollo/client/link/error'

const EXCHANGE_RATES = gql`
    query GetExchangeRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`

const ExchangeComp = (props) => {
    const {data, error, loading } = useQuery(EXCHANGE_RATES)
    if (loading) return <p>loading....</p>
    if (error) return <p>Error....</p>
    return ((data?.rates) || []).map(i => (
        <div key={i.currency}>
            <p>{i.currency}: {i.rate}</p>
        </div>
    ))
}

const errorLink = onError(({graphqlErrors, networkError}) => {
    if (graphqlErrors) {
        graphqlErrors.map(({message, locations, path}) => console.log(`
            [Graphql error]: Message: ${message}, Location: ${locations}, Path: ${path}
        `))
    }
    if (networkError) {
        console.log('Status', networkError.statusCode)
        const status = networkError.statusCode
        if (status === 302) {
            // 重定向
            window.location.href='redirect_path'
        }
        if (status === 403) {
            // 登录
            localStorage.removeItem('access_token')
            window.location.href = `/login`
        }else if (status === 503 && process.env.NODE_ENV === 'production') {
            console.log('服务器报错')
        } else {
            console.log(`[Network error]: ${networkError}`)
        }
    }
})

const link = ApolloLink.from([errorLink])


const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io', //后端接口地址
    cache: new InMemoryCache(),
    link
})

const GraphQL = () => {
    return (
        <ApolloProvider client={client}>
            <ExchangeComp />
        </ApolloProvider>
    )
}
export default GraphQL