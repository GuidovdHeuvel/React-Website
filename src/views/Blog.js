import React, { Component } from 'react'
import Post from '../components/Post';

export default class Blog extends Component {
    constructor() {
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/blog')
        .then(res => res.json())
        .then(data => this.setState({ posts:data }))
    }

    render() {
        let posts = this.state.posts;

        return (
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {posts.map(post => (
                            <Post post={post} key={post.id} />
                        ))}
                        <h3></h3>
                    </ul>
                </div>
            </div>
        )
    }
}
