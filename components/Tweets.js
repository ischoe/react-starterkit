import React, { Component } from 'react';
import { tweetsRequest } from './requests';

class Tweets extends Component {
    constructor() {
        super();
        this.state = {
            tweets : []
        }
    }
    updateTweetsState(tweets) {
        this.setState({
            tweets : tweets
        });
    }
    componentDidMount() {
        tweetsRequest((res) => this.updateTweetsState(res));
        //tweetsRequest().then(res => this.updateTweetsState(res.data));    
    }

    render() {
        return (
            <div>
                {this.state.tweets && this.state.tweets.length > 0 &&
                <div className="tweets-main">
                </div>
                }
            </div>    
        );
    }
}

export default Tweets;
