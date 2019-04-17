/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/
const React = require('react');
const PropTypes = require('prop-types');
const AttributeEditor = require('../../MapStore2/web/client/components/data/featuregrid/editors/AttributeEditor');

class GaussCustomEditor extends AttributeEditor {
    static propTypes = {
        column: PropTypes.object,
        dataType: PropTypes.string,
        defaultOption: PropTypes.string,
        forceSelection: PropTypes.bool,
        allowEmpty: PropTypes.bool,
        inputProps: PropTypes.object,
        isValid: PropTypes.func,
        onBlur: PropTypes.func,
        typeName: PropTypes.string,
        url: PropTypes.string,
        value: PropTypes.string,
        filter: PropTypes.string,
        values: PropTypes.array
    };
    static defaultProps = {
        isValid: () => true,
        dataType: "string",
        filter: "contains",
        values: [],
        forceSelection: true,
        allowEmpty: true
    };
    constructor(props) {
        super(props);
        this.validate = (value) => {
            try {
                return this.props.isValid(value[this.props.column && this.props.column.key]);
            } catch (e) {
                return false;
            }
        };
        this.getValue = () => {
            return super.getValue();
        };
    }
    render() {
        return <div>This is my fake editor</div>;
    }
}

module.exports = GaussCustomEditor;
