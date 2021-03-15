import React from 'react';
import '../styles/book.css';

import { connect } from 'react-redux';
import { saveUserInfos } from '../redux/actions/index';

var myBook = [];

function Book() {
    return (
        <div className="globalContainer">
            <section className="header">
                <img src={"https://static.data.gouv.fr/avatars/84/a1ca8ceabe42eb86dd06b657131c40.png"} alt="image"/>
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
                        <div className="bookPageDesc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id magna ac diam finibus commodo. Sed efficitur nulla dolor, nec eleifend turpis feugiat eget. In hac habitasse platea dictumst. Quisque congue pharetra justo, quis scelerisque ante convallis nec. Nulla finibus orci risus. Nullam sed tincidunt dui. Mauris dapibus turpis lobortis viverra laoreet. Integer tempor vestibulum ipsum, sodales mattis ipsum. Morbi sit amet quam ut ex pretium vulputate. Phasellus sit amet nisl accumsan leo.
                        </div>
                        <div className="bookPageImg">
                            <img src={"http://images3.memedroid.com/images/UPLOADED25/5a828ef3727f3.jpeg"} alt="image"/>
                        </div>
                        <div className="bookPageIndex">
                            1
                        </div>
                    </div>
                </div>
                <div className="bookPage">
                    <div className="bookPageRight">
                        <div className="bookPageTitle">
                            Titre de la page
                        </div>
                        <div className="bookPageIndex">
                            2
                        </div>
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

const storeToVariable = (store: any) => {
    myBook = store.user.bookData;
}
  
const variableToStore = {
    saveUserInfos
}
  
export default connect(storeToVariable, variableToStore)(Book);