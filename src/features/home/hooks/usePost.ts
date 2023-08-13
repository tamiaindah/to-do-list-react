import notify from "@utils/notify";
import { useCallback, useEffect, useState } from "react";
import { IPost } from "src/interfaces/post";
import { getPost } from "../services/posts";

const usePost = (postId: number) => {
	const [post, setPost] = useState<IPost>();
	const fetchPost = useCallback(async () => {
		try {
			const response = await getPost(postId);
			setPost(response.data);
		} catch (err: any) {
			notify(err.message);
		}
	}, [postId]);

	useEffect(() => {
		fetchPost();
	}, [fetchPost]);

	return { post };
};

export default usePost;
