import React from 'react';
import '../styles/book.css';

export function renderPage(index: number, myBook: object[]) {
    return (
        <div className="bookPage">
            <div className="bookPageLeft">
                <div className="bookPageTitle">
                    Titre de la page
                </div>
                <div className="bookPageDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id magna ac diam finibus commodo. Sed efficitur nulla dolor, nec eleifend turpis feugiat eget. In hac habitasse platea dictumst. Quisque congue pharetra justo, quis scelerisque ante convallis nec. Nulla finibus orci risus. Nullam sed tincidunt dui. Mauris dapibus turpis lobortis viverra laoreet. Integer tempor vestibulum ipsum, sodales mattis ipsum. Morbi sit amet quam ut ex pretium vulputate. Phasellus sit amet nisl accumsan leo.
                </div>
                <div className="bookPageImg">
                    <img src={"http://images3.memedroid.com/images/UPLOADED25/5a828ef3727f3.jpeg"} alt="choosen im"/>
                </div>
                <div className="bookPageIndex">
                    1
                </div>
            </div>
        </div>
    );
}