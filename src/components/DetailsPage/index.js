import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '../../App';

const DetailsPage = (props) => {
    const context = useContext(Context);
    const users = context.data;
    const username = props.match.params.username;

    let details = {};

    if (users) {
        for (let i of users) {
            if (username === i.username) {
                details = i;
                break;
            }
        }
    }

    return (
        <>
            <Container className="text-center my-5">
                <h1>{details.name}</h1>
                <h1>{details.email}</h1>
                <h1>{details.website}</h1>
            </Container>
        </>
    );
};

export default DetailsPage;
