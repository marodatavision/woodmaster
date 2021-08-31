import LogMessager from "../config/LogMessager";

const axios = window.axios;

export default class BaseAPI {

    static index(baseUrl, setMethod) {
        axios.get(baseUrl)
        .then(response => {
            setMethod(response.data);
        })
        .catch(error => {
            LogMessager.responseErrorLog(error, 'BaseAPI - index');
        })
    }

    static store(baseUrl, setMethod, data) {
        axios.post(baseUrl, data)
        .then(response => {
            setMethod(response.data);
        })
        .catch(error => {
            LogMessager.responseErrorLog(error, 'BaseAPI - store');
        })
    }

    static show(baseUrl, setMethod, id) {
        axios.get(`${baseUrl}/${id}`)
        .then(response => {
            setMethod(response.data);
        })
        .catch(error => {
            LogMessager.responseErrorLog(error, 'BaseAPI - show');
        })
    }

    static update(baseUrl, setMethod, data) {
        axios.put(`${baseUrl}/${id}`, data)
        .then(response => {
            setMethod(response.data);
        })
        .catch(error => {
            LogMessager.responseErrorLog(error, 'BaseAPI - update');
        })
    }

    static destroy(baseUrl, setMethod) {
        axios.delete(`${baseUrl}/${id}`)
        .then(response => {
            setMethod(response.data);
        })
        .catch(error => {
            LogMessager.responseErrorLog(error, 'BaseAPI - delete');
        })
    }
}