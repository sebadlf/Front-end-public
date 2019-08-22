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
    const { list, dismissPost } = this.props;

    return <List list={list} dismissPost={dismissPost} />;
  }
}

const mapStateToProps = state => ({
  list: state.list.filter(item => !item.dismissed)
});

const mapDispatchToProps = dispatch => ({
  loadList: () => dispatch(actions.loadList()),
  dismissPost: id => dispatch(actions.dismissReddit(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
