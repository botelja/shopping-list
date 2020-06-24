import React, { useState } from 'react';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

const shoppingList = [
  { id: uuid(), name: 'Milk' },
  { id: uuid(), name: 'Eggs' },
  { id: uuid(), name: 'Steak' },
  { id: uuid(), name: 'Water' },
];

const ShoppingList = () => {
  const [items, setItems] = useState(shoppingList);

  const addItem = () => {
    const name = prompt('Enter Item');

    if (name) {
      setItems([...items, { id: uuid(), name }]);
    }
  };

  return (
    <Container>
      <Button color="dark" style={{ margin: '2rem 0' }} onClick={addItem}>
        Add Item
      </Button>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                {name}{' '}
                <Button
                  classNames="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    setItems(items.filter((item) => item.id !== id));
                  }}
                >
                  &times;
                </Button>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
