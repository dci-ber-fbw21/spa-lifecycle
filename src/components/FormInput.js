import React from 'react';

function FormInput(props) {
    function onChangeHandler(e) {
        console.log(e.target.value);

        props.onChangeHandler({
            name: e.target.name,
            val: e.target.value
        })
    }

    return (
        <div className="form-field">
            <label htmlFor={props.inputName}>
                {props.inputLabel}
            </label>

            <input
                type={props.inputType}
                name={props.inputName}
                id={props.inputName}
                value={props.inputValue}
                onChange={onChangeHandler} />
            {/* <p>{this.state.errorNameMessage}</p> */}
        </div>
    )
}

export default FormInput;