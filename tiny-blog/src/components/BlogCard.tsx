import './BlogCard.css';
import Blog from '../types'; 
import { MouseEvent } from 'react';

type Props = {
    blogPosts: Blog[] 
}

function BlogCard(props: Props) {
    const detailsHandler = (e: MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        const blogDiv = e.currentTarget.lastChild! as HTMLElement;
        if (blogDiv.style.display === 'none') {
          return blogDiv.style.display = 'block';
        }
        return blogDiv.style.display = 'none';
      }

  return (
    <div className="BlogCard">
      <h3>The Tiny Blog</h3>
      {
        props.blogPosts.map(post => <li className="BlogCard__post" key={post.id} onClick={detailsHandler}>{post.title}<div className='BlogCard__card'><p>{post.body}</p></div></li>)
      }
  
    </div>
  );
}

export default BlogCard;