import React from 'react';
import '../styles/book.css';

import { connect } from 'react-redux';
import { saveUserInfos } from '../redux/actions/index';

var myBook = [];

export default function Page() {
    return (
        <div className="globalContainer">
            <section className="header">
                <img src={"https://static.data.gouv.fr/avatars/84/a1ca8ceabe42eb86dd06b657131c40.png"}/>
                <div>
                    Creatiwity - Test
                </div>
            </section>
            <section className="book">
                <div className="bookNextORPrevious">
                    <div>
                        &lt;
                    </div>
                </div>
                <div className="bookPage">
                    <div className="bookPageLeft">
                        <div className="bookPageTitle">
                            Titre de la page
                        </div>
                    </div>
                </div>
                <div className="bookPage">
                    <div className="bookPageRight">
                        Test
                    </div>
                </div>
                <div className="bookNextORPrevious">
                    <div>
                        &gt;
                    </div>
                </div>
            </section>
            <section className="button">
                <div>
                    Add a new page
                </div>
            </section>
        </div>
    );
}