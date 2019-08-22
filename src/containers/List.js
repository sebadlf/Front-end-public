import React, { PureComponent } from "react";
import { connect } from "react-redux";

import * as actions from "../redux/actions/list";

import List from "../components/List";

class ListContainer extends PureComponent {
  componentDidMount() {
    const { loadList } = this.props;
    loadList();
  }

  render() {
    const { list } = this.props;

    return <List list={list} />;
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  loadList: () => dispatch(actions.loadList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
