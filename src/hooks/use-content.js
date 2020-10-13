import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context';

export default function useContent(target) {
	const [content, setContent] = useState('');
	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		firebase
			.firestore()
			.collection(target)
			.get()
			.then((snapshot) => {
				const contents = snapshot.docs.map(contentObject => ({
					...contentObject.data(),
					docId: contentObject.id
				}));

				setContent(contents);
			})
			.catch(error => {
				console.log(error.message)
			});
	}, []);

	return { [target]: content };
}