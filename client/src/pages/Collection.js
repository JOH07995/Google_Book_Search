import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Hero from '../componets/Hero';
import { Col, Container, Row } from '../componets/Grid';
import { List } from '../componets/List';
import Book from '../componets/Book';
import Card from '../componets/Card';

function Collection() {
    const [books, setBooks] = useState([]);


    // Load all books and store them with setBooks
    useEffect(() => {
        loadSavedBooks();
    }, []);

    // Loads all books and sets them to books
    function loadSavedBooks() {
        API.getSavedBooks()
            .then((res) => setBooks(res.data))
            .catch((err) => console.error(err));
    }

    // Deletes a book from the database with a given id, then reloads books from the db
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
                                <h3>Empty Collection</h3>
                            )}
                    </Card>
                </Col>
            </Row>

        </Container >

    );
}

export default Collection;