import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        // this function tells the list how to generate key
        keyExtractor={(library) => library.id}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};


export default connect(mapStateToProps)(LibraryList);
