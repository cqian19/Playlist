/**
 * Created by cqian19 on 5/21/2017.
 */
import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';

import APIHandler from '../api/APIHandler';
import Error from './Error';

class ImportBar extends React.Component {

    constructor() {
        super();
        this.state = {
            value: '',
            resetForm: null
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { importing, doImport } = this.props;
        const { value } = this.state;
        if (!importing) {
            doImport(value);
        }
    };

    handleChange = (event) => {
        this.state.value = event.target.value;
    };

    componentWillUpdate(nextProps) {
        const newValidationState = nextProps.validationState;
        if (newValidationState === 'success' || newValidationState === 'error') {
            this.state.validationState = newValidationState;
            this.textInput.value = "";
            if (this.state.resetForm) {
                clearTimeout(this.state.resetForm);
            }
            this.state.resetForm = setTimeout(() => {
                this.props.resetForm();
            }, 3000)
        }
    }

    componentDidUpdate() {
        this.textInput.focus();
    }

    render() {
        const { error, importing, validationState } = this.props;
        return (
            <div className="import-bar">
                <form onSubmit={this.handleSubmit} className="height-collapse-small import-form">
                    <button className="btn btn-inverse import-button col-xs-2" type="submit">
                        Import
                    </button>
                    <FormGroup className="col-xs-10" validationState={validationState}>
                        <FormControl
                             className="search-bar"
                             disabled={importing}
                             inputRef={(input) => { this.textInput = input; }}
                             type="text"
                             onChange={this.handleChange}
                        />
                        <Error error={error}/>
                    </FormGroup>
                </form>
            </div>
        )
    }
}

ImportBar.propTypes = {
    error:      PropTypes.string,
    doImport:   PropTypes.func.isRequired,
    importing:  PropTypes.bool.isRequired,
    resetForm:  PropTypes.func.isRequired,
    validationState: PropTypes.string
};

export default ImportBar;