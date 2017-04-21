import React from 'react';
import DatePicker from 'material-ui/DatePicker';

class DatePickerClass extends React.Component {

    handleChange = (event, date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        if (this.props.onChange) {
            this.props.onChange(day, month, year);
        }
    };

    render() {
        return (
            <DatePicker
                hintText="Pick a Date"
                onChange={this.handleChange}
            />
        );
    }
}

DatePickerClass.defaultProps = {
    date: new Date(),
};

DatePickerClass.PropTypes = {
    date: React.PropTypes.object,
};

export default DatePickerClass;