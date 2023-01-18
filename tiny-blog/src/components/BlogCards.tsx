import './BlogCards.css';
import Blog from '../types'; 
import { MouseEvent, useState } from 'react';

type Props = {
    blogPosts: Blog[] 
}

function BlogCards(props: Props) {

    const detailsHandler = (e: MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        const blogDiv = e.currentTarget.lastChild as HTMLElement;
        if (blogDiv.className === 'BlogCards__card') {
          return blogDiv.className = 'BlogCards__card --visible';
        }
        return blogDiv.className = 'BlogCards__card';
      }

  return (
    <div className='BlogCards'>
      {
        props.blogPosts.map(post => 
          <div key={post.id} className='BlogCards__div'>
                <img className='BlogCards__img' src={`https://source.unsplash.com/random/360x240/?sig=${post.id}/`} alt='Blogpost' /> 
                <li className="BlogCards__post" onClick={detailsHandler}>{post.title}
                  <div className='BlogCards__card'>
                    <p>{post.body}</p>
                  </div>
                </li>
            </div>
        )
      }
    </div>
  );
}

export default BlogCards;