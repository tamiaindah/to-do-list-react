import { AxiosRequestConfig } from "axios";
import apiRequest from "src/api";

export const getPosts = async (config?: AxiosRequestConfig) => {
	return apiRequest(
		{
			...config,
			url: "/posts",
			method: "GET",
		},
		true,
	);
};

/**
 * @param {string | number} postId
 * @param {import("axios").AxiosRequestConfig} config
 */
export const getPost = async (postId: number, config?: AxiosRequestConfig) => {
	return apiRequest(
		{
			...config,
			url: `/posts/${postId}`,
			method: "GET",
		},
		true,
	);
};
