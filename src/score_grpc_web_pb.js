/**
 * @fileoverview gRPC-Web generated client stub for score
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.score = require('./score_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.score.ScoreServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.score.ScoreServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.score.ListMatchesRequest,
 *   !proto.score.ListMatchesResponse>}
 */
const methodDescriptor_ScoreService_ListMatches = new grpc.web.MethodDescriptor(
  '/score.ScoreService/ListMatches',
  grpc.web.MethodType.UNARY,
  proto.score.ListMatchesRequest,
  proto.score.ListMatchesResponse,
  /**
   * @param {!proto.score.ListMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.score.ListMatchesResponse.deserializeBinary
);


/**
 * @param {!proto.score.ListMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.score.ListMatchesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.score.ListMatchesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.score.ScoreServiceClient.prototype.listMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/score.ScoreService/ListMatches',
      request,
      metadata || {},
      methodDescriptor_ScoreService_ListMatches,
      callback);
};


/**
 * @param {!proto.score.ListMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.score.ListMatchesResponse>}
 *     Promise that resolves to the response
 */
proto.score.ScoreServicePromiseClient.prototype.listMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/score.ScoreService/ListMatches',
      request,
      metadata || {},
      methodDescriptor_ScoreService_ListMatches);
};


module.exports = proto.score;

