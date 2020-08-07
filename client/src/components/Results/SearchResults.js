import React from 'react';
const SearchResults = () => {
    return (
        <section className="page-section">
    <div className="wrapper">
        <div className="rows">
            <div className="rows__40">

                <a className="ui centered card" href="/single-business" >

                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1558980394-0a06c4631733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="motor bike" />
                    </div>

                    <div className="content">
                        <span className="header">kristy</span>
                        <div className="meta">
                            <span className="date">
                                Location here
                            </span>
                        </div>
                        <div className="description">
                            Is a Biker Bar in Ballinasloe
                        </div>
                    </div>
                        <div className="extra content">
                            <span>
                                <i className="users icon"></i>
                                22 Followers
                            </span>
                        </div>
                    
                    </a>

                    <a className="ui centered card" href="/single-product">
                        <div className="content">
                          <div className="header">Cute Dog</div>
                          <div className="meta">
                            <span className="category">Animals</span>
                          </div>
                          <div className="description">
                            <p></p>
                          </div>
                        </div>
                        <div className="extra content">
                          <div className="right floated author">
                            <img className="ui avatar image" src="https://images.unsplash.com/photo-1558980394-0a06c4631733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" /> Matt
                          </div>
                        </div>
                      </a>
            </div>
        </div>
    </div>
</section>
    );
}
export default SearchResults;