import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'nvel', body: 'Description' },
		{ id: 2, title: 'AAmv2', body: 'ewvev' },
		{ id: 3, title: 'Javascript 3', body: '1vvrv rven' }
	])

	const [filter, setFilter] = useState({ sort: '', query: '' })

	const sortedPosts = useMemo(() => {
		console.log('Func sorted posts worked');
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts;
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query) || post.body.toLowerCase().includes(filter.query))
	}, [filter.query, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}
	//получаем post из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}


	return (
		<div className="app">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<PostFilter
				filter={filter}
				setFilter={setFilter} />
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS posts" />
		</div >
	);
}

export default App;

