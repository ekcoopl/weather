import React from 'react';

const Form = () => {
    return (
        <form onSubmit={this.props.weatherMethod}>
             <input type="text" name='city' placeholder='Город' />
             <button>Получить погоду</button>
        </form>
    );
}

export default Form;
