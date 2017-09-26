axios.get('https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=type+1+diabetes&mkt=en-us').then(response => {
    console.log(response.data)
    this.setState({
        articles: response.data
    })
})