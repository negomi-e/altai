import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../MainPage.css'
import Stories from './Stories'

class Banner extends Component {
    render() {
        return (
<>
            <div className='home__banner'>
                <p>Сделать свой
                    <br/>
                регион лучше</p>
            </div>
            <div className='involved'>
            Почему бы не вмешаться и не получить голос?
            </div>
            <Stories />
            </>
        )
    }
}

export default Banner;