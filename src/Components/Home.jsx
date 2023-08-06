import React, { Component } from 'react';
import News from './News';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            totalResults: 0
        }
    }

    async getNews() {
        // let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.lang}&from=2023-06-05&to=2023-06-05&sortBy=popularity&apiKey=6349bf8e350c4686aeada0cfa352143a`);
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.lang}from=2023-06-11&sortBy=publishedAt&apiKey=6349bf8e350c4686aeada0cfa352143a`);
        
        let result = await response.json();
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults
        })
    };
    async getNews2() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.lang}from=2023-06-11&sortBy=publishedAt&apiKey=6349bf8e350c4686aeada0cfa352143a`);
        // let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.lang}&from=2023-05-05&sortBy=publishedAt&apiKey=8c63060e7b5141c09461f0fd803644ed`);
        
        let result = await response.json();
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults
        })
    };

    componentDidMount() {
        this.getNews();
    };


    componentDidUpdate(old) {
        if(this.props.search !== old.search) {
            this.getNews2();
        }
        else if (this.props.q !== old.q || this.props.lang !== old.lang) {
            this.getNews();
        }
    }

    render() {
        let articalLength;
        if(this.state.articles){
            articalLength = this.state.articles.length > 0 ? true : false;
        }
        if (articalLength) {
            return (
                <>
                    <div style={{ textAlign: "center", fontSize: "30px", fontWeight: "500" }}>{`${this.props.q} News`}</div>
                    <section>
                        <div className="container">
                            <div className='row g-4'>
    
                                {
                                    this.state.articles.map((item, index) => {
                                        return <News data={item} />
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </>
            )
        } else {
            return (
                <>
                    <h2 style={{textAlign:"center", padding:"20px"}}>No News Found</h2>
                </>
            )
        }

        
    }
}
