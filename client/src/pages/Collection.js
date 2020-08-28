import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Hero from '../components/Hero';
import { Col, Container, Row } from '../components/Grid';
import { List } from '../components/List';
import Book from '../components/Book';
import Card from '../components/Card';

function Collection() {
    const [books, setBooks] = useState([]);


    // Loads all books and stores with setBooks
    useEffect(() => {
        loadSavedBooks();
    }, []);

    // Loads all books and sets them to books
    function loadSavedBooks() {
        API.getSavedBooks()
            .then((res) => setBooks(res.data))
            .catch((err) => console.error(err));
    }

    // Deletes book from database with given id, then reloads books from db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(() => loadSavedBooks())
            .catch((err) => console.error(err));
    }
    console.log(books);
    return (
        <Container fluid>
            <Hero />
            <Row>
                <Col size="md-12">
                    <Card title="Collections" icon="fas fa-swatchbook">
                        {books.length ? (
                            <List>
                                {books.map((book) => (
                                    <Book
                                        key={book._id}
                                        title={book.title}
                                        authors={books.authors}
                                        description={book.description}
                                        image={book.image}
                                        link={book.link}
                                        onSubmit={() => deleteBook(book._id)}
                                        submitLabel="Delete"
                                        submitBtnClassName="btn btn-danger"
                                    ></Book>
                                ))}
                            </List>

                        ) : (
                                <h3>Empty Collection - that's sad.</h3>
                            )}
                    </Card>
                </Col>
            </Row>

        </Container >

    );
}

export default Collection;