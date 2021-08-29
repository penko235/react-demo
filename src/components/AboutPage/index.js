import { useContext } from 'react';
import { Context } from '../../App';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const AboutPage = () => {
    const context = useContext(Context);
    console.log(context);
    const users = context.data;
    const isLoading = context.isLoading;

    return (
        <>
            {!isLoading ? (
                <Container className="text-center my-5">
                    <h3>Users: {users && users.length}</h3>
                    <div className="my-5">
                        <Row>
                            {users &&
                                users.map((user, index) => {
                                    return (
                                        <Col lg={6} key={index} className="my-3">
                                            <Link to={`${user.username}`} className={`${styles.link} text-dark`}>
                                                <Card className={styles.card}>
                                                    <Card.Body>
                                                        <Card.Title>{user.username}</Card.Title>
                                                        <Card.Text className="m-0">Name: {user.name}</Card.Text>
                                                        <Card.Text>Company name: {user.company.name}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </Col>
                                    );
                                })}
                        </Row>
                    </div>
                </Container>
            ) : (
                <div className="spinner-container">
                    <Spinner animation="border" />
                </div>
            )}
        </>
    );
};

export default AboutPage;
