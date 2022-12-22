import React, {useRef, useState} from "react";
import PostItemostItem from "./components/PostItem";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/ MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
   const [posts, setPosts] = useState([
       {id: 1, title: 'Javascript 1', body:'Description'},
       {id: 2, title: 'Javascript 2', body:'Description'},
       {id: 3, title: 'Javascript 3 ', body:'Description'},
       ])
    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Python 1', body:'Description'},
        {id: 2, title: 'Python 2', body:'Description'},
        {id: 3, title: 'Python 3 ', body:'Description'},
    ])

    // const [title, setTitile] = useState('')
    // const [body, setBody] = useState('')

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
       setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id!==post.id))
    }

    const sortPosts = (sort) => {
       setSelectedSort(sort);
       setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
           <MySelect value={selectedSort} onChange={sortPosts} options={[{value: 'title', name: 'by Name'},{value: 'body', name: 'by Description'}]} defaultValue={'Sorting'}></MySelect>
        </div>
        {posts.length !== 0
            ? <PostList remove={removePost} posts ={posts} title={'JavaScript '}></PostList>
            : <h1 style={{textAlign: "center"}}>No posts</h1>
        }

    </div>
  );
}

export default App;
