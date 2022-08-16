import React, { useState } from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: '', body: '' })

	const addNewPost = (e) => {
		//отменили отправку формы по умолчанию
		e.preventDefault();
		//создаем новый объект - пост, даем ему id
		const newPost = {
			...post, id: Date.now()
		}
		//callback func для передачи нового поста НАВЕРХ в App
		create(newPost)
		// изменили состояние массива постов, Затем меняем title & body - На пустое значение
		setPost({ title: '', body: '' })

	}



	return (
		<form>
			{/* Управляемый компонент  */}
			<MyInput
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
				type="text"
				placeholder="Название поста" />

			{/* НЕуправляемый компонент  */}
			<MyInput
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
				type="text"
				placeholder="Описание поста" />

			<MyButton onClick={addNewPost}>New Post</MyButton>
		</form>
	);
}

export default PostForm;