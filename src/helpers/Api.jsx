import axios from "axios";
import qs from "qs";
import { base_url } from "../globals";
import { myStore } from "../my-store/my-store";

var methods = ["get", "post", "put", "delete", "patch"];

var getApi = function () {
	const token = myStore.getState()?.storeReducer?.accessToken;
	return axios.create({
		baseURL: base_url,
		responseType: "json",
		headers: token ? { Authorization: `Bearer ${token}` } : {}
	});
}

var apiHandler = function (url) {
	var Api = getApi();
	return {
		get: (target, name) => {
			var apiURL = url || "";
			var apiCall = (params, config = null) => {
				if (name === "path") {
					return new Proxy({}, apiHandler(`${apiURL}/${String(params || "")}`));
				} else if (name === "getUrl") {
					return `${Api.defaults.baseURL}${apiURL}` + (typeof params === "object" ? `?${qs.stringify(params)}` : "");

				} else if (methods.indexOf(name) === -1) {
					return new Proxy({}, apiHandler(`${apiURL}/${name}/${String(params || "")}`));
				}
				return new Promise((resolve, reject) => {
					if (name === "get" && params) {
						apiURL += `?${qs.stringify(params)}`;
					}

					Api[name](apiURL, params, config)
						.then(response => {
							// Resolve with response.data to only return data 
							// returned by API
							resolve(response.data)
						})
						.catch(error => {
							// TODO: Logout user if server returns 401 (unauthorized)
							// Or do other generalized error handling
							reject(error)
						});
				});
			}
			apiCall.__proto__ = new Proxy({}, apiHandler(`${apiURL}/${name}`));

			return apiCall;
		}
	}
}

// Expose APIs
export default new Proxy({}, apiHandler());