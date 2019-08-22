import React, { PureComponent } from "react";
import { connect } from "react-redux";
import withSizes from "react-sizes";

import * as actions from "../redux/actions/list";

import List from "../components/List";

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 960
});

const ListWithSizes = withSizes(mapSizesToProps)(List);

class ListContainer extends PureComponent {
  componentDidMount() {
    const { loadList } = this.props;
    loadList();
  }

  render() {
    const { list, dismissPost, dismissAll } = this.props;

    return (
      <ListWithSizes
        list={list}
        dismissPost={dismissPost}
        dismissAll={dismissAll}
      />
    );
  }
}

const mapStateToProps = state => ({
  list: state.list.filter(item => !item.dismissed)
});

const mapDispatchToProps = dispatch => ({
  loadList: () => dispatch(actions.loadList()),
  dismissPost: id => dispatch(actions.dismissReddit(id)),
  dismissAll: () => dispatch(actions.dismissAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
