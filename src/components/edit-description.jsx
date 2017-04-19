import React from 'react';
import { TextField } from 'material-ui';

const handleOnChange = (value) => {
    if (this.props.onChange) {
        this.props.onChange(value);
    }
};

const EditDescription = () => {
    return(
    <div>
        <TextField
            defaultValue="Loaded meta data"
            onChange={handleOnChange}
        />
    </div>
    );
}

export default EditDescription;
