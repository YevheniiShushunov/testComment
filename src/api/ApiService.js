import axios from "axios";

export class ApiService {
    static baseUrl = 'https://jordan.ashton.fashion/api/goods/30/comments';

    static getCommentList(pageNumber) {
        const url = pageNumber === undefined ? ApiService.baseUrl : `${ApiService.baseUrl}?page=${pageNumber}`
        return axios.get(url);
    }

    static postComment(name, text) {
        return axios.post(ApiService.baseUrl, { name, text });
    }
}
