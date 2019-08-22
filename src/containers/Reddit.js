import React, { PureComponent } from "react";
import { connect } from "react-redux";
import get from "lodash.get";

import * as actions from "../redux/actions/reddit";

import Reddit from "../components/Reddit";

class RedditContainer extends PureComponent {
  componentDidMount() {
    const { loadReddit } = this.props;
    const id = get(this.props, "match.params.id");
    loadReddit(id);
  }

  render() {
    const { reddit } = this.props;
    return <Reddit reddit={reddit} />;
  }
}

const mapStateToProps = state => ({
  reddit: state.reddit
});

const mapDispatchToProps = dispatch => ({
  loadReddit: id => dispatch(actions.loadReddit(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditContainer);
