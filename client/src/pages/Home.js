import React, { useState } from 'react';
import API from '../utils/API';
import Hero from '../components/Hero';
import { Button, Input } from '../components/Form'
import { Col, Container, Row } from '../components/Grid';
import { List } from '../components/List';
import Book from '../components/Book';
import Card from '../components/Card';
import './style.css';

function Home() {
    // Setting component initial state
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');

    // Handles updating component state when user types into input
    function handleInputChange(event) {
        setQuery(event.target.value);
    }

    // When form is submitted, use API.saveBook method to save book data
    // Then reload books from db
    function handleFormSubmit(event) {
        event.preventDefault();

        API.getBooks(query)

            .then((res) => {
                console.log(query);
                setBooks(res.data.items);
            })
            .catch((err) => console.error(err));
    }

    function saveBook(bookId) {
        const book = books.find((book) => book.id === bookId);

        API.saveBook({
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors[0],
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink,
        })
            .then((res) => {
                if (res.data.status === 'error') {
                    throw new Error(res.data.message);
                }
            })
            .catch((err) => console.log(err.response));
    }

    return (
        <Container fluid>
            <Hero />


            <Row>
                <Col size="md-12">

                    <Card title="Google Book Search" icon="fas fa-book-reader">
                        <Row>
                            <Col size="md-8">
                                <form id="mainDiv">

                                    <Input

                                        onChange={handleInputChange}
                                        name="title"
                                        placeholder="Search by Book Title"

                                    />

                                </form>
                            </Col>
                            <Col size="md-4">
                                <Button onClick={handleFormSubmit}>Search</Button>
                            </Col>
                        </Row>
                        <Row>
                            {books.length ? (


                                <List>
                                    {books.map((book) => (
                                        <Book
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            authors={book.volumeInfo.authors}
                                            description={book.volumeInfo.description}
                                            image={book.volumeInfo.imageLinks.thumbnail}
                                            link={book.volumeInfo.infoLink}
                                            onSubmit={() => saveBook(book.id)}
                                            submitLabel="Save"
                                            submitBtnClassName="btn btn-dark"
                                        ></Book>
                                    ))}
                                </List>
                            ) : (
                                    <h2 id="infox" >Please enter your search in the input above.</h2>
                                )}
                        </Row>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default Home;