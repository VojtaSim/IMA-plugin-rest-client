
import clone from 'clone';

/**
 * Typed representation of a REST API request.
 */
export default class Request {
	/**
	 * Initializes the request representation using the provided data.
	 *
	 * @param {{
	 *     resource: *,
	 *     parameters: ?Object<string, (number|string)>,
	 *     method: string,
	 *     url: string,
	 *     data: *,
	 *     headers: Object<string, string>,
	 *     options: {
	 *         timeout: number=,
	 *         ttl: number=,
	 *         repeatRequest: number=,
	 *         cache: boolean=,
	 *         withCredentials: boolean=
	 *     },
	 *     serverConfiguration: ?Object<string, *>
	 * }} requestData The data representing this request. See the fields of
	 *        this class for more information.
	 */
	constructor(requestData) {
		/**
		 * The identifier of the REST API resource to access using this
		 * request.
		 *
		 * @type {*}
		 */
		this.resource = requestData.resource;

		/**
		 * The request parameters that were used to generate the URL to which
		 * the request will be made.
		 *
		 * The parameters do not contain the resource entity id, even if one
		 * was provided.
		 *
		 * @type {?Object<string, (number|string)>}
		 */
		this.parameters = requestData.parameters &&
				Object.assign({}, requestData.parameters);

		/**
		 * The HTTP method to use to make the request. The method is specified
		 * in upper-case letters.
		 *
		 * @type {string}
		 */
		this.method = requestData.method;

		/**
		 * The URL to which the request should be made.
		 *
		 * @type {string}
		 */
		this.url = requestData.url;

		/**
		 * The data to send to the server as the request's body. The field is
		 * {@code null} if the request should not carry any data in its body.
		 *
		 * @type {*}
		 */
		this.data = clone(requestData.data);

		/**
		 * The headers to send with the HTTP request to the server. These are
		 * extracted from the request options into this separate field for
		 * conveniency.
		 *
		 * @type {Object<string, string>}
		 */
		this.headers = Object.assign({}, requestData.headers);

		/**
		 * HTTP request options, without the request headers.
		 *
		 * @type {{
		 *     timeout: number=,
		 *     ttl: number=,
		 *     repeatRequest: number=,
		 *     cache: boolean=,
		 *     withCredentials: boolean=
		 * }}
		 */
		this.options = Object.assign({}, requestData.options);

		/**
		 * The REST API client configuration provided by the server. The field
		 * is set to {@code null} if no server-provided configuration is used.
		 *
		 * @type {?Object<string, *>}
		 */
		this.serverConfiguration = clone(requestData.serverConfiguration);
	}
}
