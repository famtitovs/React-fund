import React, { useMemo, useState } from "react";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'nvel', body: 'Description' },
		{ id: 2, title: 'AAmv2', body: 'ewvev' },
		{ id: 3, title: 'Javascript 3', body: '1vvrv rven' }
	])

	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	const sortedPosts = useMemo(() => {
		console.log('Func sorted posts worked');
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
		}
		return posts;
	}, [selectedSort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
	}, [searchQuery, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}
	//получаем post из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const sortPosts = (sort) => {
		setSelectedSort(sort);

	}

	return (
		<div className="app">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<div>
				<MyInput
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					placeholder='Search..'
				/>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue="Sort"
					options={[
						{ value: 'title', name: 'By Name' },
						{ value: 'body', name: 'By Description' }
					]}
				/>
			</div>
			{/* условная отрисовка */}
			{sortedAndSearchedPosts.length !== 0
				?
				<PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS posts" />
				:
				<h2 style={{ textAlign: "center" }}>Damn, nothin' found!</h2>
			}

		</div >
	);
}

export default App;

