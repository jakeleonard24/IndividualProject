import React, { Component } from 'react';

class Blogs extends Component {
    render() {
        let blogs = [
            {
                "id": 2,
                "username": null,
                "email": "jake24leonard@gmail.com",
                "image": null,
                "password": null,
                "auth_id": "59cb124eae25b32d2ff671ce",
                "blogid": 9,
                "userid": 2,
                "title": "TEST 5",
                "blog": "<p>blog blog blog blog</p>",
                "date": ""
            },
            {
                "id": 2,
                "username": null,
                "email": "jake24leonard@gmail.com",
                "image": null,
                "password": null,
                "auth_id": "59cb124eae25b32d2ff671ce",
                "blogid": 8,
                "userid": 2,
                "title": "Test 4",
                "blog": "<p>test blog 4 plz help</p>",
                "date": ""
            },
            {
                "id": 2,
                "username": null,
                "email": "jake24leonard@gmail.com",
                "image": null,
                "password": null,
                "auth_id": "59cb124eae25b32d2ff671ce",
                "blogid": 2,
                "userid": 2,
                "title": "TEST BLOG",
                "blog": "<p>TEST BLOG TEST BLOG TEST BLOG TEST BLOG TEST BLOG TEST BLOG TEST BLOG TEST BLOG TEST BLOG TEST BLOG TEST BLOG </p>",
                "date": ""
            },
            {
                "id": 2,
                "username": null,
                "email": "jake24leonard@gmail.com",
                "image": null,
                "password": null,
                "auth_id": "59cb124eae25b32d2ff671ce",
                "blogid": 1,
                "userid": 2,
                "title": "",
                "blog": "<p>HOW MUCH WOOD WOULD A WOOD CHUCK CHUCK IF A WOOD CHUCK COULD CHUCK WOOD</p>",
                "date": ""
            }
        ]

    //    let array = blogs.map((blog) => {
    //         return(
                  
    //                      <div dangerouslySetInnerHTML={{__html: 'blog.blog'}}> </div> 
                        
                     
    //         )
    //     })

        return (
            <div>
           {/* {array} */}
           <div dangerouslySetInnerHTML={{__html: '<h1>hello</h1>'}}></div>
            </div>
        );
    }
}

export default Blogs;