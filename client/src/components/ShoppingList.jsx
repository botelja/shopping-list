import React, { useState, useEffect } from 'react';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ShoppingList = ({ item, getItems }) => {
  const [items, setItems] = useState(item.items);

  useEffect(() => {
    getItems();
  }, []);

  console.log(items);

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

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(ShoppingList);
