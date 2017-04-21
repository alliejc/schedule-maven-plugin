import React from 'react';
import { TextField } from 'material-ui';

//TODO: Specify Floating Label as title or description
class EditText extends React.Component {

    handleOnChange = (value) => {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    };

    render()
    {
        return (
            <div>
                <TextField
                    floatingLabelText="Title"
                    defaultValue="Loaded meta data"
                    onChange={ this.handleOnChange }
                />
            </div>
        );
    }
}

export default EditText;
