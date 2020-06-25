import React, { useEffect } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ShoppingList = ({ item, getItems, deleteItem }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {item.items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                {name}{' '}
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => deleteItem(_id)}
                >
                  &times;
                </Button>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </>
  );
};

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
