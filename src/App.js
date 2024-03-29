import React, {useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/ MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";

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

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(()=> {
        if (filter.sort)
        {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

    const createPost = (newPost) => {
       setPosts([...posts, newPost])
        setModal(false);
    }

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [sortedPosts, filter.query])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id!==post.id))
    }
  return (
    <div className="App">
        <MyButton style={{marginTop: '30px'}} onClick={()=> setModal(true)}>Create User</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList remove={removePost} posts={sortedAndSearchedPosts}></PostList>
    </div>
  );
}

export default App;
