import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
import StyleSheet from 'react-style';

class BasicCalendarInput extends React.Component {
    constructor(props) {
        super(props);
        let v = this.props.spec.value;
        if(this.props.spec.isDefault){
            v = this.createDefaultValue(this.props.spec.valueType, this.props.spec.dataType);
        }
        //to initialize value in Property state
        this.props.onDataEdit(v);
        this.state = {value: v};
    }
    componentDidMount() {
	let currentComp = this.refs.datetimepicker.getDOMNode();
	let self = this;
	setTimeout(function () {
		jQuery(currentComp).find('.glyphicon-calendar').click();
		jQuery(currentComp).find('.bootstrap-datetimepicker-widget').addClass('animated pulse');
		jQuery(currentComp).find('.date .form-control').keypress(function( event ) {
			if ( event.which == 13 ) {
				self.props.onEnterPress();
			}
		});		
	},100);
    }
    handleKeyDown(evt) {
        if(this.props.allowActionByKey){
            switch (evt.keyCode) {
                //case 9: // Tab
                case 13: // Enter
                    this.props.onEnterPress();
                    break;
            }
        }
    }
    getRandomNumber() {
        return Math.round(+new Date() / 1000);
    }
    createDefaultValue(valueType, dataType) {
        let dynamicDomain = 'http://example.com';
        if(this.props.config && this.props.config.dynamicResourceDomain){
            dynamicDomain = this.props.config.dynamicResourceDomain[0];
        }
        if(this.props.config && this.props.config.defaultValue){
            return this.props.config.defaultValue[0];
        }else{
            if(valueType === 'uri'){
                return dynamicDomain + '/' + this.getRandomNumber();
            }else{
                return 'exampleValue' + this.getRandomNumber();
            }
        }
    }
    handleChange(event) {
        this.props.onDataEdit(event.target.value.trim());
        this.setState({value: event.target.value});
    }
    handleSelect(value) {
        this.props.onDataEdit(value.trim());
        this.setState({value: value});
    }
    render () {
	return 	<div ref="datetimepicker"> 
			<DateTimeField dateTime={moment(this.state.value).utc().format("YYYY-MM-DD\\THH:mm:ss\\Z")} format="YYYY-MM-DD\\THH:mm:ss\\Z" inputFormat="YYYY-MM-DD\\THH:mm:ss\\Z" onChange={this.handleSelect.bind(this)} /> 
		</div>;
    }

}

export default BasicCalendarInput;
