import notify from "@utils/notify";
import { useEffect, useState } from "react";
import { IPost } from "src/interfaces/post";
import { getPosts } from "../services/posts";

const usePosts = () => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const fetchPosts = async () => {
		try {
			const response = await getPosts();
			setPosts(response.data);
		} catch (err: any) {
			notify(err.message);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return { posts };
};

export default usePosts;
