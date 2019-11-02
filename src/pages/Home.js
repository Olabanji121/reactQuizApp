import React, { Component } from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header title= "TRIVIA QUIZ">
                    <Link to="/game" className= "text-uppercase btn btn-warning btn-lg mt-3" > Take a Quick Quiz</Link>  
                </Header>
            </div>
        )
    }
}
