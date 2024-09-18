import React, { Component } from 'react'

export default class Newsitem extends Component {

    render() {
        let { title, description, url, imageurl,date,author } = this.props

        return (
            <>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0, 43)}</h5>
                        <p className="card-text">
                            {description ? (description.length > 83 ? description.slice(0, 83) + '...' : description) : 'No description available'}
                        </p>
                        <p class="card-text"><small class="text-body-secondary">BY {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_blank" className="btn btn-primary">Read more</a>
                    </div>


                </div>

            </>

        )
    }
}

