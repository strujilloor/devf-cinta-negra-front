import React from 'react';
import Layout from '../common/Layout';
import PostPreview from '../components/PostPreview';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { Spinner } from 'reactstrap';

const ALL_POST = gql`
    query getPosts{
        getPosts{
            _id
            title
            content
            author {
                _id
                first_name
            }
        }
    }
`;

const Home = () => {
    const { data, loading, error } = useQuery(ALL_POST);
    return(
        <>
        <Layout head="Clean Blog" subheading="A Blog Theme by Start Bootstrap">
            <main className="container">
                {
                    loading 
                        ? <>
                            <h1>Cargando!</h1>
                            <Spinner color="dark" />
                        </> 
                        : error 
                            ? <h1>Hubo un error, intenta recargando. :c { error } </h1>
                            : data.getPosts.map(( post ) => (
                                <PostPreview _id={ post._id } title={ post.title } author={ post.author } key={ post._id } />
                            ))
                    
                    
                }
            </main>
        </Layout>
        </>
    );
}

export default Home;