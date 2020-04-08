import React from 'react';
import Layout from '../common/Layout';
import { useQuery } from 'react-apollo-hooks';
import ggl from 'graphql-tag';
import { Alert } from 'reactstrap';

const ALL_POST = ggl`
    query getPosts{
        getPosts{
            _id
            title
            content
        }
    }
`;

const Home = () => {
    const { data, loading, error } = useQuery(ALL_POST);
    if ( error ) {return <h1>Hubo un error, intenta recargando. :c</h1>}
    if ( loading === true ) {return <h1>Cargando!</h1>}
    return(
        <>
        <Layout head="MI BLOG FAVORITO: POSTEANDO" subheading="Crea una cuenta y empiza a postear">
            <main>
                {
                    data.getPosts.map(post => (
                        <div key={post._id}>
                            <h2> {post.title} </h2>
                            <h3> {post.content} </h3>
                        </div>
                    ))
                    
                }
            </main>
            <Alert color="primary">
                This is a primary alert — check it out!
            </Alert>
        </Layout>
        </>
    );
}

export default Home;