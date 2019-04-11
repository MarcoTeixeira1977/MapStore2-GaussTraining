import React from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';

class Gauss extends React.Component {
    static propTypes = {
        text: PropTypes.string
    };

    static defaultProps = {
        text: 'MyText'
    };

    render() {
        return <div className="gauss">{this.props.text}</div>;
    }
}

export const GaussPlugin = assign(Gauss, {
           OmniBar: {
               position: 3,
               tool: true,
               priority: 1
           }
       });
