import { Container } from 'react-bootstrap';
import reactLogo from '../../images/React_logo_wordmark1.png';

const HomePage = () => {
    return (
        <>
            <Container className="text-center my-5">
                <h1>This is my Home Page</h1>
                <img src={reactLogo} alt="logo" />
                <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                <h3>Footer Home Page</h3>
            </Container>
        </>
    );
};

export default HomePage;
