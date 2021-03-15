import React from 'react';
import '../styles/book.css';

import { connect } from 'react-redux';
import { saveUserInfos } from '../redux/actions/index';

var myBook = [];

function Book() {
    return (
        <div className="globalContainer">
            <section className="header">
                <img src={"https://static.data.gouv.fr/avatars/84/a1ca8ceabe42eb86dd06b657131c40.png"}/>
                <div>
                    Creatiwity - Test
                </div>
            </section>
            <section className="book">
                
            </section>
            <section className="button">
                <div>
                    Add a new page
                </div>
            </section>
        </div>
    );
}

const storeToVariable = (store: any) => {
    myBook = store.user.bookData;
}
  
const variableToStore = {
    saveUserInfos
}
  
export default connect(storeToVariable, variableToStore)(Book);