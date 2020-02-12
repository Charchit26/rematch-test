import React from "react";

import { connect } from "react-redux";

const CompC = props => (
    <button onClick={() => {
                console.log('dsd');
                props.incrementAsync(1)
                }
              } >Hello {props.count}
    </button>
)

const mapState = state => ({
    count: state.count,
});

const mapDispatch = dispatch => ({
  incrementAsync: () => dispatch.count.incrementAsync(1),
});

export default connect(mapState, mapDispatch)(CompC);