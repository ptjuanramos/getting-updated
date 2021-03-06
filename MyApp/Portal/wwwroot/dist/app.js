(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dotnetify"), require("dotNetifyElements"), require("React"), require("styled"));
	else if(typeof define === 'function' && define.amd)
		define(["dotnetify", "dotNetifyElements", "React", "styled"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("dotnetify"), require("dotNetifyElements"), require("React"), require("styled")) : factory(root["dotnetify"], root["dotNetifyElements"], root["React"], root["styled"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_dotnetify__, __WEBPACK_EXTERNAL_MODULE_dotnetify_elements__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "eafc69c95f54fe6567a7"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "app";
/******/ 			{
/******/ 				// eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/auth.js":
/*!************************!*\
  !*** ./client/auth.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var url = '/api/login';

var signIn = exports.signIn = function signIn(username, password) {
  return fetch(url, {
    method: 'post',
    body: 'username=' + username + '&password=' + password,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
  }).then(function (response) {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  }).then(function (token) {
    return window.sessionStorage.setItem('access_token', token.access_token);
  });
};

var signOut = exports.signOut = function signOut() {
  window.sessionStorage.removeItem('access_token');
  window.location.href = '/';
};

var validateToken = exports.validateToken = function validateToken(token) {
  return fetch(url + '/validate', {
    method: 'post',
    body: 'token=' + token,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
  }).then(function (response) {
    return response.ok;
  });
};

var getAccessToken = exports.getAccessToken = function getAccessToken() {
  return window.sessionStorage.getItem('access_token');
};

var getAuthHeaders = exports.getAuthHeaders = function getAuthHeaders(_) {
  return {
    headers: { Authorization: 'Bearer ' + getAccessToken() },
    exceptionHandler: function exceptionHandler(_) {
      return signOut();
    }
  };
};

/***/ }),

/***/ "./client/components/App.js":
/*!**********************************!*\
  !*** ./client/components/App.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanyLogo = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "react");

var _auth = __webpack_require__(/*! ../auth */ "./client/auth.js");

var _Portal = __webpack_require__(/*! ./Portal */ "./client/components/Portal.js");

var _Portal2 = _interopRequireDefault(_Portal);

var _Landing = __webpack_require__(/*! ./Landing */ "./client/components/Landing.js");

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanyLogo = exports.CompanyLogo = styled.a.withConfig({
  displayName: 'App__CompanyLogo'
})(['display:flex;align-items:center;margin-left:1rem;background-image:url(https://dotnetify.net/content/images/dotnetify-logo.png);background-size:100% 100%;width:200px;height:39px;']);

var App = function App(_) {
  var _useState = (0, _react.useState)((0, _auth.getAccessToken)()),
      _useState2 = _slicedToArray(_useState, 1),
      accessToken = _useState2[0];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      validatingToken = _useState4[0],
      setValidatingToken = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loggedIn = _useState6[0],
      setLoggedIn = _useState6[1];

  (0, _react.useEffect)(function () {
    if (validatingToken === null) {
      setValidatingToken(!!accessToken);
      if (accessToken) {
        (0, _auth.validateToken)(accessToken).then(function (valid) {
          setLoggedIn(valid);
          setValidatingToken(false);
        });
      }
    }
  });

  if (validatingToken !== false) return React.createElement(_react.Fragment, null);
  return loggedIn ? React.createElement(_Portal2.default, null) : React.createElement(_Landing2.default, { onLoggedIn: function onLoggedIn() {
      return setLoggedIn(true);
    } });
};

exports.default = App;

/***/ }),

/***/ "./client/components/Landing.js":
/*!**************************************!*\
  !*** ./client/components/Landing.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotnetifyElements = __webpack_require__(/*! dotnetify-elements */ "dotnetify-elements");

var _App = __webpack_require__(/*! ./App */ "./client/components/App.js");

var _Login = __webpack_require__(/*! ./Login */ "./client/components/Login.js");

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imagePanelCss = '\n  position: relative;\n  margin-bottom: 6rem;\n  img { width: 100vw; height: 400px; }\n  a {\n    position: relative;\n    color: #fff;\n    font-size: 8pt;\n    float: right;\n    margin-top: -1rem;\n    padding-right: .5rem;\n  }\n';

var Landing = function Landing(_ref) {
  var onLoggedIn = _ref.onLoggedIn;
  return React.createElement(
    _dotnetifyElements.Main,
    null,
    React.createElement(
      _dotnetifyElements.Header,
      null,
      React.createElement(_App.CompanyLogo, { href: 'https://dotnetify.net' })
    ),
    React.createElement(
      _dotnetifyElements.Section,
      null,
      React.createElement(
        _dotnetifyElements.Panel,
        null,
        React.createElement(
          _dotnetifyElements.Panel,
          { css: imagePanelCss },
          React.createElement(
            'div',
            null,
            React.createElement('img', { src: '/landing.jpg' }),
            React.createElement(
              'a',
              { href: 'https://www.freepik.com/free-photos-vectors/background' },
              'Background photo created by kjpargeter - www.freepik.com '
            )
          ),
          React.createElement(
            _dotnetifyElements.Panel,
            { horizontal: true, css: 'position: absolute; top: 2rem' },
            React.createElement(
              _dotnetifyElements.Panel,
              { right: true, css: 'padding: 0 5%' },
              React.createElement(_Login2.default, { onAuthenticated: onLoggedIn })
            ),
            React.createElement(
              _dotnetifyElements.Panel,
              { css: 'padding-right: 10%' },
              React.createElement(
                'h3',
                null,
                'Welcome to your homepage!'
              ),
              React.createElement(
                _dotnetifyElements.Alert,
                { success: true },
                React.createElement(
                  'h5',
                  null,
                  'Getting Started'
                ),
                'To sign in, enter username ',
                React.createElement(
                  'b',
                  null,
                  'guest'
                ),
                ' with password ',
                React.createElement(
                  'b',
                  null,
                  'dotnetify'
                ),
                '.'
              ),
              React.createElement(
                _dotnetifyElements.Alert,
                null,
                React.createElement(
                  'h5',
                  null,
                  'Micro-Frontend Demo'
                ),
                'This is an SPA that\'s dynamically composed of smaller, independently deployable apps written in ',
                React.createElement(
                  'i',
                  null,
                  'React'
                ),
                ' and ',
                React.createElement(
                  'i',
                  null,
                  'Vue'
                ),
                '; each communicates with a cross-platform ',
                React.createElement(
                  'i',
                  null,
                  '.NET Core (C#)'
                ),
                ' back-end, using ',
                React.createElement(
                  'i',
                  null,
                  'SignalR'
                ),
                ' to facilitate real-time update.'
              )
            )
          )
        ),
        React.createElement(
          _dotnetifyElements.Panel,
          { horizontal: true },
          React.createElement(
            _dotnetifyElements.Panel,
            { right: true, flex: '20%' },
            React.createElement(
              'h4',
              null,
              'About'
            )
          ),
          React.createElement(
            _dotnetifyElements.Panel,
            { flex: '80%', css: 'padding-right: 10%; > * { padding: 2rem; border-left: 4px solid orange }' },
            React.createElement(
              'div',
              null,
              React.createElement(
                'p',
                null,
                React.createElement(
                  'i',
                  null,
                  'DotNetify'
                ),
                ' glues all these together with simple, lightweight, yet powerful abstractions that make developing complex web applications a breeze! For documentation, visit',
                ' ',
                React.createElement(
                  'b',
                  null,
                  React.createElement(
                    'a',
                    { href: 'https://dotnetify.net' },
                    'https://dotnetify.net'
                  )
                )
              ),
              React.createElement(
                'p',
                null,
                'Like this project? Leave a star on',
                ' ',
                React.createElement(
                  'b',
                  null,
                  React.createElement(
                    'a',
                    { href: 'https://github.com/dsuryd/dotNetify' },
                    'the project\'s Github page'
                  )
                ),
                '. Use the issues forum to ask questions, report bugs, or suggest new features.'
              )
            )
          )
        )
      )
    )
  );
};

exports.default = (0, _dotnetifyElements.withTheme)(Landing);

/***/ }),

/***/ "./client/components/Login.js":
/*!************************************!*\
  !*** ./client/components/Login.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "react");

var _auth = __webpack_require__(/*! ../auth */ "./client/auth.js");

var _dotnetifyElements = __webpack_require__(/*! dotnetify-elements */ "dotnetify-elements");

var outerPanelCss = '\n  width: 25rem;\n  padding: 3rem; \n  background-color: #f5f5f5;\n  border-radius: 5px;\n  box-shadow: 0 20px 40px -20px rgba(0,0,0,.5);\n';

var Login = function Login(_ref) {
  var onAuthenticated = _ref.onAuthenticated;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      loginError = _useState2[0],
      setLoginError = _useState2[1];

  var handleLogin = function handleLogin(_ref2) {
    var User = _ref2.User,
        Password = _ref2.Password;

    setLoginError(null);
    (0, _auth.signIn)(User, Password).then(function (_) {
      onAuthenticated();
    }).catch(function (error) {
      if (error.message == '401') setLoginError('Invalid username and/or password');else setLoginError('Unexpected error: ' + error.message);
    });
  };

  return React.createElement(
    _dotnetifyElements.VMContext,
    { vm: 'LoginVM', options: { appId: 'portal' } },
    React.createElement(
      _dotnetifyElements.Panel,
      { css: outerPanelCss },
      React.createElement(
        'h3',
        null,
        'Sign In To Get Started'
      ),
      React.createElement(
        _dotnetifyElements.Form,
        { onSubmit: handleLogin },
        React.createElement(
          _dotnetifyElements.Panel,
          null,
          React.createElement(_dotnetifyElements.TextField, { id: 'User', label: 'Username:' }),
          React.createElement(_dotnetifyElements.PasswordField, { id: 'Password', label: 'Password:' }),
          React.createElement(
            _dotnetifyElements.Alert,
            { danger: true },
            loginError
          ),
          React.createElement(_dotnetifyElements.Button, { stretch: true, submit: true, enable: true, label: 'Sign In', css: 'margin-top: 1rem' })
        )
      )
    )
  );
};

window.LoginVM = {
  onConnect: function onConnect() {
    return {
      User: 'guest',
      User__validation: [{
        Type: 'Required',
        Message: 'Username is required',
        Category: 'Error'
      }],
      Password: '',
      Password__attr: { Placeholder: 'Type dotnetify' },
      Password__validation: [{
        Type: 'Required',
        Message: 'Password is required',
        Category: 'Error'
      }]
    };
  }
};

exports.default = (0, _dotnetifyElements.withTheme)(Login);

/***/ }),

/***/ "./client/components/Portal.js":
/*!*************************************!*\
  !*** ./client/components/Portal.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.updatePortal = updatePortal;

var _dotnetifyElements = __webpack_require__(/*! dotnetify-elements */ "dotnetify-elements");

var _App = __webpack_require__(/*! ./App */ "./client/components/App.js");

var _auth = __webpack_require__(/*! ../auth */ "./client/auth.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Portal = function Portal(_) {
  return React.createElement(
    _dotnetifyElements.VMContext,
    { vm: 'PortalVM', options: { appId: 'portal-app' } },
    React.createElement(
      _dotnetifyElements.Main,
      null,
      React.createElement(
        _dotnetifyElements.Header,
        null,
        React.createElement(_dotnetifyElements.NavDrawerButton, { css: 'margin-left: .5rem' }),
        React.createElement(_App.CompanyLogo, { href: 'https://dotnetify.net' })
      ),
      React.createElement(
        _dotnetifyElements.Nav,
        null,
        React.createElement(
          _dotnetifyElements.Panel,
          null,
          React.createElement(_dotnetifyElements.NavMenu, { id: 'NavMenu' }),
          React.createElement(
            _dotnetifyElements.Panel,
            { flex: true, bottom: true, padding: '1rem' },
            React.createElement(_dotnetifyElements.Button, { stretch: true, label: 'Logout', onClick: function onClick(_) {
                return (0, _auth.signOut)();
              } })
          )
        )
      ),
      React.createElement(
        _dotnetifyElements.Section,
        null,
        React.createElement(_dotnetifyElements.NavMenuTarget, null)
      )
    )
  );
};

window.PortalVM = new (function () {
  function _class2() {
    _classCallCheck(this, _class2);

    this.apps = [];
    this.initialState = { NavMenu: [] };
  }

  _createClass(_class2, [{
    key: 'onConnect',
    value: function onConnect() {
      return this.initialState;
    }
  }, {
    key: 'addApp',
    value: function addApp(newApp) {
      if (this.apps.find(function (x) {
        return x.id === newApp.id;
      })) return;

      this.apps.push(newApp);

      // Set the root component to global window variable to be discovered by dotNetify routing.
      // Note that the component can be React component, Vue component, or web component.
      window[newApp.id] = newApp.rootComponent;

      var homeTemplate = this.apps.length > 0 ? { Id: 'Home', UrlPattern: '', ViewUrl: this.apps[0].id } : {};
      var templates = this.apps.map(function (app) {
        return { Id: app.id, UrlPattern: app.routePath, ViewUrl: app.id };
      });
      var NavMenu = this.apps.map(function (app) {
        return { Route: { TemplateId: app.id, Path: app.routePath }, Label: app.label };
      });
      var state = {
        RoutingState: {
          Templates: [homeTemplate].concat(_toConsumableArray(templates)),
          Root: '/'
        },
        NavMenu: NavMenu
      };

      if (this.$pushUpdate) this.$pushUpdate(state);else this.initialState = state;
    }
  }]);

  return _class2;
}())();

function updatePortal(app) {
  window.PortalVM.addApp(app);
}
exports.default = (0, _dotnetifyElements.withTheme)(Portal);

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Core = __webpack_require__(/*! dotnetify-elements/web-components/Core */ "./node_modules/dotnetify-elements/web-components/Core.js");

var _loader = __webpack_require__(/*! ./loader */ "./client/loader.js");

var _loader2 = _interopRequireDefault(_loader);

var _App = __webpack_require__(/*! ./components/App */ "./client/components/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useApiGateway = "development" !== 'development';

(0, _loader2.default)([{
  id: 'react-dashboard-app',
  label: 'React Dashboard',
  routePath: 'dashboard',
  baseUrl: useApiGateway ? 'http://localhost:8080/app1' : 'http://localhost:5060',
  moduleUrl: '/dist/app.js'
}, {
  id: 'react-form-app',
  label: 'React Form',
  routePath: 'form',
  baseUrl: useApiGateway ? 'http://localhost:8080/app2' : 'http://localhost:5070',
  moduleUrl: '/dist/app.js'
}, {
  id: 'react-todo-app',
  label: 'React Todo',
  routePath: 'react-todo',
  baseUrl: useApiGateway ? 'http://localhost:8080/app3' : 'http://localhost:5010',
  moduleUrl: '/dist/app.js'
}, {
  id: 'vue-todo-app',
  label: 'Vue Todo',
  routePath: 'vue-todo',
  baseUrl: useApiGateway ? 'http://localhost:8080/app4' : 'http://localhost:5020',
  moduleUrl: '/dist/app.js'
}],
// External dependencies from script tags.
['dotnetify', 'dotNetifyElements', 'styled']);

(0, _Core.createWebComponent)(_App2.default, 'my-portal');

/***/ }),

/***/ "./client/loader.js":
/*!**************************!*\
  !*** ./client/loader.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dotnetify = __webpack_require__(/*! dotnetify */ "dotnetify");

var _dotnetify2 = _interopRequireDefault(_dotnetify);

var _auth = __webpack_require__(/*! ./auth */ "./client/auth.js");

var _Portal = __webpack_require__(/*! ./components/Portal */ "./client/components/Portal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//dotnetify.debug = true;

exports.default = function (apps, externalDeps) {
  // Intercept initial view model connection to override which hub server it should connect with.
  // ***IMPORTANT***: Each app module would need to set the 'appId' option on its VM connect.
  //                  For example: dotnetify.react.connect("MyVM", { appId: 'my-app' })
  _dotnetify2.default.connectHandler = function (vmConnectArgs) {
    var appId = vmConnectArgs.options && vmConnectArgs.options.appId;
    if (!appId) {
      console.error('\'' + vmConnectArgs.vmId + '\' needs \'appId\' option to participate in the Portal.');
      return;
    }

    var app = apps.find(function (x) {
      return x.id === appId;
    });
    if (app) {
      app.hub = app.hub || _dotnetify2.default.createHub(app.baseUrl);
      return _extends({}, vmConnectArgs, {
        hub: app.hub,
        options: _extends({}, vmConnectArgs.options, { headers: { Authorization: 'Bearer ' + (0, _auth.getAccessToken)() } })
      });
    }
  };

  // Register the external dependencies from the script tags to SystemJS.
  externalDeps.forEach(function (x) {
    return SystemJS.set(x, SystemJS.newModule(_extends({}, window[x])));
  });

  // Use SystemJS to import the app modules.
  function importApp(app) {
    var appUrl = app.baseUrl + app.moduleUrl;
    return SystemJS.import(appUrl).then(function (module) {
      if (module.default) (0, _Portal.updatePortal)(_extends({}, app, { rootComponent: module.default }));
    }).catch(function (err) {
      SystemJS.delete(appUrl);
      console.error(err + '. Retrying in 5 seconds...');
      setTimeout(function () {
        return importApp(app);
      }, 5000);
    });
  }

  apps.map(function (app) {
    return importApp(app);
  });
};

/***/ }),

/***/ "./node_modules/ansi-html/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ansi-html/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),

/***/ "./node_modules/dotnetify-elements/web-components/Core.js":
/*!****************************************************************!*\
  !*** ./node_modules/dotnetify-elements/web-components/Core.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function webpackUniversalModuleDefinition(t,e){ true?module.exports=e(__webpack_require__(/*! react */ "react"),__webpack_require__(/*! styled-components */ "styled-components"),__webpack_require__(/*! dotnetify */ "dotnetify")):undefined}(window,function(t,e,r){return function(t){var e={};function __webpack_require__(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.d=function(t,e,r){__webpack_require__.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},__webpack_require__.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},__webpack_require__.t=function(t,e){if(1&e&&(t=__webpack_require__(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)__webpack_require__.d(r,n,function(e){return t[e]}.bind(null,n));return r},__webpack_require__.n=function(t){var e=t&&t.__esModule?function getDefault(){return t.default}:function getModuleExports(){return t};return __webpack_require__.d(e,"a",e),e},__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=194)}([function(t,e,r){var n=r(2),o=r(5);t.exports=function _curry2(t){return function f2(e,r){switch(arguments.length){case 0:return f2;case 1:return o(e)?f2:n(function(r){return t(e,r)});default:return o(e)&&o(r)?f2:o(e)?n(function(e){return t(e,r)}):o(r)?n(function(r){return t(e,r)}):t(e,r)}}}},function(e,r){e.exports=t},function(t,e,r){var n=r(5);t.exports=function _curry1(t){return function f1(e){return 0===arguments.length||n(e)?f1:t.apply(this,arguments)}}},function(t,e,r){t.exports=r(71)()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.flexAuto=e.createEventEmitter=e.addChildNode=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.deepEqual=function deepEqual(t,e){return JSON.stringify(t)===JSON.stringify(e)},e.filterChildren=function filterChildren(t,e){var r=[],n=o.default.Children.map(t,function(t){return t&&t.type&&e(t)?(r.push(t),null):t});return[r,n]},e.getDefaultTheme=function getDefaultTheme(){var t=document.querySelector("d-main");if(t){var e=t.getAttribute("theme");if("dark"==e)return s.default;if("light"==e)return i.default;if(/^{.*}/.exec(e))return JSON.parse(e)}return i.default},e.ifBoolElse=function ifBoolElse(t,e){return"boolean"==typeof t?t:!!e},e.isIE11=isIE11,e.mapChildren=function mapChildren(t,e,r){var n=this;return o.default.Children.map(t,function(t){if(t)return t.type&&e(t)?r(t):t.props&&t.props.children?o.default.cloneElement(t,t.props,n.mapChildren(t.props.children,e,r)):t})},e.mergeProps=function mergeProps(t){if(null==t.type)return console.error("Cannot resolve the type of element with props '"+JSON.stringify(t.props)+"'"),{};for(var e=Object.keys(t.type.propTypes||{}),r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var i=n.reduce(function(t,e){return Object.assign(t,e)},{}),s=Object.keys(i).filter(function(t){return"style"===t||"css"===t||e.includes(t)}).reduce(function(t,e){return Object.assign(t,function _defineProperty(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}({},e,i[e]))},{});return Object.assign({},s,t.props)},e.nestedGet=function nestedGet(t,e){return e.split(".").reduce(function(t,e){return void 0===t||null===t?t:t[e]},t)},e.parseFunctionString=function parseFunctionString(t){return t?function(e){var r=function _eval(t){return Function('"use strict";return ('+t+")")()}(""+t);return"function"==typeof r?r(e):r}:null},e.resolveComponents=function resolveComponents(t,e){return Object.keys(t.componentTypes).map(function(r){return e[toCamelCase(r)]||t.componentTypes[r]})},e.toCamelCase=toCamelCase,e.toggleNavDrawer=function toggleNavDrawer(t){var e=document.getElementsByTagName("nav")[0]||document.getElementsByTagName("d-nav")[0];e&&(!1===t?e.classList.remove("open"):e.classList.toggle("open"))},e.toPixel=function toPixel(t){if(!t)return null;if("string"==typeof t&&t.endsWith("px"))return parseInt(t);var e=window.getComputedStyle(document.body,null)["font-size"];return e.endsWith("px")?parseInt(t)*parseInt(e):parseInt(t)};var o=_interopRequireDefault(r(1)),i=_interopRequireDefault(r(21)),s=_interopRequireDefault(r(72));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}e.addChildNode=function addChildNode(t,e,r,n){var o=document.createElement(e);return r&&r.split(" ").forEach(function(t){return o.classList.add(t)}),n&&t.childNodes.length>0?t.insertBefore(o,t.childNodes[0]):t.appendChild(o)},e.createEventEmitter=function createEventEmitter(t){var e=[];return{emit:function emit(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];e.forEach(function(t){return t.apply(void 0,function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(r))})},subscribe:function subscribe(t){return!e.includes(t)&&e.push(t),function(){return e=e.filter(function(e){return e!==t})}}}};e.flexAuto=isIE11()?"1 1 auto":"1";function isIE11(){return window.navigator.userAgent.indexOf("Trident/")>0}function toCamelCase(t){if("string"==typeof t)return t.substr(0,1).toLowerCase()+t.substr(1);if("object"===(void 0===t?"undefined":n(t))){var e={},r=!0,o=!1,i=void 0;try{for(var s,a=Object.keys(t)[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){var c=s.value;e[toCamelCase(c)]=t[c]}}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return e}return t}},function(t,e){t.exports=function _isPlaceholder(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}},function(t,r){t.exports=e},function(t,e){t.exports=function _has(t,e){return Object.prototype.hasOwnProperty.call(e,t)}},function(t,e){t.exports=function _arity(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,r){return e.apply(this,arguments)};case 3:return function(t,r,n){return e.apply(this,arguments)};case 4:return function(t,r,n,o){return e.apply(this,arguments)};case 5:return function(t,r,n,o,i){return e.apply(this,arguments)};case 6:return function(t,r,n,o,i,s){return e.apply(this,arguments)};case 7:return function(t,r,n,o,i,s,a){return e.apply(this,arguments)};case 8:return function(t,r,n,o,i,s,a,c){return e.apply(this,arguments)};case 9:return function(t,r,n,o,i,s,a,c,u){return e.apply(this,arguments)};case 10:return function(t,r,n,o,i,s,a,c,u,l){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}},function(t,e,r){var n=r(58),o=r(56),i=r(55);function _iterableReduce(t,e,r){for(var n=r.next();!n.done;){if((e=t["@@transducer/step"](e,n.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n=r.next()}return t["@@transducer/result"](e)}function _methodReduce(t,e,r,n){return t["@@transducer/result"](r[n](i(t["@@transducer/step"],t),e))}var s="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";t.exports=function _reduce(t,e,r){if("function"==typeof t&&(t=o(t)),n(r))return function _arrayReduce(t,e,r){for(var n=0,o=r.length;n<o;){if((e=t["@@transducer/step"](e,r[n]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n+=1}return t["@@transducer/result"](e)}(t,e,r);if("function"==typeof r["fantasy-land/reduce"])return _methodReduce(t,e,r,"fantasy-land/reduce");if(null!=r[s])return _iterableReduce(t,e,r[s]());if("function"==typeof r.next)return _iterableReduce(t,e,r);if("function"==typeof r.reduce)return _methodReduce(t,e,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}},function(t,e){t.exports={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},function(t,e,r){var n=r(20),o=r(66);t.exports=function _dispatchable(t,e,r){return function(){if(0===arguments.length)return r();var i=Array.prototype.slice.call(arguments,0),s=i.pop();if(!n(s)){for(var a=0;a<t.length;){if("function"==typeof s[t[a]])return s[t[a]].apply(s,i);a+=1}if(o(s))return e.apply(null,i)(s)}return r.apply(this,arguments)}}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";t.exports={alwaysValid:function alwaysValid(){return!0}}},function(t,e,r){"use strict";var n=r(33),o=r(32),i=r(31),s=r(1),a=r(29);t.exports={createElement:function createElement(t,e,r,c){var u={key:e};t.attribs&&(u=i(function(t,e){var r=e[0],o=e[1];return"style"===(r=a[r.replace(/[-:]/,"")]||r)?o=function createStyleJsonFromString(t){for(var e,r,o,i=(t=t||"").split(/;(?!base64)/),s={},a=0;a<i.length;++a)(e=i[a].split(":")).length>2&&(e[1]=e.slice(1).join(":")),r=e[0],"string"==typeof(o=e[1])&&(o=o.trim()),null!=r&&null!=o&&r.length>0&&o.length>0&&(s[n(r)]=o);return s}(o):"class"===r?r="className":"for"===r&&(r="htmlFor"),"string"==typeof o&&(o=o),t[r]=o||r,t},u,o(t.attribs))),c=c||[];var l=null!=r?[r].concat(c):c;return s.createElement.apply(null,[t.name,u].concat(l))}}},function(t,e,r){"use strict";var n=r(14),o=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","menuitem","textarea"];t.exports=function ProcessNodeDefinitions(){return{processDefaultNode:function processDefaultNode(t,e,r){return"text"===t.type?t.data:"comment"!==t.type&&(o.indexOf(t.name)>-1?n.createElement(t,r):n.createElement(t,r,t.data,e))}}}},function(t,e,r){"use strict";var n=r(34),o=r(15);t.exports=function ProcessingInstructions(){var t=new o;return{defaultProcessingInstructions:[{shouldProcessNode:n.shouldProcessEveryNode,processNode:t.processDefaultNode}]}}},function(t,e){var r=t.exports={get firstChild(){var t=this.children;return t&&t[0]||null},get lastChild(){var t=this.children;return t&&t[t.length-1]||null},get nodeType(){return o[this.type]||o.element}},n={tagName:"name",childNodes:"children",parentNode:"parent",previousSibling:"prev",nextSibling:"next",nodeValue:"data"},o={element:1,text:3,cdata:4,comment:8};Object.keys(n).forEach(function(t){var e=n[t];Object.defineProperty(r,t,{get:function(){return this[e]||null},set:function(t){return this[e]=t,t}})})},function(t,e,r){var n=r(8),o=r(2),i=r(0),s=r(50),a=i(function curryN(t,e){return 1===t?o(e):n(t,s(t,[],e))});t.exports=a},function(t,e,r){var n=r(2),o=r(7),i=r(53),s=!{toString:null}.propertyIsEnumerable("toString"),a=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],c=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),u=function contains(t,e){for(var r=0;r<t.length;){if(t[r]===e)return!0;r+=1}return!1},l="function"!=typeof Object.keys||c?n(function keys(t){if(Object(t)!==t)return[];var e,r,n=[],l=c&&i(t);for(e in t)!o(e,t)||l&&"length"===e||(n[n.length]=e);if(s)for(r=a.length-1;r>=0;)o(e=a[r],t)&&!u(n,e)&&(n[n.length]=e),r-=1;return n}):n(function keys(t){return Object(t)!==t?[]:Object.keys(t)});t.exports=l},function(t,e){t.exports=Array.isArray||function _isArray(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["rgba(255, 99, 132, 0.8)","rgba(54, 162, 235, 0.8)","rgba(255, 206, 86, 0.8)","rgba(75, 192, 192, 0.8)","rgba(153, 102, 255, 0.8)","rgba(255, 159, 64, 0.8)"],o=(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t})({name:"light"},{Alert:"",BarChart:{AreaColor:[].concat(n,n)},DataGrid:{Container:"",Header:"",HeaderCell:"",Row:"",Cell:""},Label:{Container:"",IconContainer:"",IconComponent:""},LineChart:{AreaColor:"rgba(217, 237, 245, 0.2)",LineColor:"#9acfea",LineWidth:2},Markdown:"",MarkdownTOC:{Selected:"\n         font-weight: 600;\n         border-bottom: 1px dashed #ddd;\n      ",Container:"\n         .toc-h1, \n         .toc-h2 {\n            font-size: 1.1rem;\n         }\n         .toc-h3, \n         .toc-h4 {\n            font-size: .9rem;\n         } \n      "},PieChart:{AreaColor:[].concat(n,n)}},{Button:"",Checkbox:{style:"custom",GroupContainer:"",Container:{Default:"",Checked:""},Label:"",Input:""},Input:"",InputValidationError:"\n        border-color: red;\n    ",Radio:{style:"custom",GroupContainer:"",Container:{Default:"",Checked:""},Label:"",Input:""},RadioToggle:{GroupContainer:"",Label:{Default:"",Checked:""},Input:""},TextArea:""},{Main:"\n      a {\n         color: #337ab7;\n         &:hover { \n            color: #0056b3;\n            text-decoration: none;\n         } \n         &:focus { \n            color: #337ab7; \n         }\n      }     \n   ",Header:"\n      background: #f8f8f8;\n      border-bottom: 1px solid #e7e7e7;\n      box-shadow: 0 0 5px 0 rgba(0,0,0,.2);\n\n   ",Footer:"\n      background: #f8f8f8;\n      border-top: 1px solid #e7e7e7;  \n   ",Nav:"\n        background: #f4f4f4;\n        border-right: 1px solid #e7e7e7;\n    ",Section:"\n        background: #f4f4f4;\n    ",Panel:{Container:"",ChildContainer:"",Gap:{small:".5rem",large:"1rem"},Margin:{small:"1em",large:"1.5rem"}}},{NavDrawerButton:"\n      color: #999;\n   ",NavMenu:{SelectedRoute:"\n         > a > div > div {\n            padding-left: .5rem;\n            border-left: 2px solid tomato;\n            font-weight: 600;\n         }\n      ",RouteContainer:"\n         border-bottom: 1px solid #e7e7e7;\n         color: #868e96; \n         background: #f4f4f4;\n         &:hover { background: #f0f0f0; }\n      ",GroupContainer:"\n         background: #f8f8f8;\n         border-bottom: 1px solid #e7e7e7;\n         color: #337ab7;\n         &:hover { \n            color: #0056b3; \n            background: #f0f0f0;\n         }\n      "}},{Card:{Container:"",ImageContainer:"",HeaderContainer:"",BodyContainer:"",FooterContainer:""},Cell:{Container:"",HeaderContainer:"",BodyContainer:""},Collapsible:{Container:"",HeaderContainer:""},Field:{Container:"",LabelContainer:"\n         font-weight: 500;\n      ",InputContainer:"\n         input, select, textarea {\n            font-weight: 500;\n            ::-webkit-input-placeholder {\n               font-weight: 400;\n            }\n         }\n      ",ValidationMessageContainer:"\n         color: red;\n      ",PlainTextContainer:"",PlainTextComponent:"font-weight: 500;"},Menu:{Container:"",GroupContainer:"\n         background: #f8f8f8;\n         border-color: #ccc;\n      ",ItemContainer:"\n         &:hover > button {\n            background-color: #f0f0f0;\n         }      \n         &.separator {\n            border-bottom-color: #ccc;\n         }        \n         &.submenu::after {\n            border-left-color: #337ab7;\n         }          \n      "},Modal:{Container:"",HeaderContainer:"",BodyContainer:"",FooterContainer:""},Tab:{Container:"",BodyContainer:"",TabItemContainer:"",TabItem:"\n         color: #337ab7;\n         &:hover { \n            color: #0056b3;\n         }\n      "}});e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}();function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o=function(){function VMProperty(t,e){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,VMProperty),this.vmContext=t,this.propId=e}return n(VMProperty,[{key:"dispatch",value:function dispatch(t,e){this.vmContext.dispatchState(_defineProperty({},this.propId,t),e)}},{key:"dispatchProp",value:function dispatchProp(t,e){void 0!==this.vmContext.getState(t)&&this.vmContext.setState(_defineProperty({},t,e)),this.vmContext.dispatchState(_defineProperty({},t,e))}},{key:"vm",get:function get(){return this.vmContext.vm}},{key:"vmState",get:function get(){return this.vmContext.getState()}},{key:"fullId",get:function get(){return this.vmContext.vmId?this.vmContext.vmId+"."+this.propId:this.propId}},{key:"attrs",get:function get(){return this.vmContext.getPropAttributes(this.propId)}},{key:"value",get:function get(){return this.vmContext.getState(this.propId)},set:function set(t){this.vmContext.setState(_defineProperty({},this.propId,t))}}]),VMProperty}();e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VMContext=e.ContextTypes=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}(),i=_interopRequireDefault(r(1)),s=_interopRequireDefault(r(3)),a=_interopRequireDefault(r(74));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var c=e.ContextTypes={vmContext:s.default.object,theme:s.default.object},u=e.VMContext=function(t){function VMContext(t,e){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,VMContext);var r=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(VMContext.__proto__||Object.getPrototypeOf(VMContext)).call(this,t,e));return r.store=new a.default(r),window.__dotnetify_ssr__&&r.connect(),r}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(VMContext,i.default.Component),o(VMContext,[{key:"vmContext",get:function get(){return this.context&&this.context.vmContext}}]),o(VMContext,[{key:"componentDidMount",value:function componentDidMount(){window.__dotnetify_ssr__||this.connect()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.store.destroy()}},{key:"connect",value:function connect(){var t=this;this.vm=this.store.connect(this.props.vm,this.props.options,function(e){return t.onStateChange(e)})}},{key:"getChildContext",value:function getChildContext(){return n({},this.context,{vmContext:this.store.context})}},{key:"render",value:function render(){var t=this.props,e=t.children,r=t.placeholder;return this.state?e:r||null}},{key:"onStateChange",value:function onStateChange(t){this.connected||(this.connected=!0,"function"==typeof this.props.onConnected&&this.props.onConnected(this.vm,t)),"function"==typeof this.props.onStateChange&&this.props.onStateChange(t)}}]),VMContext}();u.contextTypes=c,u.childContextTypes=c,u.propTypes={vm:s.default.string,options:s.default.object,onConnected:s.default.func,onStateChange:s.default.func}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}(),o=_interopRequireDefault(r(1)),i=_interopRequireDefault(r(3)),s=_interopRequireDefault(r(6)),a=r(23),c=_interopRequireDefault(r(22)),u=function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(4));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var l=s.default.span.withConfig({displayName:"Element__Container"})(["",";"],function(t){return t.css}),p=function(t){function Element(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Element),function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Element.__proto__||Object.getPrototypeOf(Element)).apply(this,arguments))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Element,o.default.Component),n(Element,[{key:"componentDidMount",value:function componentDidMount(){this.props.onChange&&this.isVMProperty&&this.props.onChange(this.vmProperty.value)}},{key:"componentDidUpdate",value:function componentDidUpdate(t){t.id&&(this._vmProperty=null)}},{key:"dispatch",value:function dispatch(t){return this.vmProperty.dispatch(t)}},{key:"dispatchProp",value:function dispatchProp(t,e){return this.vmProperty.dispatchProp(t,e)}},{key:"getTemplateContent",value:function getTemplateContent(t){var e=this,r="TEMPLATE"===t.nodeName?t:document.getElementById(t)||document.querySelector(t);if(r){r=r.cloneNode(!0);var n=this.attrs;r.content.querySelectorAll("[slot]").forEach(function(t){var r=t.getAttribute("slot");"value"===r?t.innerText=e.value:n.hasOwnProperty(r)&&(t.innerText=e.attrs[r])});var o=r.innerHTML.trim();return o.length>0?o:null}}},{key:"resolveComponents",value:function resolveComponents(t){return u.resolveComponents(t,this.props)}},{key:"render",value:function render(){var t=this.attrs,e=t.hidden,r=t.css,n=this.vmProperty.value;if(null==n)return null;if(n=r?o.default.createElement(l,{css:r},n):n,this.props.template){var i=this.getTemplateContent(this.props.template);i&&(n=o.default.createElement(l,{css:r,dangerouslySetInnerHTML:{__html:i}}))}return e?null:n}},{key:"vm",get:function get(){return this.vmProperty.vm}},{key:"vmContext",get:function get(){return this.context.vmContext||this.props.vmContext}},{key:"value",get:function get(){return this.vmProperty.value},set:function set(t){this.vmProperty.value=t}},{key:"attrs",get:function get(){return Object.assign({fullId:this.vmProperty.fullId},this.vmProperty.attrs,this.props)}},{key:"isVMProperty",get:function get(){var t=this.vmContext&&this.vmContext.getState();return!!t&&t.hasOwnProperty(this.props.id)}},{key:"vmProperty",get:function get(){var t=this;if(this._vmProperty)return this._vmProperty;if(this.isVMProperty)return this._vmProperty=new c.default(this.vmContext,this.props.id),this._vmProperty;var e=this.props.id||Math.random().toString(36).substring(2);return this._vmProperty=new c.default({getState:function getState(r){return r===e&&t.props.hasOwnProperty("value")?t.props.value:t.state&&t.state[r]},setState:function setState(e){return t.setState(e)},getPropAttributes:function getPropAttributes(e){return t.props.attrs||{}},dispatchState:function dispatchState(t){}},e),this._vmProperty}}]),Element}();p.contextTypes=a.ContextTypes,p.propTypes={id:i.default.string.isRequired,hidden:i.default.bool,onChange:i.default.func},e.default=p},function(t,e,r){"use strict";
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/!function(){if(void 0!==window.Reflect&&void 0!==window.customElements&&!window.customElements.polyfillWrapFlushCallback){var t=HTMLElement;window.HTMLElement=function HTMLElement(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}}()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}(),i=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(r(69));function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var s=function(){function WebComponentHelper(t){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,WebComponentHelper),this.host=t,this.host.__eventHandlers=this.host.__eventHandlers||{}}return o(WebComponentHelper,[{key:"convertAttributeToProp",value:function convertAttributeToProp(t,e,r){var n=Object.keys(t).find(function(t){return t.toLowerCase()==e}),o=r;return"css"===e?o=r:"true"===r||"false"===r?o="true"==r:isNaN(r)||""===r?/^{.*}/.exec(r)?o=JSON.parse(r):/([A-z0-9$_]*)\(.*\)/.exec(r)&&(o=this.parseFunctionString(r)):o=+r,{name:n||e,value:o}}},{key:"getProps",value:function getProps(t,e){var r=this;return e=e||{},[].concat(_toConsumableArray(t)).filter(function(t){return"style"!==t.name}).map(function(t){return r.convertAttributeToProp(e,t.name,t.value)}).reduce(function(t,e){return n({},t,_defineProperty({},e.name,e.value))},{})}},{key:"getEvents",value:function getEvents(t,e){var r=this;return e=e||{},Object.keys(e).filter(function(t){return/on([A-Z].*)/.exec(t)}).reduce(function(e,o){return n({},e,_defineProperty({},o,function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];var s=o.toLowerCase(),a=r.host.__eventHandlers[s];if(!a){var c=[].concat(_toConsumableArray(t)).find(function(t){return t.name==s});c&&(a=c.value,/([A-z0-9$_]*)\(.*\)/.exec(c.value)&&(a=r.parseFunctionString(c.value)),r.host.__eventHandlers[s]=a)}a&&"function"!=typeof a&&(a=r._eval(a));var u="function"==typeof a?a(n):a;return r.host.dispatchEvent(new CustomEvent(o,{detail:n})),r.host.vmContextElem&&"function"==typeof r.host.vmContextElem.dispatchVMEvent&&r.host.vmContextElem.dispatchVMEvent("onElementEvent",{detail:{targetId:r.host.getAttribute("id"),eventName:o,eventArgs:n}}),u||null}))},{})}},{key:"getContainerParent",value:function getContainerParent(){for(var t=this.host.parentElement;t;){if(t._isContainer)return t;t=t.parentElement}return null}},{key:"parseFunctionString",value:function parseFunctionString(t){return WebComponentHelper._parseFunctionString(t)}},{key:"parseHtmlToReact",value:function parseHtmlToReact(t){return"string"==typeof t&&(new i.default.Parser).parse(t.trim())}}],[{key:"_parseFunctionString",value:function _parseFunctionString(t){var e=this;return t?function(r){var n=e._eval(""+t);return"function"==typeof n?n(r):n}:null}},{key:"_eval",value:function _eval(t){return Function('"use strict";return ('+t+")")()}}]),WebComponentHelper}();e.default=s,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null})},function(t,e,r){"use strict";var n=function validateFormat(t){};t.exports=function invariant(t,e,r,o,i,s,a,c){if(n(e),!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,o,i,s,a,c],p=0;(u=new Error(e.replace(/%s/g,function(){return l[p++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},function(t,e,r){"use strict";function makeEmptyFunction(t){return function(){return t}}var n=function emptyFunction(){};n.thatReturns=makeEmptyFunction,n.thatReturnsFalse=makeEmptyFunction(!1),n.thatReturnsTrue=makeEmptyFunction(!0),n.thatReturnsNull=makeEmptyFunction(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(t){return t},t.exports=n},function(t,e,r){"use strict";var n=["accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","challenge","charSet","checked","cite","classID","className","colSpan","cols","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","encType","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","height","hidden","high","href","hrefLang","htmlFor","httpEquiv","icon","id","inputMode","integrity","is","keyParams","keyType","kind","label","lang","list","loop","low","manifest","marginHeight","marginWidth","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","nonce","open","optimum","pattern","placeholder","poster","preload","profile","radioGroup","readOnly","rel","required","reversed","role","rowSpan","rows","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","spellCheck","src","srcDoc","srcLang","srcSet","start","step","style","summary","tabIndex","target","title","type","useMap","value","width","wmode","wrap"].concat(["autoCapitalize","autoCorrect","color","itemProp","itemScope","itemType","itemRef","itemID","security","unselectable","results","autoSave"]).concat(["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlns","xmlnsXlink","xmlBase","xmlLang","xmlSpace","y","y1","y2","yChannelSelector","z","zoomAndPan"]).reduce(function(t,e){var r=e.toLowerCase();return r!==e&&(t[r]=e),t},{});t.exports=n},function(t,e,r){var n=r(2),o=r(0),i=r(5);t.exports=function _curry3(t){return function f3(e,r,s){switch(arguments.length){case 0:return f3;case 1:return i(e)?f3:o(function(r,n){return t(e,r,n)});case 2:return i(e)&&i(r)?f3:i(e)?o(function(e,n){return t(e,r,n)}):i(r)?o(function(r,n){return t(e,r,n)}):n(function(n){return t(e,r,n)});default:return i(e)&&i(r)&&i(s)?f3:i(e)&&i(r)?o(function(e,r){return t(e,r,s)}):i(e)&&i(s)?o(function(e,n){return t(e,r,n)}):i(r)&&i(s)?o(function(r,n){return t(e,r,n)}):i(e)?n(function(e){return t(e,r,s)}):i(r)?n(function(r){return t(e,r,s)}):i(s)?n(function(n){return t(e,r,n)}):t(e,r,s)}}}},function(t,e,r){var n=r(30)(r(9));t.exports=n},function(t,e,r){var n=r(2),o=r(7),i=n(function toPairs(t){var e=[];for(var r in t)o(r,t)&&(e[e.length]=[r,t[r]]);return e});t.exports=i},function(t,e,r){(function(e){var r=1/0,n="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="[\\ud800-\\udfff]",c="["+s+"]",u="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\d+",p="[\\u2700-\\u27bf]",h="[a-z\\xdf-\\xf6\\xf8-\\xff]",f="[^\\ud800-\\udfff"+s+l+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",d="\\ud83c[\\udffb-\\udfff]",m="[^\\ud800-\\udfff]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",g="[\\ud800-\\udbff][\\udc00-\\udfff]",b="[A-Z\\xc0-\\xd6\\xd8-\\xde]",y="(?:"+h+"|"+f+")",v="(?:"+b+"|"+f+")",x="(?:"+u+"|"+d+")"+"?",C="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+[m,_,g].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),w="(?:"+[p,_,g].join("|")+")"+C,k="(?:"+[m+u+"?",u,_,g,a].join("|")+")",E=RegExp("['???]","g"),S=RegExp(u,"g"),T=RegExp(d+"(?="+d+")|"+k+C,"g"),q=RegExp([b+"?"+h+"+(?:['???](?:d|ll|m|re|s|t|ve))?(?="+[c,b,"$"].join("|")+")",v+"+(?:['???](?:D|LL|M|RE|S|T|VE))?(?="+[c,b+y,"$"].join("|")+")",b+"?"+y+"+(?:['???](?:d|ll|m|re|s|t|ve))?",b+"+(?:['???](?:D|LL|M|RE|S|T|VE))?",l,w].join("|"),"g"),P=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),A=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,O="object"==typeof e&&e&&e.Object===Object&&e,D="object"==typeof self&&self&&self.Object===Object&&self,L=O||D||Function("return this")();var N=function basePropertyOf(t){return function(e){return null==t?void 0:t[e]}}({"??":"A","??":"A","??":"A","??":"A","??":"A","??":"A","??":"a","??":"a","??":"a","??":"a","??":"a","??":"a","??":"C","??":"c","??":"D","??":"d","??":"E","??":"E","??":"E","??":"E","??":"e","??":"e","??":"e","??":"e","??":"I","??":"I","??":"I","??":"I","??":"i","??":"i","??":"i","??":"i","??":"N","??":"n","??":"O","??":"O","??":"O","??":"O","??":"O","??":"O","??":"o","??":"o","??":"o","??":"o","??":"o","??":"o","??":"U","??":"U","??":"U","??":"U","??":"u","??":"u","??":"u","??":"u","??":"Y","??":"y","??":"y","??":"Ae","??":"ae","??":"Th","??":"th","??":"ss","??":"A","??":"A","??":"A","??":"a","??":"a","??":"a","??":"C","??":"C","??":"C","??":"C","??":"c","??":"c","??":"c","??":"c","??":"D","??":"D","??":"d","??":"d","??":"E","??":"E","??":"E","??":"E","??":"E","??":"e","??":"e","??":"e","??":"e","??":"e","??":"G","??":"G","??":"G","??":"G","??":"g","??":"g","??":"g","??":"g","??":"H","??":"H","??":"h","??":"h","??":"I","??":"I","??":"I","??":"I","??":"I","??":"i","??":"i","??":"i","??":"i","??":"i","??":"J","??":"j","??":"K","??":"k","??":"k","??":"L","??":"L","??":"L","??":"L","??":"L","??":"l","??":"l","??":"l","??":"l","??":"l","??":"N","??":"N","??":"N","??":"N","??":"n","??":"n","??":"n","??":"n","??":"O","??":"O","??":"O","??":"o","??":"o","??":"o","??":"R","??":"R","??":"R","??":"r","??":"r","??":"r","??":"S","??":"S","??":"S","??":"S","??":"s","??":"s","??":"s","??":"s","??":"T","??":"T","??":"T","??":"t","??":"t","??":"t","??":"U","??":"U","??":"U","??":"U","??":"U","??":"U","??":"u","??":"u","??":"u","??":"u","??":"u","??":"u","??":"W","??":"w","??":"Y","??":"y","??":"Y","??":"Z","??":"Z","??":"Z","??":"z","??":"z","??":"z","??":"IJ","??":"ij","??":"Oe","??":"oe","??":"'n","??":"ss"});function hasUnicode(t){return P.test(t)}function stringToArray(t){return hasUnicode(t)?function unicodeToArray(t){return t.match(T)||[]}(t):function asciiToArray(t){return t.split("")}(t)}var I=Object.prototype.toString,R=L.Symbol,M=R?R.prototype:void 0,j=M?M.toString:void 0;function baseToString(t){if("string"==typeof t)return t;if(function isSymbol(t){return"symbol"==typeof t||function isObjectLike(t){return!!t&&"object"==typeof t}(t)&&I.call(t)==n}(t))return j?j.call(t):"";var e=t+"";return"0"==e&&1/t==-r?"-0":e}function castSlice(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function baseSlice(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}(t,e,r)}function toString(t){return null==t?"":baseToString(t)}var z=function createCompounder(t){return function(e){return function arrayReduce(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}(function words(t,e,r){return t=toString(t),void 0===(e=r?void 0:e)?function hasUnicodeWord(t){return A.test(t)}(t)?function unicodeWords(t){return t.match(q)||[]}(t):function asciiWords(t){return t.match(o)||[]}(t):t.match(e)||[]}(function deburr(t){return(t=toString(t))&&t.replace(i,N).replace(S,"")}(e).replace(E,"")),t,"")}}(function(t,e,r){return e=e.toLowerCase(),t+(r?function capitalize(t){return V(toString(t).toLowerCase())}(e):e)});var V=function createCaseFirst(t){return function(e){var r=hasUnicode(e=toString(e))?stringToArray(e):void 0,n=r?r[0]:e.charAt(0),o=r?castSlice(r,1).join(""):e.slice(1);return n[t]()+o}}("toUpperCase");t.exports=z}).call(this,r(12))},function(t,e,r){"use strict";t.exports={shouldProcessEveryNode:function shouldProcessEveryNode(t){return!0}}},function(t,e,r){var n=r(17),o=t.exports=Object.create(n),i={tagName:"name"};Object.keys(i).forEach(function(t){var e=i[t];Object.defineProperty(o,t,{get:function(){return this[e]||null},set:function(t){return this[e]=t,t}})})},function(t,e){t.exports={Text:"text",Directive:"directive",Comment:"comment",Script:"script",Style:"style",Tag:"tag",CDATA:"cdata",Doctype:"doctype",isTag:function(t){return"tag"===t.type||"script"===t.type||"style"===t.type}}},function(t,e,r){var n=r(36),o=/\s+/g,i=r(17),s=r(35);function DomHandler(t,e,r){"object"==typeof t?(r=e,e=t,t=null):"function"==typeof e&&(r=e,e=a),this._callback=t,this._options=e||a,this._elementCB=r,this.dom=[],this._done=!1,this._tagStack=[],this._parser=this._parser||null}var a={normalizeWhitespace:!1,withStartIndices:!1,withEndIndices:!1};DomHandler.prototype.onparserinit=function(t){this._parser=t},DomHandler.prototype.onreset=function(){DomHandler.call(this,this._callback,this._options,this._elementCB)},DomHandler.prototype.onend=function(){this._done||(this._done=!0,this._parser=null,this._handleCallback(null))},DomHandler.prototype._handleCallback=DomHandler.prototype.onerror=function(t){if("function"==typeof this._callback)this._callback(t,this.dom);else if(t)throw t},DomHandler.prototype.onclosetag=function(){var t=this._tagStack.pop();this._options.withEndIndices&&t&&(t.endIndex=this._parser.endIndex),this._elementCB&&this._elementCB(t)},DomHandler.prototype._createDomElement=function(t){if(!this._options.withDomLvl1)return t;var e;for(var r in e="tag"===t.type?Object.create(s):Object.create(i),t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},DomHandler.prototype._addDomElement=function(t){var e=this._tagStack[this._tagStack.length-1],r=e?e.children:this.dom,n=r[r.length-1];t.next=null,this._options.withStartIndices&&(t.startIndex=this._parser.startIndex),this._options.withEndIndices&&(t.endIndex=this._parser.endIndex),n?(t.prev=n,n.next=t):t.prev=null,r.push(t),t.parent=e||null},DomHandler.prototype.onopentag=function(t,e){var r={type:"script"===t?n.Script:"style"===t?n.Style:n.Tag,name:t,attribs:e,children:[]},o=this._createDomElement(r);this._addDomElement(o),this._tagStack.push(o)},DomHandler.prototype.ontext=function(t){var e,r=this._options.normalizeWhitespace||this._options.ignoreWhitespace;if(!this._tagStack.length&&this.dom.length&&(e=this.dom[this.dom.length-1]).type===n.Text)r?e.data=(e.data+t).replace(o," "):e.data+=t;else if(this._tagStack.length&&(e=this._tagStack[this._tagStack.length-1])&&(e=e.children[e.children.length-1])&&e.type===n.Text)r?e.data=(e.data+t).replace(o," "):e.data+=t;else{r&&(t=t.replace(o," "));var i=this._createDomElement({data:t,type:n.Text});this._addDomElement(i)}},DomHandler.prototype.oncomment=function(t){var e=this._tagStack[this._tagStack.length-1];if(e&&e.type===n.Comment)e.data+=t;else{var r={data:t,type:n.Comment},o=this._createDomElement(r);this._addDomElement(o),this._tagStack.push(o)}},DomHandler.prototype.oncdatastart=function(){var t={children:[{data:"",type:n.Text}],type:n.CDATA},e=this._createDomElement(t);this._addDomElement(e),this._tagStack.push(e)},DomHandler.prototype.oncommentend=DomHandler.prototype.oncdataend=function(){this._tagStack.pop()},DomHandler.prototype.onprocessinginstruction=function(t,e){var r=this._createDomElement({name:t,data:e,type:n.Directive});this._addDomElement(r)},t.exports=DomHandler},function(t,e){function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(t){return"function"==typeof t}function isObject(t){return"object"==typeof t&&null!==t}function isUndefined(t){return void 0===t}t.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(t){if(!function isNumber(t){return"number"==typeof t}(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},EventEmitter.prototype.emit=function(t){var e,r,n,o,i,s;if(this._events||(this._events={}),"error"===t&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var a=new Error('Uncaught, unspecified "error" event. ('+e+")");throw a.context=e,a}if(isUndefined(r=this._events[t]))return!1;if(isFunction(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),r.apply(this,o)}else if(isObject(r))for(o=Array.prototype.slice.call(arguments,1),n=(s=r.slice()).length,i=0;i<n;i++)s[i].apply(this,o);return!0},EventEmitter.prototype.addListener=function(t,e){var r;if(!isFunction(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,isFunction(e.listener)?e.listener:e),this._events[t]?isObject(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,isObject(this._events[t])&&!this._events[t].warned&&(r=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners)&&r>0&&this._events[t].length>r&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(t,e){if(!isFunction(e))throw TypeError("listener must be a function");var r=!1;function g(){this.removeListener(t,g),r||(r=!0,e.apply(this,arguments))}return g.listener=e,this.on(t,g),this},EventEmitter.prototype.removeListener=function(t,e){var r,n,o,i;if(!isFunction(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(o=(r=this._events[t]).length,n=-1,r===e||isFunction(r.listener)&&r.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(isObject(r)){for(i=o;i-- >0;)if(r[i]===e||r[i].listener&&r[i].listener===e){n=i;break}if(n<0)return this;1===r.length?(r.length=0,delete this._events[t]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},EventEmitter.prototype.removeAllListeners=function(t){var e,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(isFunction(r=this._events[t]))this.removeListener(t,r);else if(r)for(;r.length;)this.removeListener(t,r[r.length-1]);return delete this._events[t],this},EventEmitter.prototype.listeners=function(t){return this._events&&this._events[t]?isFunction(this._events[t])?[this._events[t]]:this._events[t].slice():[]},EventEmitter.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(isFunction(e))return 1;if(e)return e.length}return 0},EventEmitter.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e){"function"==typeof Object.create?t.exports=function inherits(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function inherits(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t){t.exports={amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}},function(t){t.exports={Aacute:"??",aacute:"??",Acirc:"??",acirc:"??",acute:"??",AElig:"??",aelig:"??",Agrave:"??",agrave:"??",amp:"&",AMP:"&",Aring:"??",aring:"??",Atilde:"??",atilde:"??",Auml:"??",auml:"??",brvbar:"??",Ccedil:"??",ccedil:"??",cedil:"??",cent:"??",copy:"??",COPY:"??",curren:"??",deg:"??",divide:"??",Eacute:"??",eacute:"??",Ecirc:"??",ecirc:"??",Egrave:"??",egrave:"??",ETH:"??",eth:"??",Euml:"??",euml:"??",frac12:"??",frac14:"??",frac34:"??",gt:">",GT:">",Iacute:"??",iacute:"??",Icirc:"??",icirc:"??",iexcl:"??",Igrave:"??",igrave:"??",iquest:"??",Iuml:"??",iuml:"??",laquo:"??",lt:"<",LT:"<",macr:"??",micro:"??",middot:"??",nbsp:"??",not:"??",Ntilde:"??",ntilde:"??",Oacute:"??",oacute:"??",Ocirc:"??",ocirc:"??",Ograve:"??",ograve:"??",ordf:"??",ordm:"??",Oslash:"??",oslash:"??",Otilde:"??",otilde:"??",Ouml:"??",ouml:"??",para:"??",plusmn:"??",pound:"??",quot:'"',QUOT:'"',raquo:"??",reg:"??",REG:"??",sect:"??",shy:"??",sup1:"??",sup2:"??",sup3:"??",szlig:"??",THORN:"??",thorn:"??",times:"??",Uacute:"??",uacute:"??",Ucirc:"??",ucirc:"??",Ugrave:"??",ugrave:"??",uml:"??",Uuml:"??",uuml:"??",Yacute:"??",yacute:"??",yen:"??",yuml:"??"}},function(t){t.exports={Aacute:"??",aacute:"??",Abreve:"??",abreve:"??",ac:"???",acd:"???",acE:"?????",Acirc:"??",acirc:"??",acute:"??",Acy:"??",acy:"??",AElig:"??",aelig:"??",af:"???",Afr:"????",afr:"????",Agrave:"??",agrave:"??",alefsym:"???",aleph:"???",Alpha:"??",alpha:"??",Amacr:"??",amacr:"??",amalg:"???",amp:"&",AMP:"&",andand:"???",And:"???",and:"???",andd:"???",andslope:"???",andv:"???",ang:"???",ange:"???",angle:"???",angmsdaa:"???",angmsdab:"???",angmsdac:"???",angmsdad:"???",angmsdae:"???",angmsdaf:"???",angmsdag:"???",angmsdah:"???",angmsd:"???",angrt:"???",angrtvb:"???",angrtvbd:"???",angsph:"???",angst:"??",angzarr:"???",Aogon:"??",aogon:"??",Aopf:"????",aopf:"????",apacir:"???",ap:"???",apE:"???",ape:"???",apid:"???",apos:"'",ApplyFunction:"???",approx:"???",approxeq:"???",Aring:"??",aring:"??",Ascr:"????",ascr:"????",Assign:"???",ast:"*",asymp:"???",asympeq:"???",Atilde:"??",atilde:"??",Auml:"??",auml:"??",awconint:"???",awint:"???",backcong:"???",backepsilon:"??",backprime:"???",backsim:"???",backsimeq:"???",Backslash:"???",Barv:"???",barvee:"???",barwed:"???",Barwed:"???",barwedge:"???",bbrk:"???",bbrktbrk:"???",bcong:"???",Bcy:"??",bcy:"??",bdquo:"???",becaus:"???",because:"???",Because:"???",bemptyv:"???",bepsi:"??",bernou:"???",Bernoullis:"???",Beta:"??",beta:"??",beth:"???",between:"???",Bfr:"????",bfr:"????",bigcap:"???",bigcirc:"???",bigcup:"???",bigodot:"???",bigoplus:"???",bigotimes:"???",bigsqcup:"???",bigstar:"???",bigtriangledown:"???",bigtriangleup:"???",biguplus:"???",bigvee:"???",bigwedge:"???",bkarow:"???",blacklozenge:"???",blacksquare:"???",blacktriangle:"???",blacktriangledown:"???",blacktriangleleft:"???",blacktriangleright:"???",blank:"???",blk12:"???",blk14:"???",blk34:"???",block:"???",bne:"=???",bnequiv:"??????",bNot:"???",bnot:"???",Bopf:"????",bopf:"????",bot:"???",bottom:"???",bowtie:"???",boxbox:"???",boxdl:"???",boxdL:"???",boxDl:"???",boxDL:"???",boxdr:"???",boxdR:"???",boxDr:"???",boxDR:"???",boxh:"???",boxH:"???",boxhd:"???",boxHd:"???",boxhD:"???",boxHD:"???",boxhu:"???",boxHu:"???",boxhU:"???",boxHU:"???",boxminus:"???",boxplus:"???",boxtimes:"???",boxul:"???",boxuL:"???",boxUl:"???",boxUL:"???",boxur:"???",boxuR:"???",boxUr:"???",boxUR:"???",boxv:"???",boxV:"???",boxvh:"???",boxvH:"???",boxVh:"???",boxVH:"???",boxvl:"???",boxvL:"???",boxVl:"???",boxVL:"???",boxvr:"???",boxvR:"???",boxVr:"???",boxVR:"???",bprime:"???",breve:"??",Breve:"??",brvbar:"??",bscr:"????",Bscr:"???",bsemi:"???",bsim:"???",bsime:"???",bsolb:"???",bsol:"\\",bsolhsub:"???",bull:"???",bullet:"???",bump:"???",bumpE:"???",bumpe:"???",Bumpeq:"???",bumpeq:"???",Cacute:"??",cacute:"??",capand:"???",capbrcup:"???",capcap:"???",cap:"???",Cap:"???",capcup:"???",capdot:"???",CapitalDifferentialD:"???",caps:"??????",caret:"???",caron:"??",Cayleys:"???",ccaps:"???",Ccaron:"??",ccaron:"??",Ccedil:"??",ccedil:"??",Ccirc:"??",ccirc:"??",Cconint:"???",ccups:"???",ccupssm:"???",Cdot:"??",cdot:"??",cedil:"??",Cedilla:"??",cemptyv:"???",cent:"??",centerdot:"??",CenterDot:"??",cfr:"????",Cfr:"???",CHcy:"??",chcy:"??",check:"???",checkmark:"???",Chi:"??",chi:"??",circ:"??",circeq:"???",circlearrowleft:"???",circlearrowright:"???",circledast:"???",circledcirc:"???",circleddash:"???",CircleDot:"???",circledR:"??",circledS:"???",CircleMinus:"???",CirclePlus:"???",CircleTimes:"???",cir:"???",cirE:"???",cire:"???",cirfnint:"???",cirmid:"???",cirscir:"???",ClockwiseContourIntegral:"???",CloseCurlyDoubleQuote:"???",CloseCurlyQuote:"???",clubs:"???",clubsuit:"???",colon:":",Colon:"???",Colone:"???",colone:"???",coloneq:"???",comma:",",commat:"@",comp:"???",compfn:"???",complement:"???",complexes:"???",cong:"???",congdot:"???",Congruent:"???",conint:"???",Conint:"???",ContourIntegral:"???",copf:"????",Copf:"???",coprod:"???",Coproduct:"???",copy:"??",COPY:"??",copysr:"???",CounterClockwiseContourIntegral:"???",crarr:"???",cross:"???",Cross:"???",Cscr:"????",cscr:"????",csub:"???",csube:"???",csup:"???",csupe:"???",ctdot:"???",cudarrl:"???",cudarrr:"???",cuepr:"???",cuesc:"???",cularr:"???",cularrp:"???",cupbrcap:"???",cupcap:"???",CupCap:"???",cup:"???",Cup:"???",cupcup:"???",cupdot:"???",cupor:"???",cups:"??????",curarr:"???",curarrm:"???",curlyeqprec:"???",curlyeqsucc:"???",curlyvee:"???",curlywedge:"???",curren:"??",curvearrowleft:"???",curvearrowright:"???",cuvee:"???",cuwed:"???",cwconint:"???",cwint:"???",cylcty:"???",dagger:"???",Dagger:"???",daleth:"???",darr:"???",Darr:"???",dArr:"???",dash:"???",Dashv:"???",dashv:"???",dbkarow:"???",dblac:"??",Dcaron:"??",dcaron:"??",Dcy:"??",dcy:"??",ddagger:"???",ddarr:"???",DD:"???",dd:"???",DDotrahd:"???",ddotseq:"???",deg:"??",Del:"???",Delta:"??",delta:"??",demptyv:"???",dfisht:"???",Dfr:"????",dfr:"????",dHar:"???",dharl:"???",dharr:"???",DiacriticalAcute:"??",DiacriticalDot:"??",DiacriticalDoubleAcute:"??",DiacriticalGrave:"`",DiacriticalTilde:"??",diam:"???",diamond:"???",Diamond:"???",diamondsuit:"???",diams:"???",die:"??",DifferentialD:"???",digamma:"??",disin:"???",div:"??",divide:"??",divideontimes:"???",divonx:"???",DJcy:"??",djcy:"??",dlcorn:"???",dlcrop:"???",dollar:"$",Dopf:"????",dopf:"????",Dot:"??",dot:"??",DotDot:"???",doteq:"???",doteqdot:"???",DotEqual:"???",dotminus:"???",dotplus:"???",dotsquare:"???",doublebarwedge:"???",DoubleContourIntegral:"???",DoubleDot:"??",DoubleDownArrow:"???",DoubleLeftArrow:"???",DoubleLeftRightArrow:"???",DoubleLeftTee:"???",DoubleLongLeftArrow:"???",DoubleLongLeftRightArrow:"???",DoubleLongRightArrow:"???",DoubleRightArrow:"???",DoubleRightTee:"???",DoubleUpArrow:"???",DoubleUpDownArrow:"???",DoubleVerticalBar:"???",DownArrowBar:"???",downarrow:"???",DownArrow:"???",Downarrow:"???",DownArrowUpArrow:"???",DownBreve:"??",downdownarrows:"???",downharpoonleft:"???",downharpoonright:"???",DownLeftRightVector:"???",DownLeftTeeVector:"???",DownLeftVectorBar:"???",DownLeftVector:"???",DownRightTeeVector:"???",DownRightVectorBar:"???",DownRightVector:"???",DownTeeArrow:"???",DownTee:"???",drbkarow:"???",drcorn:"???",drcrop:"???",Dscr:"????",dscr:"????",DScy:"??",dscy:"??",dsol:"???",Dstrok:"??",dstrok:"??",dtdot:"???",dtri:"???",dtrif:"???",duarr:"???",duhar:"???",dwangle:"???",DZcy:"??",dzcy:"??",dzigrarr:"???",Eacute:"??",eacute:"??",easter:"???",Ecaron:"??",ecaron:"??",Ecirc:"??",ecirc:"??",ecir:"???",ecolon:"???",Ecy:"??",ecy:"??",eDDot:"???",Edot:"??",edot:"??",eDot:"???",ee:"???",efDot:"???",Efr:"????",efr:"????",eg:"???",Egrave:"??",egrave:"??",egs:"???",egsdot:"???",el:"???",Element:"???",elinters:"???",ell:"???",els:"???",elsdot:"???",Emacr:"??",emacr:"??",empty:"???",emptyset:"???",EmptySmallSquare:"???",emptyv:"???",EmptyVerySmallSquare:"???",emsp13:"???",emsp14:"???",emsp:"???",ENG:"??",eng:"??",ensp:"???",Eogon:"??",eogon:"??",Eopf:"????",eopf:"????",epar:"???",eparsl:"???",eplus:"???",epsi:"??",Epsilon:"??",epsilon:"??",epsiv:"??",eqcirc:"???",eqcolon:"???",eqsim:"???",eqslantgtr:"???",eqslantless:"???",Equal:"???",equals:"=",EqualTilde:"???",equest:"???",Equilibrium:"???",equiv:"???",equivDD:"???",eqvparsl:"???",erarr:"???",erDot:"???",escr:"???",Escr:"???",esdot:"???",Esim:"???",esim:"???",Eta:"??",eta:"??",ETH:"??",eth:"??",Euml:"??",euml:"??",euro:"???",excl:"!",exist:"???",Exists:"???",expectation:"???",exponentiale:"???",ExponentialE:"???",fallingdotseq:"???",Fcy:"??",fcy:"??",female:"???",ffilig:"???",fflig:"???",ffllig:"???",Ffr:"????",ffr:"????",filig:"???",FilledSmallSquare:"???",FilledVerySmallSquare:"???",fjlig:"fj",flat:"???",fllig:"???",fltns:"???",fnof:"??",Fopf:"????",fopf:"????",forall:"???",ForAll:"???",fork:"???",forkv:"???",Fouriertrf:"???",fpartint:"???",frac12:"??",frac13:"???",frac14:"??",frac15:"???",frac16:"???",frac18:"???",frac23:"???",frac25:"???",frac34:"??",frac35:"???",frac38:"???",frac45:"???",frac56:"???",frac58:"???",frac78:"???",frasl:"???",frown:"???",fscr:"????",Fscr:"???",gacute:"??",Gamma:"??",gamma:"??",Gammad:"??",gammad:"??",gap:"???",Gbreve:"??",gbreve:"??",Gcedil:"??",Gcirc:"??",gcirc:"??",Gcy:"??",gcy:"??",Gdot:"??",gdot:"??",ge:"???",gE:"???",gEl:"???",gel:"???",geq:"???",geqq:"???",geqslant:"???",gescc:"???",ges:"???",gesdot:"???",gesdoto:"???",gesdotol:"???",gesl:"??????",gesles:"???",Gfr:"????",gfr:"????",gg:"???",Gg:"???",ggg:"???",gimel:"???",GJcy:"??",gjcy:"??",gla:"???",gl:"???",glE:"???",glj:"???",gnap:"???",gnapprox:"???",gne:"???",gnE:"???",gneq:"???",gneqq:"???",gnsim:"???",Gopf:"????",gopf:"????",grave:"`",GreaterEqual:"???",GreaterEqualLess:"???",GreaterFullEqual:"???",GreaterGreater:"???",GreaterLess:"???",GreaterSlantEqual:"???",GreaterTilde:"???",Gscr:"????",gscr:"???",gsim:"???",gsime:"???",gsiml:"???",gtcc:"???",gtcir:"???",gt:">",GT:">",Gt:"???",gtdot:"???",gtlPar:"???",gtquest:"???",gtrapprox:"???",gtrarr:"???",gtrdot:"???",gtreqless:"???",gtreqqless:"???",gtrless:"???",gtrsim:"???",gvertneqq:"??????",gvnE:"??????",Hacek:"??",hairsp:"???",half:"??",hamilt:"???",HARDcy:"??",hardcy:"??",harrcir:"???",harr:"???",hArr:"???",harrw:"???",Hat:"^",hbar:"???",Hcirc:"??",hcirc:"??",hearts:"???",heartsuit:"???",hellip:"???",hercon:"???",hfr:"????",Hfr:"???",HilbertSpace:"???",hksearow:"???",hkswarow:"???",hoarr:"???",homtht:"???",hookleftarrow:"???",hookrightarrow:"???",hopf:"????",Hopf:"???",horbar:"???",HorizontalLine:"???",hscr:"????",Hscr:"???",hslash:"???",Hstrok:"??",hstrok:"??",HumpDownHump:"???",HumpEqual:"???",hybull:"???",hyphen:"???",Iacute:"??",iacute:"??",ic:"???",Icirc:"??",icirc:"??",Icy:"??",icy:"??",Idot:"??",IEcy:"??",iecy:"??",iexcl:"??",iff:"???",ifr:"????",Ifr:"???",Igrave:"??",igrave:"??",ii:"???",iiiint:"???",iiint:"???",iinfin:"???",iiota:"???",IJlig:"??",ijlig:"??",Imacr:"??",imacr:"??",image:"???",ImaginaryI:"???",imagline:"???",imagpart:"???",imath:"??",Im:"???",imof:"???",imped:"??",Implies:"???",incare:"???",in:"???",infin:"???",infintie:"???",inodot:"??",intcal:"???",int:"???",Int:"???",integers:"???",Integral:"???",intercal:"???",Intersection:"???",intlarhk:"???",intprod:"???",InvisibleComma:"???",InvisibleTimes:"???",IOcy:"??",iocy:"??",Iogon:"??",iogon:"??",Iopf:"????",iopf:"????",Iota:"??",iota:"??",iprod:"???",iquest:"??",iscr:"????",Iscr:"???",isin:"???",isindot:"???",isinE:"???",isins:"???",isinsv:"???",isinv:"???",it:"???",Itilde:"??",itilde:"??",Iukcy:"??",iukcy:"??",Iuml:"??",iuml:"??",Jcirc:"??",jcirc:"??",Jcy:"??",jcy:"??",Jfr:"????",jfr:"????",jmath:"??",Jopf:"????",jopf:"????",Jscr:"????",jscr:"????",Jsercy:"??",jsercy:"??",Jukcy:"??",jukcy:"??",Kappa:"??",kappa:"??",kappav:"??",Kcedil:"??",kcedil:"??",Kcy:"??",kcy:"??",Kfr:"????",kfr:"????",kgreen:"??",KHcy:"??",khcy:"??",KJcy:"??",kjcy:"??",Kopf:"????",kopf:"????",Kscr:"????",kscr:"????",lAarr:"???",Lacute:"??",lacute:"??",laemptyv:"???",lagran:"???",Lambda:"??",lambda:"??",lang:"???",Lang:"???",langd:"???",langle:"???",lap:"???",Laplacetrf:"???",laquo:"??",larrb:"???",larrbfs:"???",larr:"???",Larr:"???",lArr:"???",larrfs:"???",larrhk:"???",larrlp:"???",larrpl:"???",larrsim:"???",larrtl:"???",latail:"???",lAtail:"???",lat:"???",late:"???",lates:"??????",lbarr:"???",lBarr:"???",lbbrk:"???",lbrace:"{",lbrack:"[",lbrke:"???",lbrksld:"???",lbrkslu:"???",Lcaron:"??",lcaron:"??",Lcedil:"??",lcedil:"??",lceil:"???",lcub:"{",Lcy:"??",lcy:"??",ldca:"???",ldquo:"???",ldquor:"???",ldrdhar:"???",ldrushar:"???",ldsh:"???",le:"???",lE:"???",LeftAngleBracket:"???",LeftArrowBar:"???",leftarrow:"???",LeftArrow:"???",Leftarrow:"???",LeftArrowRightArrow:"???",leftarrowtail:"???",LeftCeiling:"???",LeftDoubleBracket:"???",LeftDownTeeVector:"???",LeftDownVectorBar:"???",LeftDownVector:"???",LeftFloor:"???",leftharpoondown:"???",leftharpoonup:"???",leftleftarrows:"???",leftrightarrow:"???",LeftRightArrow:"???",Leftrightarrow:"???",leftrightarrows:"???",leftrightharpoons:"???",leftrightsquigarrow:"???",LeftRightVector:"???",LeftTeeArrow:"???",LeftTee:"???",LeftTeeVector:"???",leftthreetimes:"???",LeftTriangleBar:"???",LeftTriangle:"???",LeftTriangleEqual:"???",LeftUpDownVector:"???",LeftUpTeeVector:"???",LeftUpVectorBar:"???",LeftUpVector:"???",LeftVectorBar:"???",LeftVector:"???",lEg:"???",leg:"???",leq:"???",leqq:"???",leqslant:"???",lescc:"???",les:"???",lesdot:"???",lesdoto:"???",lesdotor:"???",lesg:"??????",lesges:"???",lessapprox:"???",lessdot:"???",lesseqgtr:"???",lesseqqgtr:"???",LessEqualGreater:"???",LessFullEqual:"???",LessGreater:"???",lessgtr:"???",LessLess:"???",lesssim:"???",LessSlantEqual:"???",LessTilde:"???",lfisht:"???",lfloor:"???",Lfr:"????",lfr:"????",lg:"???",lgE:"???",lHar:"???",lhard:"???",lharu:"???",lharul:"???",lhblk:"???",LJcy:"??",ljcy:"??",llarr:"???",ll:"???",Ll:"???",llcorner:"???",Lleftarrow:"???",llhard:"???",lltri:"???",Lmidot:"??",lmidot:"??",lmoustache:"???",lmoust:"???",lnap:"???",lnapprox:"???",lne:"???",lnE:"???",lneq:"???",lneqq:"???",lnsim:"???",loang:"???",loarr:"???",lobrk:"???",longleftarrow:"???",LongLeftArrow:"???",Longleftarrow:"???",longleftrightarrow:"???",LongLeftRightArrow:"???",Longleftrightarrow:"???",longmapsto:"???",longrightarrow:"???",LongRightArrow:"???",Longrightarrow:"???",looparrowleft:"???",looparrowright:"???",lopar:"???",Lopf:"????",lopf:"????",loplus:"???",lotimes:"???",lowast:"???",lowbar:"_",LowerLeftArrow:"???",LowerRightArrow:"???",loz:"???",lozenge:"???",lozf:"???",lpar:"(",lparlt:"???",lrarr:"???",lrcorner:"???",lrhar:"???",lrhard:"???",lrm:"???",lrtri:"???",lsaquo:"???",lscr:"????",Lscr:"???",lsh:"???",Lsh:"???",lsim:"???",lsime:"???",lsimg:"???",lsqb:"[",lsquo:"???",lsquor:"???",Lstrok:"??",lstrok:"??",ltcc:"???",ltcir:"???",lt:"<",LT:"<",Lt:"???",ltdot:"???",lthree:"???",ltimes:"???",ltlarr:"???",ltquest:"???",ltri:"???",ltrie:"???",ltrif:"???",ltrPar:"???",lurdshar:"???",luruhar:"???",lvertneqq:"??????",lvnE:"??????",macr:"??",male:"???",malt:"???",maltese:"???",Map:"???",map:"???",mapsto:"???",mapstodown:"???",mapstoleft:"???",mapstoup:"???",marker:"???",mcomma:"???",Mcy:"??",mcy:"??",mdash:"???",mDDot:"???",measuredangle:"???",MediumSpace:"???",Mellintrf:"???",Mfr:"????",mfr:"????",mho:"???",micro:"??",midast:"*",midcir:"???",mid:"???",middot:"??",minusb:"???",minus:"???",minusd:"???",minusdu:"???",MinusPlus:"???",mlcp:"???",mldr:"???",mnplus:"???",models:"???",Mopf:"????",mopf:"????",mp:"???",mscr:"????",Mscr:"???",mstpos:"???",Mu:"??",mu:"??",multimap:"???",mumap:"???",nabla:"???",Nacute:"??",nacute:"??",nang:"??????",nap:"???",napE:"?????",napid:"?????",napos:"??",napprox:"???",natural:"???",naturals:"???",natur:"???",nbsp:"??",nbump:"?????",nbumpe:"?????",ncap:"???",Ncaron:"??",ncaron:"??",Ncedil:"??",ncedil:"??",ncong:"???",ncongdot:"?????",ncup:"???",Ncy:"??",ncy:"??",ndash:"???",nearhk:"???",nearr:"???",neArr:"???",nearrow:"???",ne:"???",nedot:"?????",NegativeMediumSpace:"???",NegativeThickSpace:"???",NegativeThinSpace:"???",NegativeVeryThinSpace:"???",nequiv:"???",nesear:"???",nesim:"?????",NestedGreaterGreater:"???",NestedLessLess:"???",NewLine:"\n",nexist:"???",nexists:"???",Nfr:"????",nfr:"????",ngE:"?????",nge:"???",ngeq:"???",ngeqq:"?????",ngeqslant:"?????",nges:"?????",nGg:"?????",ngsim:"???",nGt:"??????",ngt:"???",ngtr:"???",nGtv:"?????",nharr:"???",nhArr:"???",nhpar:"???",ni:"???",nis:"???",nisd:"???",niv:"???",NJcy:"??",njcy:"??",nlarr:"???",nlArr:"???",nldr:"???",nlE:"?????",nle:"???",nleftarrow:"???",nLeftarrow:"???",nleftrightarrow:"???",nLeftrightarrow:"???",nleq:"???",nleqq:"?????",nleqslant:"?????",nles:"?????",nless:"???",nLl:"?????",nlsim:"???",nLt:"??????",nlt:"???",nltri:"???",nltrie:"???",nLtv:"?????",nmid:"???",NoBreak:"???",NonBreakingSpace:"??",nopf:"????",Nopf:"???",Not:"???",not:"??",NotCongruent:"???",NotCupCap:"???",NotDoubleVerticalBar:"???",NotElement:"???",NotEqual:"???",NotEqualTilde:"?????",NotExists:"???",NotGreater:"???",NotGreaterEqual:"???",NotGreaterFullEqual:"?????",NotGreaterGreater:"?????",NotGreaterLess:"???",NotGreaterSlantEqual:"?????",NotGreaterTilde:"???",NotHumpDownHump:"?????",NotHumpEqual:"?????",notin:"???",notindot:"?????",notinE:"?????",notinva:"???",notinvb:"???",notinvc:"???",NotLeftTriangleBar:"?????",NotLeftTriangle:"???",NotLeftTriangleEqual:"???",NotLess:"???",NotLessEqual:"???",NotLessGreater:"???",NotLessLess:"?????",NotLessSlantEqual:"?????",NotLessTilde:"???",NotNestedGreaterGreater:"?????",NotNestedLessLess:"?????",notni:"???",notniva:"???",notnivb:"???",notnivc:"???",NotPrecedes:"???",NotPrecedesEqual:"?????",NotPrecedesSlantEqual:"???",NotReverseElement:"???",NotRightTriangleBar:"?????",NotRightTriangle:"???",NotRightTriangleEqual:"???",NotSquareSubset:"?????",NotSquareSubsetEqual:"???",NotSquareSuperset:"?????",NotSquareSupersetEqual:"???",NotSubset:"??????",NotSubsetEqual:"???",NotSucceeds:"???",NotSucceedsEqual:"?????",NotSucceedsSlantEqual:"???",NotSucceedsTilde:"?????",NotSuperset:"??????",NotSupersetEqual:"???",NotTilde:"???",NotTildeEqual:"???",NotTildeFullEqual:"???",NotTildeTilde:"???",NotVerticalBar:"???",nparallel:"???",npar:"???",nparsl:"??????",npart:"?????",npolint:"???",npr:"???",nprcue:"???",nprec:"???",npreceq:"?????",npre:"?????",nrarrc:"?????",nrarr:"???",nrArr:"???",nrarrw:"?????",nrightarrow:"???",nRightarrow:"???",nrtri:"???",nrtrie:"???",nsc:"???",nsccue:"???",nsce:"?????",Nscr:"????",nscr:"????",nshortmid:"???",nshortparallel:"???",nsim:"???",nsime:"???",nsimeq:"???",nsmid:"???",nspar:"???",nsqsube:"???",nsqsupe:"???",nsub:"???",nsubE:"?????",nsube:"???",nsubset:"??????",nsubseteq:"???",nsubseteqq:"?????",nsucc:"???",nsucceq:"?????",nsup:"???",nsupE:"?????",nsupe:"???",nsupset:"??????",nsupseteq:"???",nsupseteqq:"?????",ntgl:"???",Ntilde:"??",ntilde:"??",ntlg:"???",ntriangleleft:"???",ntrianglelefteq:"???",ntriangleright:"???",ntrianglerighteq:"???",Nu:"??",nu:"??",num:"#",numero:"???",numsp:"???",nvap:"??????",nvdash:"???",nvDash:"???",nVdash:"???",nVDash:"???",nvge:"??????",nvgt:">???",nvHarr:"???",nvinfin:"???",nvlArr:"???",nvle:"??????",nvlt:"<???",nvltrie:"??????",nvrArr:"???",nvrtrie:"??????",nvsim:"??????",nwarhk:"???",nwarr:"???",nwArr:"???",nwarrow:"???",nwnear:"???",Oacute:"??",oacute:"??",oast:"???",Ocirc:"??",ocirc:"??",ocir:"???",Ocy:"??",ocy:"??",odash:"???",Odblac:"??",odblac:"??",odiv:"???",odot:"???",odsold:"???",OElig:"??",oelig:"??",ofcir:"???",Ofr:"????",ofr:"????",ogon:"??",Ograve:"??",ograve:"??",ogt:"???",ohbar:"???",ohm:"??",oint:"???",olarr:"???",olcir:"???",olcross:"???",oline:"???",olt:"???",Omacr:"??",omacr:"??",Omega:"??",omega:"??",Omicron:"??",omicron:"??",omid:"???",ominus:"???",Oopf:"????",oopf:"????",opar:"???",OpenCurlyDoubleQuote:"???",OpenCurlyQuote:"???",operp:"???",oplus:"???",orarr:"???",Or:"???",or:"???",ord:"???",order:"???",orderof:"???",ordf:"??",ordm:"??",origof:"???",oror:"???",orslope:"???",orv:"???",oS:"???",Oscr:"????",oscr:"???",Oslash:"??",oslash:"??",osol:"???",Otilde:"??",otilde:"??",otimesas:"???",Otimes:"???",otimes:"???",Ouml:"??",ouml:"??",ovbar:"???",OverBar:"???",OverBrace:"???",OverBracket:"???",OverParenthesis:"???",para:"??",parallel:"???",par:"???",parsim:"???",parsl:"???",part:"???",PartialD:"???",Pcy:"??",pcy:"??",percnt:"%",period:".",permil:"???",perp:"???",pertenk:"???",Pfr:"????",pfr:"????",Phi:"??",phi:"??",phiv:"??",phmmat:"???",phone:"???",Pi:"??",pi:"??",pitchfork:"???",piv:"??",planck:"???",planckh:"???",plankv:"???",plusacir:"???",plusb:"???",pluscir:"???",plus:"+",plusdo:"???",plusdu:"???",pluse:"???",PlusMinus:"??",plusmn:"??",plussim:"???",plustwo:"???",pm:"??",Poincareplane:"???",pointint:"???",popf:"????",Popf:"???",pound:"??",prap:"???",Pr:"???",pr:"???",prcue:"???",precapprox:"???",prec:"???",preccurlyeq:"???",Precedes:"???",PrecedesEqual:"???",PrecedesSlantEqual:"???",PrecedesTilde:"???",preceq:"???",precnapprox:"???",precneqq:"???",precnsim:"???",pre:"???",prE:"???",precsim:"???",prime:"???",Prime:"???",primes:"???",prnap:"???",prnE:"???",prnsim:"???",prod:"???",Product:"???",profalar:"???",profline:"???",profsurf:"???",prop:"???",Proportional:"???",Proportion:"???",propto:"???",prsim:"???",prurel:"???",Pscr:"????",pscr:"????",Psi:"??",psi:"??",puncsp:"???",Qfr:"????",qfr:"????",qint:"???",qopf:"????",Qopf:"???",qprime:"???",Qscr:"????",qscr:"????",quaternions:"???",quatint:"???",quest:"?",questeq:"???",quot:'"',QUOT:'"',rAarr:"???",race:"?????",Racute:"??",racute:"??",radic:"???",raemptyv:"???",rang:"???",Rang:"???",rangd:"???",range:"???",rangle:"???",raquo:"??",rarrap:"???",rarrb:"???",rarrbfs:"???",rarrc:"???",rarr:"???",Rarr:"???",rArr:"???",rarrfs:"???",rarrhk:"???",rarrlp:"???",rarrpl:"???",rarrsim:"???",Rarrtl:"???",rarrtl:"???",rarrw:"???",ratail:"???",rAtail:"???",ratio:"???",rationals:"???",rbarr:"???",rBarr:"???",RBarr:"???",rbbrk:"???",rbrace:"}",rbrack:"]",rbrke:"???",rbrksld:"???",rbrkslu:"???",Rcaron:"??",rcaron:"??",Rcedil:"??",rcedil:"??",rceil:"???",rcub:"}",Rcy:"??",rcy:"??",rdca:"???",rdldhar:"???",rdquo:"???",rdquor:"???",rdsh:"???",real:"???",realine:"???",realpart:"???",reals:"???",Re:"???",rect:"???",reg:"??",REG:"??",ReverseElement:"???",ReverseEquilibrium:"???",ReverseUpEquilibrium:"???",rfisht:"???",rfloor:"???",rfr:"????",Rfr:"???",rHar:"???",rhard:"???",rharu:"???",rharul:"???",Rho:"??",rho:"??",rhov:"??",RightAngleBracket:"???",RightArrowBar:"???",rightarrow:"???",RightArrow:"???",Rightarrow:"???",RightArrowLeftArrow:"???",rightarrowtail:"???",RightCeiling:"???",RightDoubleBracket:"???",RightDownTeeVector:"???",RightDownVectorBar:"???",RightDownVector:"???",RightFloor:"???",rightharpoondown:"???",rightharpoonup:"???",rightleftarrows:"???",rightleftharpoons:"???",rightrightarrows:"???",rightsquigarrow:"???",RightTeeArrow:"???",RightTee:"???",RightTeeVector:"???",rightthreetimes:"???",RightTriangleBar:"???",RightTriangle:"???",RightTriangleEqual:"???",RightUpDownVector:"???",RightUpTeeVector:"???",RightUpVectorBar:"???",RightUpVector:"???",RightVectorBar:"???",RightVector:"???",ring:"??",risingdotseq:"???",rlarr:"???",rlhar:"???",rlm:"???",rmoustache:"???",rmoust:"???",rnmid:"???",roang:"???",roarr:"???",robrk:"???",ropar:"???",ropf:"????",Ropf:"???",roplus:"???",rotimes:"???",RoundImplies:"???",rpar:")",rpargt:"???",rppolint:"???",rrarr:"???",Rrightarrow:"???",rsaquo:"???",rscr:"????",Rscr:"???",rsh:"???",Rsh:"???",rsqb:"]",rsquo:"???",rsquor:"???",rthree:"???",rtimes:"???",rtri:"???",rtrie:"???",rtrif:"???",rtriltri:"???",RuleDelayed:"???",ruluhar:"???",rx:"???",Sacute:"??",sacute:"??",sbquo:"???",scap:"???",Scaron:"??",scaron:"??",Sc:"???",sc:"???",sccue:"???",sce:"???",scE:"???",Scedil:"??",scedil:"??",Scirc:"??",scirc:"??",scnap:"???",scnE:"???",scnsim:"???",scpolint:"???",scsim:"???",Scy:"??",scy:"??",sdotb:"???",sdot:"???",sdote:"???",searhk:"???",searr:"???",seArr:"???",searrow:"???",sect:"??",semi:";",seswar:"???",setminus:"???",setmn:"???",sext:"???",Sfr:"????",sfr:"????",sfrown:"???",sharp:"???",SHCHcy:"??",shchcy:"??",SHcy:"??",shcy:"??",ShortDownArrow:"???",ShortLeftArrow:"???",shortmid:"???",shortparallel:"???",ShortRightArrow:"???",ShortUpArrow:"???",shy:"??",Sigma:"??",sigma:"??",sigmaf:"??",sigmav:"??",sim:"???",simdot:"???",sime:"???",simeq:"???",simg:"???",simgE:"???",siml:"???",simlE:"???",simne:"???",simplus:"???",simrarr:"???",slarr:"???",SmallCircle:"???",smallsetminus:"???",smashp:"???",smeparsl:"???",smid:"???",smile:"???",smt:"???",smte:"???",smtes:"??????",SOFTcy:"??",softcy:"??",solbar:"???",solb:"???",sol:"/",Sopf:"????",sopf:"????",spades:"???",spadesuit:"???",spar:"???",sqcap:"???",sqcaps:"??????",sqcup:"???",sqcups:"??????",Sqrt:"???",sqsub:"???",sqsube:"???",sqsubset:"???",sqsubseteq:"???",sqsup:"???",sqsupe:"???",sqsupset:"???",sqsupseteq:"???",square:"???",Square:"???",SquareIntersection:"???",SquareSubset:"???",SquareSubsetEqual:"???",SquareSuperset:"???",SquareSupersetEqual:"???",SquareUnion:"???",squarf:"???",squ:"???",squf:"???",srarr:"???",Sscr:"????",sscr:"????",ssetmn:"???",ssmile:"???",sstarf:"???",Star:"???",star:"???",starf:"???",straightepsilon:"??",straightphi:"??",strns:"??",sub:"???",Sub:"???",subdot:"???",subE:"???",sube:"???",subedot:"???",submult:"???",subnE:"???",subne:"???",subplus:"???",subrarr:"???",subset:"???",Subset:"???",subseteq:"???",subseteqq:"???",SubsetEqual:"???",subsetneq:"???",subsetneqq:"???",subsim:"???",subsub:"???",subsup:"???",succapprox:"???",succ:"???",succcurlyeq:"???",Succeeds:"???",SucceedsEqual:"???",SucceedsSlantEqual:"???",SucceedsTilde:"???",succeq:"???",succnapprox:"???",succneqq:"???",succnsim:"???",succsim:"???",SuchThat:"???",sum:"???",Sum:"???",sung:"???",sup1:"??",sup2:"??",sup3:"??",sup:"???",Sup:"???",supdot:"???",supdsub:"???",supE:"???",supe:"???",supedot:"???",Superset:"???",SupersetEqual:"???",suphsol:"???",suphsub:"???",suplarr:"???",supmult:"???",supnE:"???",supne:"???",supplus:"???",supset:"???",Supset:"???",supseteq:"???",supseteqq:"???",supsetneq:"???",supsetneqq:"???",supsim:"???",supsub:"???",supsup:"???",swarhk:"???",swarr:"???",swArr:"???",swarrow:"???",swnwar:"???",szlig:"??",Tab:"\t",target:"???",Tau:"??",tau:"??",tbrk:"???",Tcaron:"??",tcaron:"??",Tcedil:"??",tcedil:"??",Tcy:"??",tcy:"??",tdot:"???",telrec:"???",Tfr:"????",tfr:"????",there4:"???",therefore:"???",Therefore:"???",Theta:"??",theta:"??",thetasym:"??",thetav:"??",thickapprox:"???",thicksim:"???",ThickSpace:"??????",ThinSpace:"???",thinsp:"???",thkap:"???",thksim:"???",THORN:"??",thorn:"??",tilde:"??",Tilde:"???",TildeEqual:"???",TildeFullEqual:"???",TildeTilde:"???",timesbar:"???",timesb:"???",times:"??",timesd:"???",tint:"???",toea:"???",topbot:"???",topcir:"???",top:"???",Topf:"????",topf:"????",topfork:"???",tosa:"???",tprime:"???",trade:"???",TRADE:"???",triangle:"???",triangledown:"???",triangleleft:"???",trianglelefteq:"???",triangleq:"???",triangleright:"???",trianglerighteq:"???",tridot:"???",trie:"???",triminus:"???",TripleDot:"???",triplus:"???",trisb:"???",tritime:"???",trpezium:"???",Tscr:"????",tscr:"????",TScy:"??",tscy:"??",TSHcy:"??",tshcy:"??",Tstrok:"??",tstrok:"??",twixt:"???",twoheadleftarrow:"???",twoheadrightarrow:"???",Uacute:"??",uacute:"??",uarr:"???",Uarr:"???",uArr:"???",Uarrocir:"???",Ubrcy:"??",ubrcy:"??",Ubreve:"??",ubreve:"??",Ucirc:"??",ucirc:"??",Ucy:"??",ucy:"??",udarr:"???",Udblac:"??",udblac:"??",udhar:"???",ufisht:"???",Ufr:"????",ufr:"????",Ugrave:"??",ugrave:"??",uHar:"???",uharl:"???",uharr:"???",uhblk:"???",ulcorn:"???",ulcorner:"???",ulcrop:"???",ultri:"???",Umacr:"??",umacr:"??",uml:"??",UnderBar:"_",UnderBrace:"???",UnderBracket:"???",UnderParenthesis:"???",Union:"???",UnionPlus:"???",Uogon:"??",uogon:"??",Uopf:"????",uopf:"????",UpArrowBar:"???",uparrow:"???",UpArrow:"???",Uparrow:"???",UpArrowDownArrow:"???",updownarrow:"???",UpDownArrow:"???",Updownarrow:"???",UpEquilibrium:"???",upharpoonleft:"???",upharpoonright:"???",uplus:"???",UpperLeftArrow:"???",UpperRightArrow:"???",upsi:"??",Upsi:"??",upsih:"??",Upsilon:"??",upsilon:"??",UpTeeArrow:"???",UpTee:"???",upuparrows:"???",urcorn:"???",urcorner:"???",urcrop:"???",Uring:"??",uring:"??",urtri:"???",Uscr:"????",uscr:"????",utdot:"???",Utilde:"??",utilde:"??",utri:"???",utrif:"???",uuarr:"???",Uuml:"??",uuml:"??",uwangle:"???",vangrt:"???",varepsilon:"??",varkappa:"??",varnothing:"???",varphi:"??",varpi:"??",varpropto:"???",varr:"???",vArr:"???",varrho:"??",varsigma:"??",varsubsetneq:"??????",varsubsetneqq:"??????",varsupsetneq:"??????",varsupsetneqq:"??????",vartheta:"??",vartriangleleft:"???",vartriangleright:"???",vBar:"???",Vbar:"???",vBarv:"???",Vcy:"??",vcy:"??",vdash:"???",vDash:"???",Vdash:"???",VDash:"???",Vdashl:"???",veebar:"???",vee:"???",Vee:"???",veeeq:"???",vellip:"???",verbar:"|",Verbar:"???",vert:"|",Vert:"???",VerticalBar:"???",VerticalLine:"|",VerticalSeparator:"???",VerticalTilde:"???",VeryThinSpace:"???",Vfr:"????",vfr:"????",vltri:"???",vnsub:"??????",vnsup:"??????",Vopf:"????",vopf:"????",vprop:"???",vrtri:"???",Vscr:"????",vscr:"????",vsubnE:"??????",vsubne:"??????",vsupnE:"??????",vsupne:"??????",Vvdash:"???",vzigzag:"???",Wcirc:"??",wcirc:"??",wedbar:"???",wedge:"???",Wedge:"???",wedgeq:"???",weierp:"???",Wfr:"????",wfr:"????",Wopf:"????",wopf:"????",wp:"???",wr:"???",wreath:"???",Wscr:"????",wscr:"????",xcap:"???",xcirc:"???",xcup:"???",xdtri:"???",Xfr:"????",xfr:"????",xharr:"???",xhArr:"???",Xi:"??",xi:"??",xlarr:"???",xlArr:"???",xmap:"???",xnis:"???",xodot:"???",Xopf:"????",xopf:"????",xoplus:"???",xotime:"???",xrarr:"???",xrArr:"???",Xscr:"????",xscr:"????",xsqcup:"???",xuplus:"???",xutri:"???",xvee:"???",xwedge:"???",Yacute:"??",yacute:"??",YAcy:"??",yacy:"??",Ycirc:"??",ycirc:"??",Ycy:"??",ycy:"??",yen:"??",Yfr:"????",yfr:"????",YIcy:"??",yicy:"??",Yopf:"????",yopf:"????",Yscr:"????",yscr:"????",YUcy:"??",yucy:"??",yuml:"??",Yuml:"??",Zacute:"??",zacute:"??",Zcaron:"??",zcaron:"??",Zcy:"??",zcy:"??",Zdot:"??",zdot:"??",zeetrf:"???",ZeroWidthSpace:"???",Zeta:"??",zeta:"??",zfr:"????",Zfr:"???",ZHcy:"??",zhcy:"??",zigrarr:"???",zopf:"????",Zopf:"???",Zscr:"????",zscr:"????",zwj:"???",zwnj:"???"}},function(t){t.exports={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376}},function(t,e,r){var n=r(43);t.exports=function decodeCodePoint(t){if(t>=55296&&t<=57343||t>1114111)return"???";t in n&&(t=n[t]);var e="";t>65535&&(t-=65536,e+=String.fromCharCode(t>>>10&1023|55296),t=56320|1023&t);return e+=String.fromCharCode(t)}},function(t,e,r){t.exports=Tokenizer;var n=r(44),o=r(42),i=r(41),s=r(40),a=0,c=a++,u=a++,l=a++,p=a++,h=a++,f=a++,d=a++,m=a++,_=a++,g=a++,b=a++,y=a++,v=a++,x=a++,C=a++,w=a++,k=a++,E=a++,S=a++,T=a++,q=a++,P=a++,A=a++,O=a++,D=a++,L=a++,N=a++,I=a++,R=a++,M=a++,j=a++,z=a++,V=a++,B=a++,H=a++,U=a++,F=a++,G=a++,W=a++,X=a++,Y=a++,Z=a++,J=a++,Q=a++,K=a++,$=a++,tt=a++,et=a++,rt=a++,nt=a++,ot=a++,it=a++,st=a++,at=a++,ct=a++,ut=0,lt=ut++,pt=ut++,ht=ut++;function whitespace(t){return" "===t||"\n"===t||"\t"===t||"\f"===t||"\r"===t}function ifElseState(t,e,r){var n=t.toLowerCase();return t===n?function(t){t===n?this._state=e:(this._state=r,this._index--)}:function(o){o===n||o===t?this._state=e:(this._state=r,this._index--)}}function consumeSpecialNameChar(t,e){var r=t.toLowerCase();return function(n){n===r||n===t?this._state=e:(this._state=l,this._index--)}}function Tokenizer(t,e){this._state=c,this._buffer="",this._sectionStart=0,this._index=0,this._bufferOffset=0,this._baseState=c,this._special=lt,this._cbs=e,this._running=!0,this._ended=!1,this._xmlMode=!(!t||!t.xmlMode),this._decodeEntities=!(!t||!t.decodeEntities)}Tokenizer.prototype._stateText=function(t){"<"===t?(this._index>this._sectionStart&&this._cbs.ontext(this._getSection()),this._state=u,this._sectionStart=this._index):this._decodeEntities&&this._special===lt&&"&"===t&&(this._index>this._sectionStart&&this._cbs.ontext(this._getSection()),this._baseState=c,this._state=ot,this._sectionStart=this._index)},Tokenizer.prototype._stateBeforeTagName=function(t){"/"===t?this._state=h:"<"===t?(this._cbs.ontext(this._getSection()),this._sectionStart=this._index):">"===t||this._special!==lt||whitespace(t)?this._state=c:"!"===t?(this._state=C,this._sectionStart=this._index+1):"?"===t?(this._state=k,this._sectionStart=this._index+1):(this._state=this._xmlMode||"s"!==t&&"S"!==t?l:j,this._sectionStart=this._index)},Tokenizer.prototype._stateInTagName=function(t){("/"===t||">"===t||whitespace(t))&&(this._emitToken("onopentagname"),this._state=m,this._index--)},Tokenizer.prototype._stateBeforeCloseingTagName=function(t){whitespace(t)||(">"===t?this._state=c:this._special!==lt?"s"===t||"S"===t?this._state=z:(this._state=c,this._index--):(this._state=f,this._sectionStart=this._index))},Tokenizer.prototype._stateInCloseingTagName=function(t){(">"===t||whitespace(t))&&(this._emitToken("onclosetag"),this._state=d,this._index--)},Tokenizer.prototype._stateAfterCloseingTagName=function(t){">"===t&&(this._state=c,this._sectionStart=this._index+1)},Tokenizer.prototype._stateBeforeAttributeName=function(t){">"===t?(this._cbs.onopentagend(),this._state=c,this._sectionStart=this._index+1):"/"===t?this._state=p:whitespace(t)||(this._state=_,this._sectionStart=this._index)},Tokenizer.prototype._stateInSelfClosingTag=function(t){">"===t?(this._cbs.onselfclosingtag(),this._state=c,this._sectionStart=this._index+1):whitespace(t)||(this._state=m,this._index--)},Tokenizer.prototype._stateInAttributeName=function(t){("="===t||"/"===t||">"===t||whitespace(t))&&(this._cbs.onattribname(this._getSection()),this._sectionStart=-1,this._state=g,this._index--)},Tokenizer.prototype._stateAfterAttributeName=function(t){"="===t?this._state=b:"/"===t||">"===t?(this._cbs.onattribend(),this._state=m,this._index--):whitespace(t)||(this._cbs.onattribend(),this._state=_,this._sectionStart=this._index)},Tokenizer.prototype._stateBeforeAttributeValue=function(t){'"'===t?(this._state=y,this._sectionStart=this._index+1):"'"===t?(this._state=v,this._sectionStart=this._index+1):whitespace(t)||(this._state=x,this._sectionStart=this._index,this._index--)},Tokenizer.prototype._stateInAttributeValueDoubleQuotes=function(t){'"'===t?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=m):this._decodeEntities&&"&"===t&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=ot,this._sectionStart=this._index)},Tokenizer.prototype._stateInAttributeValueSingleQuotes=function(t){"'"===t?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=m):this._decodeEntities&&"&"===t&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=ot,this._sectionStart=this._index)},Tokenizer.prototype._stateInAttributeValueNoQuotes=function(t){whitespace(t)||">"===t?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=m,this._index--):this._decodeEntities&&"&"===t&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=ot,this._sectionStart=this._index)},Tokenizer.prototype._stateBeforeDeclaration=function(t){this._state="["===t?P:"-"===t?E:w},Tokenizer.prototype._stateInDeclaration=function(t){">"===t&&(this._cbs.ondeclaration(this._getSection()),this._state=c,this._sectionStart=this._index+1)},Tokenizer.prototype._stateInProcessingInstruction=function(t){">"===t&&(this._cbs.onprocessinginstruction(this._getSection()),this._state=c,this._sectionStart=this._index+1)},Tokenizer.prototype._stateBeforeComment=function(t){"-"===t?(this._state=S,this._sectionStart=this._index+1):this._state=w},Tokenizer.prototype._stateInComment=function(t){"-"===t&&(this._state=T)},Tokenizer.prototype._stateAfterComment1=function(t){this._state="-"===t?q:S},Tokenizer.prototype._stateAfterComment2=function(t){">"===t?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=c,this._sectionStart=this._index+1):"-"!==t&&(this._state=S)},Tokenizer.prototype._stateBeforeCdata1=ifElseState("C",A,w),Tokenizer.prototype._stateBeforeCdata2=ifElseState("D",O,w),Tokenizer.prototype._stateBeforeCdata3=ifElseState("A",D,w),Tokenizer.prototype._stateBeforeCdata4=ifElseState("T",L,w),Tokenizer.prototype._stateBeforeCdata5=ifElseState("A",N,w),Tokenizer.prototype._stateBeforeCdata6=function(t){"["===t?(this._state=I,this._sectionStart=this._index+1):(this._state=w,this._index--)},Tokenizer.prototype._stateInCdata=function(t){"]"===t&&(this._state=R)},Tokenizer.prototype._stateAfterCdata1=function(t){this._state="]"===t?M:I},Tokenizer.prototype._stateAfterCdata2=function(t){">"===t?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=c,this._sectionStart=this._index+1):"]"!==t&&(this._state=I)},Tokenizer.prototype._stateBeforeSpecial=function(t){"c"===t||"C"===t?this._state=V:"t"===t||"T"===t?this._state=J:(this._state=l,this._index--)},Tokenizer.prototype._stateBeforeSpecialEnd=function(t){this._special!==pt||"c"!==t&&"C"!==t?this._special!==ht||"t"!==t&&"T"!==t?this._state=c:this._state=tt:this._state=G},Tokenizer.prototype._stateBeforeScript1=consumeSpecialNameChar("R",B),Tokenizer.prototype._stateBeforeScript2=consumeSpecialNameChar("I",H),Tokenizer.prototype._stateBeforeScript3=consumeSpecialNameChar("P",U),Tokenizer.prototype._stateBeforeScript4=consumeSpecialNameChar("T",F),Tokenizer.prototype._stateBeforeScript5=function(t){("/"===t||">"===t||whitespace(t))&&(this._special=pt),this._state=l,this._index--},Tokenizer.prototype._stateAfterScript1=ifElseState("R",W,c),Tokenizer.prototype._stateAfterScript2=ifElseState("I",X,c),Tokenizer.prototype._stateAfterScript3=ifElseState("P",Y,c),Tokenizer.prototype._stateAfterScript4=ifElseState("T",Z,c),Tokenizer.prototype._stateAfterScript5=function(t){">"===t||whitespace(t)?(this._special=lt,this._state=f,this._sectionStart=this._index-6,this._index--):this._state=c},Tokenizer.prototype._stateBeforeStyle1=consumeSpecialNameChar("Y",Q),Tokenizer.prototype._stateBeforeStyle2=consumeSpecialNameChar("L",K),Tokenizer.prototype._stateBeforeStyle3=consumeSpecialNameChar("E",$),Tokenizer.prototype._stateBeforeStyle4=function(t){("/"===t||">"===t||whitespace(t))&&(this._special=ht),this._state=l,this._index--},Tokenizer.prototype._stateAfterStyle1=ifElseState("Y",et,c),Tokenizer.prototype._stateAfterStyle2=ifElseState("L",rt,c),Tokenizer.prototype._stateAfterStyle3=ifElseState("E",nt,c),Tokenizer.prototype._stateAfterStyle4=function(t){">"===t||whitespace(t)?(this._special=lt,this._state=f,this._sectionStart=this._index-5,this._index--):this._state=c},Tokenizer.prototype._stateBeforeEntity=ifElseState("#",it,st),Tokenizer.prototype._stateBeforeNumericEntity=ifElseState("X",ct,at),Tokenizer.prototype._parseNamedEntityStrict=function(){if(this._sectionStart+1<this._index){var t=this._buffer.substring(this._sectionStart+1,this._index),e=this._xmlMode?s:o;e.hasOwnProperty(t)&&(this._emitPartial(e[t]),this._sectionStart=this._index+1)}},Tokenizer.prototype._parseLegacyEntity=function(){var t=this._sectionStart+1,e=this._index-t;for(e>6&&(e=6);e>=2;){var r=this._buffer.substr(t,e);if(i.hasOwnProperty(r))return this._emitPartial(i[r]),void(this._sectionStart+=e+1);e--}},Tokenizer.prototype._stateInNamedEntity=function(t){";"===t?(this._parseNamedEntityStrict(),this._sectionStart+1<this._index&&!this._xmlMode&&this._parseLegacyEntity(),this._state=this._baseState):(t<"a"||t>"z")&&(t<"A"||t>"Z")&&(t<"0"||t>"9")&&(this._xmlMode||this._sectionStart+1===this._index||(this._baseState!==c?"="!==t&&this._parseNamedEntityStrict():this._parseLegacyEntity()),this._state=this._baseState,this._index--)},Tokenizer.prototype._decodeNumericEntity=function(t,e){var r=this._sectionStart+t;if(r!==this._index){var o=this._buffer.substring(r,this._index),i=parseInt(o,e);this._emitPartial(n(i)),this._sectionStart=this._index}else this._sectionStart--;this._state=this._baseState},Tokenizer.prototype._stateInNumericEntity=function(t){";"===t?(this._decodeNumericEntity(2,10),this._sectionStart++):(t<"0"||t>"9")&&(this._xmlMode?this._state=this._baseState:this._decodeNumericEntity(2,10),this._index--)},Tokenizer.prototype._stateInHexEntity=function(t){";"===t?(this._decodeNumericEntity(3,16),this._sectionStart++):(t<"a"||t>"f")&&(t<"A"||t>"F")&&(t<"0"||t>"9")&&(this._xmlMode?this._state=this._baseState:this._decodeNumericEntity(3,16),this._index--)},Tokenizer.prototype._cleanup=function(){this._sectionStart<0?(this._buffer="",this._bufferOffset+=this._index,this._index=0):this._running&&(this._state===c?(this._sectionStart!==this._index&&this._cbs.ontext(this._buffer.substr(this._sectionStart)),this._buffer="",this._bufferOffset+=this._index,this._index=0):this._sectionStart===this._index?(this._buffer="",this._bufferOffset+=this._index,this._index=0):(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart,this._bufferOffset+=this._sectionStart),this._sectionStart=0)},Tokenizer.prototype.write=function(t){this._ended&&this._cbs.onerror(Error(".write() after done!")),this._buffer+=t,this._parse()},Tokenizer.prototype._parse=function(){for(;this._index<this._buffer.length&&this._running;){var t=this._buffer.charAt(this._index);this._state===c?this._stateText(t):this._state===u?this._stateBeforeTagName(t):this._state===l?this._stateInTagName(t):this._state===h?this._stateBeforeCloseingTagName(t):this._state===f?this._stateInCloseingTagName(t):this._state===d?this._stateAfterCloseingTagName(t):this._state===p?this._stateInSelfClosingTag(t):this._state===m?this._stateBeforeAttributeName(t):this._state===_?this._stateInAttributeName(t):this._state===g?this._stateAfterAttributeName(t):this._state===b?this._stateBeforeAttributeValue(t):this._state===y?this._stateInAttributeValueDoubleQuotes(t):this._state===v?this._stateInAttributeValueSingleQuotes(t):this._state===x?this._stateInAttributeValueNoQuotes(t):this._state===C?this._stateBeforeDeclaration(t):this._state===w?this._stateInDeclaration(t):this._state===k?this._stateInProcessingInstruction(t):this._state===E?this._stateBeforeComment(t):this._state===S?this._stateInComment(t):this._state===T?this._stateAfterComment1(t):this._state===q?this._stateAfterComment2(t):this._state===P?this._stateBeforeCdata1(t):this._state===A?this._stateBeforeCdata2(t):this._state===O?this._stateBeforeCdata3(t):this._state===D?this._stateBeforeCdata4(t):this._state===L?this._stateBeforeCdata5(t):this._state===N?this._stateBeforeCdata6(t):this._state===I?this._stateInCdata(t):this._state===R?this._stateAfterCdata1(t):this._state===M?this._stateAfterCdata2(t):this._state===j?this._stateBeforeSpecial(t):this._state===z?this._stateBeforeSpecialEnd(t):this._state===V?this._stateBeforeScript1(t):this._state===B?this._stateBeforeScript2(t):this._state===H?this._stateBeforeScript3(t):this._state===U?this._stateBeforeScript4(t):this._state===F?this._stateBeforeScript5(t):this._state===G?this._stateAfterScript1(t):this._state===W?this._stateAfterScript2(t):this._state===X?this._stateAfterScript3(t):this._state===Y?this._stateAfterScript4(t):this._state===Z?this._stateAfterScript5(t):this._state===J?this._stateBeforeStyle1(t):this._state===Q?this._stateBeforeStyle2(t):this._state===K?this._stateBeforeStyle3(t):this._state===$?this._stateBeforeStyle4(t):this._state===tt?this._stateAfterStyle1(t):this._state===et?this._stateAfterStyle2(t):this._state===rt?this._stateAfterStyle3(t):this._state===nt?this._stateAfterStyle4(t):this._state===ot?this._stateBeforeEntity(t):this._state===it?this._stateBeforeNumericEntity(t):this._state===st?this._stateInNamedEntity(t):this._state===at?this._stateInNumericEntity(t):this._state===ct?this._stateInHexEntity(t):this._cbs.onerror(Error("unknown _state"),this._state),this._index++}this._cleanup()},Tokenizer.prototype.pause=function(){this._running=!1},Tokenizer.prototype.resume=function(){this._running=!0,this._index<this._buffer.length&&this._parse(),this._ended&&this._finish()},Tokenizer.prototype.end=function(t){this._ended&&this._cbs.onerror(Error(".end() after done!")),t&&this.write(t),this._ended=!0,this._running&&this._finish()},Tokenizer.prototype._finish=function(){this._sectionStart<this._index&&this._handleTrailingData(),this._cbs.onend()},Tokenizer.prototype._handleTrailingData=function(){var t=this._buffer.substr(this._sectionStart);this._state===I||this._state===R||this._state===M?this._cbs.oncdata(t):this._state===S||this._state===T||this._state===q?this._cbs.oncomment(t):this._state!==st||this._xmlMode?this._state!==at||this._xmlMode?this._state!==ct||this._xmlMode?this._state!==l&&this._state!==m&&this._state!==b&&this._state!==g&&this._state!==_&&this._state!==v&&this._state!==y&&this._state!==x&&this._state!==f&&this._cbs.ontext(t):(this._decodeNumericEntity(3,16),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData())):(this._decodeNumericEntity(2,10),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData())):(this._parseLegacyEntity(),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData()))},Tokenizer.prototype.reset=function(){Tokenizer.call(this,{xmlMode:this._xmlMode,decodeEntities:this._decodeEntities},this._cbs)},Tokenizer.prototype.getAbsoluteIndex=function(){return this._bufferOffset+this._index},Tokenizer.prototype._getSection=function(){return this._buffer.substring(this._sectionStart,this._index)},Tokenizer.prototype._emitToken=function(t){this._cbs[t](this._getSection()),this._sectionStart=-1},Tokenizer.prototype._emitPartial=function(t){this._baseState!==c?this._cbs.onattribdata(t):this._cbs.ontext(t)}},function(t,e,r){var n=r(45),o={input:!0,option:!0,optgroup:!0,select:!0,button:!0,datalist:!0,textarea:!0},i={tr:{tr:!0,th:!0,td:!0},th:{th:!0},td:{thead:!0,th:!0,td:!0},body:{head:!0,link:!0,script:!0},li:{li:!0},p:{p:!0},h1:{p:!0},h2:{p:!0},h3:{p:!0},h4:{p:!0},h5:{p:!0},h6:{p:!0},select:o,input:o,output:o,button:o,datalist:o,textarea:o,option:{option:!0},optgroup:{optgroup:!0}},s={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},a={__proto__:null,math:!0,svg:!0},c={__proto__:null,mi:!0,mo:!0,mn:!0,ms:!0,mtext:!0,"annotation-xml":!0,foreignObject:!0,desc:!0,title:!0},u=/\s|\//;function Parser(t,e){this._options=e||{},this._cbs=t||{},this._tagname="",this._attribname="",this._attribvalue="",this._attribs=null,this._stack=[],this._foreignContext=[],this.startIndex=0,this.endIndex=null,this._lowerCaseTagNames="lowerCaseTags"in this._options?!!this._options.lowerCaseTags:!this._options.xmlMode,this._lowerCaseAttributeNames="lowerCaseAttributeNames"in this._options?!!this._options.lowerCaseAttributeNames:!this._options.xmlMode,this._options.Tokenizer&&(n=this._options.Tokenizer),this._tokenizer=new n(this._options,this),this._cbs.onparserinit&&this._cbs.onparserinit(this)}r(39)(Parser,r(38).EventEmitter),Parser.prototype._updatePosition=function(t){null===this.endIndex?this._tokenizer._sectionStart<=t?this.startIndex=0:this.startIndex=this._tokenizer._sectionStart-t:this.startIndex=this.endIndex+1,this.endIndex=this._tokenizer.getAbsoluteIndex()},Parser.prototype.ontext=function(t){this._updatePosition(1),this.endIndex--,this._cbs.ontext&&this._cbs.ontext(t)},Parser.prototype.onopentagname=function(t){if(this._lowerCaseTagNames&&(t=t.toLowerCase()),this._tagname=t,!this._options.xmlMode&&t in i)for(var e;(e=this._stack[this._stack.length-1])in i[t];this.onclosetag(e));!this._options.xmlMode&&t in s||(this._stack.push(t),t in a?this._foreignContext.push(!0):t in c&&this._foreignContext.push(!1)),this._cbs.onopentagname&&this._cbs.onopentagname(t),this._cbs.onopentag&&(this._attribs={})},Parser.prototype.onopentagend=function(){this._updatePosition(1),this._attribs&&(this._cbs.onopentag&&this._cbs.onopentag(this._tagname,this._attribs),this._attribs=null),!this._options.xmlMode&&this._cbs.onclosetag&&this._tagname in s&&this._cbs.onclosetag(this._tagname),this._tagname=""},Parser.prototype.onclosetag=function(t){if(this._updatePosition(1),this._lowerCaseTagNames&&(t=t.toLowerCase()),(t in a||t in c)&&this._foreignContext.pop(),!this._stack.length||t in s&&!this._options.xmlMode)this._options.xmlMode||"br"!==t&&"p"!==t||(this.onopentagname(t),this._closeCurrentTag());else{var e=this._stack.lastIndexOf(t);if(-1!==e)if(this._cbs.onclosetag)for(e=this._stack.length-e;e--;)this._cbs.onclosetag(this._stack.pop());else this._stack.length=e;else"p"!==t||this._options.xmlMode||(this.onopentagname(t),this._closeCurrentTag())}},Parser.prototype.onselfclosingtag=function(){this._options.xmlMode||this._options.recognizeSelfClosing||this._foreignContext[this._foreignContext.length-1]?this._closeCurrentTag():this.onopentagend()},Parser.prototype._closeCurrentTag=function(){var t=this._tagname;this.onopentagend(),this._stack[this._stack.length-1]===t&&(this._cbs.onclosetag&&this._cbs.onclosetag(t),this._stack.pop())},Parser.prototype.onattribname=function(t){this._lowerCaseAttributeNames&&(t=t.toLowerCase()),this._attribname=t},Parser.prototype.onattribdata=function(t){this._attribvalue+=t},Parser.prototype.onattribend=function(){this._cbs.onattribute&&this._cbs.onattribute(this._attribname,this._attribvalue),this._attribs&&!Object.prototype.hasOwnProperty.call(this._attribs,this._attribname)&&(this._attribs[this._attribname]=this._attribvalue),this._attribname="",this._attribvalue=""},Parser.prototype._getInstructionName=function(t){var e=t.search(u),r=e<0?t:t.substr(0,e);return this._lowerCaseTagNames&&(r=r.toLowerCase()),r},Parser.prototype.ondeclaration=function(t){if(this._cbs.onprocessinginstruction){var e=this._getInstructionName(t);this._cbs.onprocessinginstruction("!"+e,"!"+t)}},Parser.prototype.onprocessinginstruction=function(t){if(this._cbs.onprocessinginstruction){var e=this._getInstructionName(t);this._cbs.onprocessinginstruction("?"+e,"?"+t)}},Parser.prototype.oncomment=function(t){this._updatePosition(4),this._cbs.oncomment&&this._cbs.oncomment(t),this._cbs.oncommentend&&this._cbs.oncommentend()},Parser.prototype.oncdata=function(t){this._updatePosition(1),this._options.xmlMode||this._options.recognizeCDATA?(this._cbs.oncdatastart&&this._cbs.oncdatastart(),this._cbs.ontext&&this._cbs.ontext(t),this._cbs.oncdataend&&this._cbs.oncdataend()):this.oncomment("[CDATA["+t+"]]")},Parser.prototype.onerror=function(t){this._cbs.onerror&&this._cbs.onerror(t)},Parser.prototype.onend=function(){if(this._cbs.onclosetag)for(var t=this._stack.length;t>0;this._cbs.onclosetag(this._stack[--t]));this._cbs.onend&&this._cbs.onend()},Parser.prototype.reset=function(){this._cbs.onreset&&this._cbs.onreset(),this._tokenizer.reset(),this._tagname="",this._attribname="",this._attribs=null,this._stack=[],this._cbs.onparserinit&&this._cbs.onparserinit(this)},Parser.prototype.parseComplete=function(t){this.reset(),this.end(t)},Parser.prototype.write=function(t){this._tokenizer.write(t)},Parser.prototype.end=function(t){this._tokenizer.end(t)},Parser.prototype.pause=function(){this._tokenizer.pause()},Parser.prototype.resume=function(){this._tokenizer.resume()},Parser.prototype.parseChunk=Parser.prototype.write,Parser.prototype.done=Parser.prototype.end,t.exports=Parser},function(t,e,r){var n=r(0),o=r(10),i=function(){function XMap(t,e){this.xf=e,this.f=t}return XMap.prototype["@@transducer/init"]=o.init,XMap.prototype["@@transducer/result"]=o.result,XMap.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},XMap}(),s=n(function _xmap(t,e){return new i(t,e)});t.exports=s},function(t,e){t.exports=function _map(t,e){for(var r=0,n=e.length,o=Array(n);r<n;)o[r]=t(e[r]),r+=1;return o}},function(t,e,r){var n=r(0),o=r(11),i=r(48),s=r(9),a=r(47),c=r(18),u=r(19),l=n(o(["fantasy-land/map","map"],a,function map(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return c(e.length,function(){return t.call(this,e.apply(this,arguments))});case"[object Object]":return s(function(r,n){return r[n]=t(e[n]),r},{},u(e));default:return i(t,e)}}));t.exports=l},function(t,e,r){var n=r(8),o=r(5);t.exports=function _curryN(t,e,r){return function(){for(var i=[],s=0,a=t,c=0;c<e.length||s<arguments.length;){var u;c<e.length&&(!o(e[c])||s>=arguments.length)?u=e[c]:(u=arguments[s],s+=1),i[c]=u,o(u)||(a-=1),c+=1}return a<=0?r.apply(this,i):n(a,_curryN(t,i,r))}}},function(t,e){t.exports=function _concat(t,e){var r;t=t||[],e=e||[];var n=t.length,o=e.length,i=[];for(r=0;r<n;)i[i.length]=t[r],r+=1;for(r=0;r<o;)i[i.length]=e[r],r+=1;return i}},function(t,e,r){var n=r(51),o=r(2),i=r(18),s=o(function addIndex(t){return i(t.length,function(){var e=0,r=arguments[0],o=arguments[arguments.length-1],i=Array.prototype.slice.call(arguments,0);return i[0]=function(){var t=r.apply(this,n(arguments,[e,o]));return e+=1,t},t.apply(this,i)})});t.exports=s},function(t,e,r){var n=r(7),o=Object.prototype.toString,i=function(){return"[object Arguments]"===o.call(arguments)?function _isArguments(t){return"[object Arguments]"===o.call(t)}:function _isArguments(t){return n("callee",t)}}();t.exports=i},function(t,e,r){var n=r(0),o=r(10),i=function(){function XFilter(t,e){this.xf=e,this.f=t}return XFilter.prototype["@@transducer/init"]=o.init,XFilter.prototype["@@transducer/result"]=o.result,XFilter.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},XFilter}(),s=n(function _xfilter(t,e){return new i(t,e)});t.exports=s},function(t,e,r){var n=r(8),o=r(0)(function bind(t,e){return n(t.length,function(){return t.apply(e,arguments)})});t.exports=o},function(t,e){var r=function(){function XWrap(t){this.f=t}return XWrap.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},XWrap.prototype["@@transducer/result"]=function(t){return t},XWrap.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},XWrap}();t.exports=function _xwrap(t){return new r(t)}},function(t,e){t.exports=function _isString(t){return"[object String]"===Object.prototype.toString.call(t)}},function(t,e,r){var n=r(2),o=r(20),i=r(57),s=n(function isArrayLike(t){return!!o(t)||!!t&&("object"==typeof t&&(!i(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))});t.exports=s},function(t,e){t.exports=function _isObject(t){return"[object Object]"===Object.prototype.toString.call(t)}},function(t,e){t.exports=function _filter(t,e){for(var r=0,n=e.length,o=[];r<n;)t(e[r])&&(o[o.length]=e[r]),r+=1;return o}},function(t,e,r){var n=r(0),o=r(11),i=r(60),s=r(59),a=r(9),c=r(54),u=r(19),l=n(o(["filter"],c,function(t,e){return s(e)?a(function(r,n){return t(e[n])&&(r[n]=e[n]),r},{},u(e)):i(t,e)}));t.exports=l},function(t,e){t.exports=function _complement(t){return function(){return!t.apply(this,arguments)}}},function(t,e,r){var n=r(62),o=r(0),i=r(61),s=o(function reject(t,e){return i(n(t),e)});t.exports=s},function(t,e){t.exports=function _reduced(t){return t&&t["@@transducer/reduced"]?t:{"@@transducer/value":t,"@@transducer/reduced":!0}}},function(t,e,r){var n=r(0),o=r(64),i=r(10),s=function(){function XFind(t,e){this.xf=e,this.f=t,this.found=!1}return XFind.prototype["@@transducer/init"]=i.init,XFind.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,void 0)),this.xf["@@transducer/result"](t)},XFind.prototype["@@transducer/step"]=function(t,e){return this.f(e)&&(this.found=!0,t=o(this.xf["@@transducer/step"](t,e))),t},XFind}(),a=n(function _xfind(t,e){return new s(t,e)});t.exports=a},function(t,e){t.exports=function _isTransformer(t){return null!=t&&"function"==typeof t["@@transducer/step"]}},function(t,e,r){var n=r(0)(r(11)(["find"],r(65),function find(t,e){for(var r=0,n=e.length;r<n;){if(t(e[r]))return e[r];r+=1}}));t.exports=n},function(t,e,r){"use strict";var n=r(67),o=r(63),i=r(52),s=r(49),a=r(46),c=r(37),u=r(16),l=r(13),p=r(14);t.exports=function Html2ReactParser(t){function parseWithInstructions(e,r,u){var l=function parseHtmlToTree(e){(t=t||{}).decodeEntities=!0;var r=new c;return new a(r,t).parseComplete(e),r.dom.filter(function(t){return"directive"!==t.type})}(e).map(function(t,e){return function traverseDom(t,e,r,a){if(e(t)){var c=n(function(e){return e.shouldProcessNode(t)},r);if(null!=c){var u=o(function(t){return null==t||!1===t},i(s)(function(t,n){return traverseDom(t,e,r,n)},t.children||[]));return c.replaceChildren?p.createElement(t,a,t.data,[c.processNode(t,u,a)]):c.processNode(t,u,a)}return!1}return!1}(t,r,u,e)});return l.length<=1?l[0]:l}return{parse:function parse(t){var e=new u;return parseWithInstructions(t,l.alwaysValid,e.defaultProcessingInstructions)},parseWithInstructions:parseWithInstructions}}},function(t,e,r){"use strict";var n=r(68),o=r(16),i=r(13),s=r(15);t.exports={Parser:n,ProcessingInstructions:o,IsValidNodeDefinitions:i,ProcessNodeDefinitions:s}},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,r){"use strict";var n=r(28),o=r(27),i=r(70);t.exports=function(){function shim(t,e,r,n,s,a){a!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function getShim(){return shim}shim.isRequired=shim;var t={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};return t.checkPropTypes=n,t.PropTypes=t,t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(r(21));var i={Main:"\n      "+o.default.Main+"\n      a {\n         color: #848c94;\n         &:hover { \n            color: #c0c4c8;\n            text-decoration: none;\n         } \n         &:focus { \n            color: #c0c4c8; \n         }\n      }     \n   ",Header:"\n      background: #303030;\n      border-bottom: 1px solid #111;\n      box-shadow: 0 0 5px 0 rgba(0,0,0,.2);\n      z-index: 999;\n   ",Footer:"\n      background: #303030;\n      border-top: 1px solid #111;        \n      z-index: 997;\n   ",Nav:"\n        background: #222;\n        border-right: 1px solid #111;\n        z-index: 998;\n    ",Section:"\n        color: #fff;\n        background: #222;\n    ",Panel:{Container:"",ChildContainer:"",Gap:{small:".5rem",large:"1rem"},Margin:{small:"1em",large:"1.5rem"}}},s=n({},o.default,{Alert:"",DataGrid:{Container:"\n         .react-grid-Main {\n            outline: none;\n         }\n         .react-grid-Grid {\n            border-color: black;\n            * {\n               border-color: black !important;\n            }\n         }\n      ",HeaderCell:"\n         background: #444;\n      ",Cell:"\n         background: #303030;\n      ",Row:"\n         &.row-selected .react-grid-Cell {\n            background: #1a1a1a;\n         }\n         &:hover {\n            .react-grid-Cell { \n               background: #1a1a1a; \n            }\n         }\n      "},Label:{Container:"",IconContainer:"",IconComponent:""},Markdown:"",MarkdownTOC:{Selected:"\n         font-weight: 600;\n         border-bottom: 1px dashed #ddd;\n      ",Container:"\n         .toc-h1, \n         .toc-h2 {\n            font-size: 1.1rem;\n         }\n         .toc-h3, \n         .toc-h4,\n         .toc-h5 {\n            font-size: .9rem;\n         } \n      "}},{Button:"\n      margin-left: 3px;\n   ",Checkbox:{style:"custom",GroupContainer:"",Container:{Default:"",Checked:""},Label:"",Input:""},Input:"",InputValidationError:"\n        border-color: red;\n    ",Radio:{style:"custom",GroupContainer:"",Container:{Default:"",Checked:""},Label:"",Input:""},RadioToggle:{GroupContainer:"",Label:{Default:"",Checked:""},Input:""},TextArea:""},i,{NavMenu:{SelectedRoute:"\n         > a > div > div {\n            padding-left: .5rem;\n            border-left: 2px solid tomato;\n            font-weight: 600;\n         }\n      ",RouteContainer:"\n         border-bottom: 1px solid #444;\n         color: #868e96; \n         &:hover {\n            background: #1a1a1a; \n         }\n      ",GroupContainer:"\n         border-bottom: 1px solid #444;\n         color: #848c94;\n         &:hover { \n            color: #c0c4c8; \n            background: #1a1a1a;\n         }\n      "}},{Card:{Container:"background: #303030;",ImageContainer:"",HeaderContainer:"background: #444;",BodyContainer:"",FooterContainer:"background: #444;"},Cell:{Container:"background: #303030;",HeaderContainer:"background: #444;",BodyContainer:""},Collapsible:{Container:"",HeaderContainer:""},Field:{Container:"",LabelContainer:"\n         font-weight: 400;\n      ",InputContainer:"\n         input, select, textarea {\n            font-weight: 500;\n            ::-webkit-input-placeholder {\n               font-weight: 400;\n            }\n         },",ValidationMessageContainer:"\n            color: red;\n        ",PlainTextContainer:"",PlainTextComponent:"\n         color: #fff; \n         font-weight: 400;\n      "},Menu:{Container:"",GroupContainer:"\n         background: #303030;\n         border-color: #444;\n      ",ItemContainer:"\n         &:hover > button {\n            background-color: #1a1a1a;\n         }      \n         &.separator {\n            border-bottom-color: #444;\n         }        \n         &.submenu::after {\n            border-left-color: #444;\n         }          \n      "},Modal:{Container:"\n         .modal-content { \n            background: transparent; \n         }\n      ",HeaderContainer:"\n         color: #fff;\n         background: #303030; \n         border-bottom-color: #444;\n      ",BodyContainer:"\n      color: #fff;\n      background: #303030;       \n      ",FooterContainer:"\n      color: #fff;\n      background: #303030; \n      border-top-color: #444;      \n      "},Tab:{Container:"\n         ul {\n            border-bottom-color: #444;\n         }\n         a.nav-link.active {\n            color: #fff;\n            background: #222;\n            border-color: #444;\n         }\n      ",TabItemContainer:"",TabItem:"\n         color: #848c94;\n         &:hover { \n            color: #c0c4c8;\n         }       \n      "}},{name:"dark"});e.default=s},function(t,e){t.exports=r},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}(),i=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(r(73)),s=function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(4));var a=function(){function VMContextStore(t){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,VMContextStore),this.host=t,this.vmId=null,this.vm=null,this.onceHandlers=[]}return o(VMContextStore,[{key:"connect",value:function connect(t,e,r){var o=this;if(!(t=this.host.vmContext?this.host.vmContext.vmId+"."+t:t))throw new Error("'vmId' is required by connect()");return this.removeOrphan(t),this.vm=i.default.react.connect(t,this.host,n({setState:function setState(t){o.setState(t),o.notifyStateChange(t,r)}},e)),this.vmId=t,this.vm}},{key:"destroy",value:function destroy(){this.vm.$destroy(),this.onceHandlers=[],this.vm=null}},{key:"setState",value:function setState(t){this.host.setState(t)}},{key:"notifyStateChange",value:function notifyStateChange(t,e){if(this.onceHandlers.length>0){var r=this.onceHandlers.filter(function(e){return!e.propId||t.hasOwnProperty(e.propId)&&t[e.propId]!==e.value});this.onceHandlers=this.onceHandlers.filter(function(t){return!r.includes(t)}),r.forEach(function(e){return e.handler(t[e.propId])})}"function"==typeof e&&e(t)}},{key:"removeOrphan",value:function removeOrphan(t){i.default.react.getViewModels().filter(function(e){return e.$vmId===t}).forEach(function(t){return t.$destroy()})}},{key:"context",get:function get(){var t=this;return{vmId:this.vmId,vm:this.vm,getState:function getState(e){return e?t.state.hasOwnProperty(e)?t.state[e]:void 0:t.state},setState:function setState(e){return t.setState(e)},dispatchState:function dispatchState(e){return t.vm.$dispatch(e)},getPropAttributes:function getPropAttributes(e){return s.toCamelCase(t.state[e+"__attr"]||{})},getPropValidations:function getPropValidations(e){return(t.state[e+"__validation"]||[]).map(function(t){return s.toCamelCase(t)})},once:function once(e,r){return new Promise(function(n){return t.onceHandlers.push({propId:e,handler:function handler(t){return n(t)},value:r})})}}}},{key:"state",get:function get(){return this.host.state}}]),VMContextStore}();e.default=a},,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}();e.default=function createWebComponent(t,e,r){if(!window.hasOwnProperty("customElements"))return{prototype:{}};var s=function(e){function CustomElement(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,CustomElement);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(CustomElement.__proto__||Object.getPrototypeOf(CustomElement)).call(this));return t.onAttributeChange=function(e){var r=e.reduce(function(e,r){return n({},e,function _defineProperty(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}({},r.attributeName,t.getAttribute(r.attributeName)))},{}),o=t.closest("d-vm-context");o&&!o.context.getState()||t.renderComponent(r)},t.onFormContextStateChange=function(e){var r=e.detail.state.hasOwnProperty("plainText")?{plainText:e.detail.state.plainText}:null;t.component&&t.renderComponent(r)},t.onVMContextStateChange=function(e){return t.renderComponent()},t.onVMContextLocalStateChange=function(e){return t.component&&t.renderComponent()},t.mountRoot=r?t.attachShadow({mode:"open"}):t,t.observer=new MutationObserver(function(e){return t.onAttributeChange(e)}),t.observer.observe(t,{attributes:!0}),t}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(CustomElement,e),o(CustomElement,[{key:"connectedCallback",value:function connectedCallback(){var t=this;if("function"==typeof this._connectedCallback&&this._connectedCallback(),this.vmContextElem=this.closest("d-vm-context"),!this.vmContextElem){var e=document.getElementsByTagName("d-modal");e.length>0&&(this.vmContextElem=e[0].closest("d-vm-context"))}this.vmContextElem&&(this.vmContext=this.vmContextElem.context,this.vmContextElem.addEventListener("onStateChange",this.onVMContextStateChange),this.vmContextElem.addEventListener("onLocalStateChange",this.onVMContextLocalStateChange)),this.formElem=this.closest("d-form"),this.formElem&&(this.vmContext=this.formElem.context.vmContext,this.formContext=this.formElem.context.formContext,this.formElem.addEventListener("onStateChange",this.onFormContextStateChange)),this.vmContextElem&&!this.vmContextElem.state||setTimeout(function(){return t.renderComponent()})}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.unmountComponent(),this.observer.disconnect(),this.vmContextElem&&(this.vmContextElem.removeEventListener("onStateChange",this.onVMContextStateChange),this.vmContextElem.removeEventListener("onLocalStateChange",this.onVMContextLocalStateChange)),this.formElem&&this.formElem.removeEventListener("onStateChange",this.onFormContextStateChange)}},{key:"getChildrenProp",value:function getChildrenProp(t){this.childrenHtml=this.childrenHtml||this.innerHTML;var e=t.parseHtmlToReact(this.childrenHtml);if(Array.isArray(e)&&(e=e.filter(function(t){return"string"!=typeof t||!!t.trim()})),this.childrenHtml)return{children:e}}},{key:"getTemplateProp",value:function getTemplateProp(){if(this.loadElementTemplate(),this.template)return{template:this.template}}},{key:"loadElementTemplate",value:function loadElementTemplate(){if("D-ELEMENT"===this.nodeName&&!this.template&&this.children.length>0){var t=this.cloneNode(!0);for(this.template=document.createElement("template");t.children.length;)this.template.content.appendChild(t.children[0])}}},{key:"mountComponent",value:function mountComponent(){var e=new i.default(this);this.props=n({},e.getProps(this.attributes,t.propTypes),e.getEvents(this.attributes,t.propTypes),{vmContext:this.vmContext,formContext:this.formContext});var r=e.getContainerParent();r&&"mounted"!==r.mountState||(Object.assign(this.props,this.getTemplateProp()||this.getChildrenProp(e)),this.mountState="mounting",this.component=ReactDOM.render(React.createElement(t,this.props),this.mountRoot),this.mountState="mounted",this.dispatchEvent(new CustomEvent("mounted")))}},{key:"unmountComponent",value:function unmountComponent(){this.component&&(ReactDOM.unmountComponentAtNode(this.mountRoot),this.component=null),this.mountState=null}},{key:"renderComponent",value:function renderComponent(t){if(this.component){if(this.vmContext&&null==t)return void("function"==typeof this.component.shouldComponentUpdate?this.component.shouldComponentUpdate({})&&this.component.forceUpdate():this.component.forceUpdate());if(t&&t.hasOwnProperty("value")&&"function"==typeof this.component.setControlledValue)return void this.component.setControlledValue(t.value);!1!==this.unmountOnRerender&&this.unmountComponent()}this.mountComponent()}}]),CustomElement}(HTMLElement);window.customElements.get(e)||window.customElements.define(e,s);return s};var i=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(r(26));r(25)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}();e.default=function createWebComponent(t,e){if(!window.hasOwnProperty("customElements"))return{prototype:{}};var r=function(e){function CustomElement(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,CustomElement);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(CustomElement.__proto__||Object.getPrototypeOf(CustomElement)).call(this));return t.onStateChange=function(e){var r=t.helper.parseFunctionString(t.getAttribute("onstatechange"));"function"==typeof r&&r(e),t.dispatchVMEvent("onStateChange",{detail:e})},t.onVMContextStateChange=function(e){return t.vmId&&!t.vm&&t.connect(t.vmId,t.getAttribute("options"))},t.store=new i.default(t),t.helper=new s.default(t),t}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(CustomElement,e),o(CustomElement,[{key:"context",get:function get(){return n({_type:"custom"},this.store.context)}}],[{key:"observedAttributes",get:function get(){return["vm","options"]}}]),o(CustomElement,[{key:"dispatchVMEvent",value:function dispatchVMEvent(t,e){this.dispatchEvent(new CustomEvent(t,e)),document.dispatchEvent(new CustomEvent(this.vmId+"_"+t,e))}},{key:"attributeChangedCallback",value:function attributeChangedCallback(){var t=this.getAttribute("vm");this.init&&t&&(this.vmId=t,this.disconnect(),this.connect(this.vmId,this.getAttribute("options")))}},{key:"connectedCallback",value:function connectedCallback(){this.vmContextElem=this.parentElement&&this.parentElement.closest("d-vm-context"),this.vmContextElem&&(this.vmContext=this.vmContextElem.context,this.vmContextElem.addEventListener("onStateChange",this.onVMContextStateChange));var t=this.helper.getContainerParent();t&&"mounting"!==t.mountState||(this.vmId=this.getAttribute("vm"),!this.vmId||this.vmContextElem&&!this.vmContextElem.state||this.connect(this.vmId,this.getAttribute("options")),this.init=!0)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.disconnect(),this.vmContextElem&&this.vmContextElem.removeEventListener("onStateChange",this.onVMContextStateChange)}},{key:"connect",value:function connect(e,r){var o=this,i=/{.*}/.exec(r)?JSON.parse(r):{};i.exceptionHandler||(i.exceptionHandler=function(t){return o.dispatchEvent(new CustomEvent("onException",{detail:t}))}),this.vm=this.store.connect(e,i,this.onStateChange),this.props=n({},this.helper.getProps(this.attributes,t.propTypes),this.helper.getEvents(this.attributes,t.propTypes))}},{key:"disconnect",value:function disconnect(){this.vm&&(this.store.destroy(),this.vm=null)}},{key:"setState",value:function setState(t){this.state=n({},this.state,t),this.dispatchEvent(new CustomEvent("onLocalStateChange",{detail:t}))}}]),CustomElement}(HTMLElement);window.customElements.get(e)||window.customElements.define(e,r)};var i=_interopRequireDefault(r(74)),s=_interopRequireDefault(r(26));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}r(25)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VMContext=e.Element=e.ContextTypes=void 0;var n=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(r(24)),o=r(23);e.ContextTypes=o.ContextTypes,e.Element=n.default,e.VMContext=o.VMContext},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createWebComponent=e.ContextTypes=e.VMContext=e.Element=e.dotnetify=void 0;var n=r(193),o=_interopRequireDefault(r(192)),i=_interopRequireDefault(r(76));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(0,i.default)(n.Element,"d-element"),(0,o.default)(n.VMContext,"d-vm-context"),e.default=n.VMContext,e.dotnetify=n.dotnetify,e.Element=n.Element,e.VMContext=n.VMContext,e.ContextTypes=n.ContextTypes,e.createWebComponent=i.default}])});

/***/ }),

/***/ "./node_modules/html-entities/lib/html4-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html4-entities.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'AElig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'OElig', 'oelig', 'Scaron', 'scaron', 'Yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'Dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'Prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'lArr', 'uArr', 'rArr', 'dArr', 'hArr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];
var alphaIndex = {};
var numIndex = {};
(function () {
    var i = 0;
    var length = HTML_ALPHA.length;
    while (i < length) {
        var a = HTML_ALPHA[i];
        var c = HTML_CODES[i];
        alphaIndex[a] = String.fromCharCode(c);
        numIndex[c] = a;
        i++;
    }
})();
var Html4Entities = /** @class */ (function () {
    function Html4Entities() {
    }
    Html4Entities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
            var chr;
            if (entity.charAt(0) === "#") {
                var code = entity.charAt(1).toLowerCase() === 'x' ?
                    parseInt(entity.substr(2), 16) :
                    parseInt(entity.substr(1));
                if (!isNaN(code) || code >= -32768) {
                    if (code <= 65535) {
                        chr = String.fromCharCode(code);
                    }
                    else {
                        chr = surrogate_pairs_1.fromCodePoint(code);
                    }
                }
            }
            else {
                chr = alphaIndex[entity];
            }
            return chr || s;
        });
    };
    Html4Entities.decode = function (str) {
        return new Html4Entities().decode(str);
    };
    Html4Entities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var alpha = numIndex[str.charCodeAt(i)];
            result += alpha ? "&" + alpha + ";" : str.charAt(i);
            i++;
        }
        return result;
    };
    Html4Entities.encode = function (str) {
        return new Html4Entities().encode(str);
    };
    Html4Entities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var cc = str.charCodeAt(i);
            var alpha = numIndex[cc];
            if (alpha) {
                result += "&" + alpha + ";";
            }
            else if (cc < 32 || cc > 126) {
                if (cc >= surrogate_pairs_1.highSurrogateFrom && cc <= surrogate_pairs_1.highSurrogateTo) {
                    result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                    i++;
                }
                else {
                    result += '&#' + cc + ';';
                }
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    Html4Entities.encodeNonUTF = function (str) {
        return new Html4Entities().encodeNonUTF(str);
    };
    Html4Entities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                i++;
            }
            else {
                result += '&#' + c + ';';
            }
            i++;
        }
        return result;
    };
    Html4Entities.encodeNonASCII = function (str) {
        return new Html4Entities().encodeNonASCII(str);
    };
    return Html4Entities;
}());
exports.Html4Entities = Html4Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/html5-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html5-entities.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['CloseCurlyDoubleQuote', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['CloseCurlyQuote', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];
var DECODE_ONLY_ENTITIES = [['NewLine', [10]]];
var alphaIndex = {};
var charIndex = {};
createIndexes(alphaIndex, charIndex);
var Html5Entities = /** @class */ (function () {
    function Html5Entities() {
    }
    Html5Entities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
            var chr;
            if (entity.charAt(0) === "#") {
                var code = entity.charAt(1) === 'x' ?
                    parseInt(entity.substr(2).toLowerCase(), 16) :
                    parseInt(entity.substr(1));
                if (!isNaN(code) || code >= -32768) {
                    if (code <= 65535) {
                        chr = String.fromCharCode(code);
                    }
                    else {
                        chr = surrogate_pairs_1.fromCodePoint(code);
                    }
                }
            }
            else {
                chr = alphaIndex[entity];
            }
            return chr || s;
        });
    };
    Html5Entities.decode = function (str) {
        return new Html5Entities().decode(str);
    };
    Html5Entities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var charInfo = charIndex[str.charCodeAt(i)];
            if (charInfo) {
                var alpha = charInfo[str.charCodeAt(i + 1)];
                if (alpha) {
                    i++;
                }
                else {
                    alpha = charInfo[''];
                }
                if (alpha) {
                    result += "&" + alpha + ";";
                    i++;
                    continue;
                }
            }
            result += str.charAt(i);
            i++;
        }
        return result;
    };
    Html5Entities.encode = function (str) {
        return new Html5Entities().encode(str);
    };
    Html5Entities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            var charInfo = charIndex[c];
            if (charInfo) {
                var alpha = charInfo[str.charCodeAt(i + 1)];
                if (alpha) {
                    i++;
                }
                else {
                    alpha = charInfo[''];
                }
                if (alpha) {
                    result += "&" + alpha + ";";
                    i++;
                    continue;
                }
            }
            if (c < 32 || c > 126) {
                if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                    result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                    i++;
                }
                else {
                    result += '&#' + c + ';';
                }
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    Html5Entities.encodeNonUTF = function (str) {
        return new Html5Entities().encodeNonUTF(str);
    };
    Html5Entities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                i += 2;
            }
            else {
                result += '&#' + c + ';';
                i++;
            }
        }
        return result;
    };
    Html5Entities.encodeNonASCII = function (str) {
        return new Html5Entities().encodeNonASCII(str);
    };
    return Html5Entities;
}());
exports.Html5Entities = Html5Entities;
function createIndexes(alphaIndex, charIndex) {
    var i = ENTITIES.length;
    while (i--) {
        var _a = ENTITIES[i], alpha = _a[0], _b = _a[1], chr = _b[0], chr2 = _b[1];
        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
        var charInfo = void 0;
        if (addChar) {
            charInfo = charIndex[chr] = charIndex[chr] || {};
        }
        if (chr2) {
            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
            addChar && (charInfo[chr2] = alpha);
        }
        else {
            alphaIndex[alpha] = String.fromCharCode(chr);
            addChar && (charInfo[''] = alpha);
        }
    }
    i = DECODE_ONLY_ENTITIES.length;
    while (i--) {
        var _c = DECODE_ONLY_ENTITIES[i], alpha = _c[0], _d = _c[1], chr = _d[0], chr2 = _d[1];
        alphaIndex[alpha] = String.fromCharCode(chr) + (chr2 ? String.fromCharCode(chr2) : '');
    }
}


/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xml_entities_1 = __webpack_require__(/*! ./xml-entities */ "./node_modules/html-entities/lib/xml-entities.js");
exports.XmlEntities = xml_entities_1.XmlEntities;
var html4_entities_1 = __webpack_require__(/*! ./html4-entities */ "./node_modules/html-entities/lib/html4-entities.js");
exports.Html4Entities = html4_entities_1.Html4Entities;
var html5_entities_1 = __webpack_require__(/*! ./html5-entities */ "./node_modules/html-entities/lib/html5-entities.js");
exports.Html5Entities = html5_entities_1.Html5Entities;
exports.AllHtmlEntities = html5_entities_1.Html5Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromCodePoint = String.fromCodePoint || function (astralCodePoint) {
    return String.fromCharCode(Math.floor((astralCodePoint - 0x10000) / 0x400) + 0xD800, (astralCodePoint - 0x10000) % 0x400 + 0xDC00);
};
exports.getCodePoint = String.prototype.codePointAt ?
    function (input, position) {
        return input.codePointAt(position);
    } :
    function (input, position) {
        return (input.charCodeAt(position) - 0xD800) * 0x400
            + input.charCodeAt(position + 1) - 0xDC00 + 0x10000;
    };
exports.highSurrogateFrom = 0xD800;
exports.highSurrogateTo = 0xDBFF;


/***/ }),

/***/ "./node_modules/html-entities/lib/xml-entities.js":
/*!********************************************************!*\
  !*** ./node_modules/html-entities/lib/xml-entities.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var ALPHA_INDEX = {
    '&lt': '<',
    '&gt': '>',
    '&quot': '"',
    '&apos': '\'',
    '&amp': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&'
};
var CHAR_INDEX = {
    60: 'lt',
    62: 'gt',
    34: 'quot',
    39: 'apos',
    38: 'amp'
};
var CHAR_S_INDEX = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;'
};
var XmlEntities = /** @class */ (function () {
    function XmlEntities() {
    }
    XmlEntities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/[<>"'&]/g, function (s) {
            return CHAR_S_INDEX[s];
        });
    };
    XmlEntities.encode = function (str) {
        return new XmlEntities().encode(str);
    };
    XmlEntities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&#?[0-9a-zA-Z]+;?/g, function (s) {
            if (s.charAt(1) === '#') {
                var code = s.charAt(2).toLowerCase() === 'x' ?
                    parseInt(s.substr(3), 16) :
                    parseInt(s.substr(2));
                if (!isNaN(code) || code >= -32768) {
                    if (code <= 65535) {
                        return String.fromCharCode(code);
                    }
                    else {
                        return surrogate_pairs_1.fromCodePoint(code);
                    }
                }
                return '';
            }
            return ALPHA_INDEX[s] || s;
        });
    };
    XmlEntities.decode = function (str) {
        return new XmlEntities().decode(str);
    };
    XmlEntities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            var alpha = CHAR_INDEX[c];
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
            if (c < 32 || c > 126) {
                if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                    result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                    i++;
                }
                else {
                    result += '&#' + c + ';';
                }
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    XmlEntities.encodeNonUTF = function (str) {
        return new XmlEntities().encodeNonUTF(str);
    };
    XmlEntities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                i++;
            }
            else {
                result += '&#' + c + ';';
            }
            i++;
        }
        return result;
    };
    XmlEntities.encodeNonASCII = function (str) {
        return new XmlEntities().encodeNonASCII(str);
    };
    return XmlEntities;
}());
exports.XmlEntities = XmlEntities;


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/ansi-regex/index.js")();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client-overlay.js":
/*!**************************************************!*\
  !*** (webpack)-hot-middleware/client-overlay.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*eslint-env browser*/

var clientOverlay = document.createElement('div');
clientOverlay.id = 'webpack-hot-middleware-clientOverlay';
var styles = {
  background: 'rgba(0,0,0,0.85)',
  color: '#E8E8E8',
  lineHeight: '1.2',
  whiteSpace: 'pre',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: '13px',
  position: 'fixed',
  zIndex: 9999,
  padding: '10px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  dir: 'ltr',
  textAlign: 'left'
};

var ansiHTML = __webpack_require__(/*! ansi-html */ "./node_modules/ansi-html/index.js");
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'E36049',
  green: 'B3CB74',
  yellow: 'FFD080',
  blue: '7CAFC2',
  magenta: '7FACCA',
  cyan: 'C3C2EF',
  lightgrey: 'EBE7E3',
  darkgrey: '6D7891'
};

var Entities = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js").AllHtmlEntities;
var entities = new Entities();

function showProblems(type, lines) {
  clientOverlay.innerHTML = '';
  lines.forEach(function(msg) {
    msg = ansiHTML(entities.encode(msg));
    var div = document.createElement('div');
    div.style.marginBottom = '26px';
    div.innerHTML = problemType(type) + ' in ' + msg;
    clientOverlay.appendChild(div);
  });
  if (document.body) {
    document.body.appendChild(clientOverlay);
  }
}

function clear() {
  if (document.body && clientOverlay.parentNode) {
    document.body.removeChild(clientOverlay);
  }
}

function problemType (type) {
  var problemColors = {
    errors: colors.red,
    warnings: colors.yellow
  };
  var color = problemColors[type] || colors.red;
  return (
    '<span style="background-color:#' + color + '; color:#fff; padding:2px 4px; border-radius: 2px">' +
      type.slice(0, -1).toUpperCase() +
    '</span>'
  );
}

module.exports = function(options) {
  for (var color in options.overlayColors) {
    if (color in colors) {
      colors[color] = options.overlayColors[color];
    }
    ansiHTML.setColors(colors);
  }

  for (var style in options.overlayStyles) {
    styles[style] = options.overlayStyles[style];
  }

  for (var key in styles) {
    clientOverlay.style[key] = styles[key];
  }

  return {
    showProblems: showProblems,
    clear: clear
  }
};

module.exports.clear = clear;
module.exports.showProblems = showProblems;


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client.js?reload=true&path=__webpack_hmr&dynamicPublicPath=true":
/*!************************************************************************************************!*\
  !*** (webpack)-hot-middleware/client.js?reload=true&path=__webpack_hmr&dynamicPublicPath=true ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/

var options = {
  path: "/__webpack_hmr",
  timeout: 20 * 1000,
  overlay: true,
  reload: false,
  log: true,
  warn: true,
  name: '',
  autoConnect: true,
  overlayStyles: {},
  overlayWarnings: false,
  ansiColors: {}
};
if (true) {
  var querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
  var overrides = querystring.parse(__resourceQuery.slice(1));
  setOverrides(overrides);
}

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn(
    "webpack-hot-middleware's client requires EventSource to work. " +
    "You should include a polyfill if you want to support this browser: " +
    "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools"
  );
} else {
  if (options.autoConnect) {
    connect();
  }
}

/* istanbul ignore next */
function setOptionsAndConnect(overrides) {
  setOverrides(overrides);
  connect();
}

function setOverrides(overrides) {
  if (overrides.autoConnect) options.autoConnect = overrides.autoConnect == 'true';
  if (overrides.path) options.path = overrides.path;
  if (overrides.timeout) options.timeout = overrides.timeout;
  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
  if (overrides.reload) options.reload = overrides.reload !== 'false';
  if (overrides.noInfo && overrides.noInfo !== 'false') {
    options.log = false;
  }
  if (overrides.name) {
    options.name = overrides.name;
  }
  if (overrides.quiet && overrides.quiet !== 'false') {
    options.log = false;
    options.warn = false;
  }

  if (overrides.dynamicPublicPath) {
    options.path = __webpack_require__.p + options.path;
  }

  if (overrides.ansiColors) options.ansiColors = JSON.parse(overrides.ansiColors);
  if (overrides.overlayStyles) options.overlayStyles = JSON.parse(overrides.overlayStyles);

  if (overrides.overlayWarnings) {
    options.overlayWarnings = overrides.overlayWarnings == 'true';
  }
}

function EventSourceWrapper() {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  init();
  var timer = setInterval(function() {
    if ((new Date() - lastActivity) > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log("[HMR] connected");
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    addMessageListener: function(fn) {
      listeners.push(fn);
    }
  };
}

function getEventSourceWrapper() {
  if (!window.__whmEventSourceWrapper) {
    window.__whmEventSourceWrapper = {};
  }
  if (!window.__whmEventSourceWrapper[options.path]) {
    // cache the wrapper for other entries loaded on
    // the same page with the same options.path
    window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();
  }
  return window.__whmEventSourceWrapper[options.path];
}

function connect() {
  getEventSourceWrapper().addMessageListener(handleMessage);

  function handleMessage(event) {
    if (event.data == "\uD83D\uDC93") {
      return;
    }
    try {
      processMessage(JSON.parse(event.data));
    } catch (ex) {
      if (options.warn) {
        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
      }
    }
  }
}

// the reporter needs to be a singleton on the page
// in case the client is being used by multiple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey = '__webpack_hot_middleware_reporter__';
var reporter;
if (typeof window !== 'undefined') {
  if (!window[singletonKey]) {
    window[singletonKey] = createReporter();
  }
  reporter = window[singletonKey];
}

function createReporter() {
  var strip = __webpack_require__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js");

  var overlay;
  if (typeof document !== 'undefined' && options.overlay) {
    overlay = __webpack_require__(/*! ./client-overlay */ "./node_modules/webpack-hot-middleware/client-overlay.js")({
      ansiColors: options.ansiColors,
      overlayStyles: options.overlayStyles
    });
  }

  var styles = {
    errors: "color: #ff0000;",
    warnings: "color: #999933;"
  };
  var previousProblems = null;
  function log(type, obj) {
    var newProblems = obj[type].map(function(msg) { return strip(msg); }).join('\n');
    if (previousProblems == newProblems) {
      return;
    } else {
      previousProblems = newProblems;
    }

    var style = styles[type];
    var name = obj.name ? "'" + obj.name + "' " : "";
    var title = "[HMR] bundle " + name + "has " + obj[type].length + " " + type;
    // NOTE: console.warn or console.error will print the stack trace
    // which isn't helpful here, so using console.log to escape it.
    if (console.group && console.groupEnd) {
      console.group("%c" + title, style);
      console.log("%c" + newProblems, style);
      console.groupEnd();
    } else {
      console.log(
        "%c" + title + "\n\t%c" + newProblems.replace(/\n/g, "\n\t"),
        style + "font-weight: bold;",
        style + "font-weight: normal;"
      );
    }
  }

  return {
    cleanProblemsCache: function () {
      previousProblems = null;
    },
    problems: function(type, obj) {
      if (options.warn) {
        log(type, obj);
      }
      if (overlay) {
        if (options.overlayWarnings || type === 'errors') {
          overlay.showProblems(type, obj[type]);
          return false;
        }
        overlay.clear();
      }
      return true;
    },
    success: function() {
      if (overlay) overlay.clear();
    },
    useCustomOverlay: function(customOverlay) {
      overlay = customOverlay;
    }
  };
}

var processUpdate = __webpack_require__(/*! ./process-update */ "./node_modules/webpack-hot-middleware/process-update.js");

var customHandler;
var subscribeAllHandler;
function processMessage(obj) {
  switch(obj.action) {
    case "building":
      if (options.log) {
        console.log(
          "[HMR] bundle " + (obj.name ? "'" + obj.name + "' " : "") +
          "rebuilding"
        );
      }
      break;
    case "built":
      if (options.log) {
        console.log(
          "[HMR] bundle " + (obj.name ? "'" + obj.name + "' " : "") +
          "rebuilt in " + obj.time + "ms"
        );
      }
      // fall through
    case "sync":
      if (obj.name && options.name && obj.name !== options.name) {
        return;
      }
      var applyUpdate = true;
      if (obj.errors.length > 0) {
        if (reporter) reporter.problems('errors', obj);
        applyUpdate = false;
      } else if (obj.warnings.length > 0) {
        if (reporter) {
          var overlayShown = reporter.problems('warnings', obj);
          applyUpdate = overlayShown;
        }
      } else {
        if (reporter) {
          reporter.cleanProblemsCache();
          reporter.success();
        }
      }
      if (applyUpdate) {
        processUpdate(obj.hash, obj.modules, options);
      }
      break;
    default:
      if (customHandler) {
        customHandler(obj);
      }
  }

  if (subscribeAllHandler) {
    subscribeAllHandler(obj);
  }
}

if (module) {
  module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    },
    setOptionsAndConnect: setOptionsAndConnect
  };
}

/* WEBPACK VAR INJECTION */}.call(this, "?reload=true&path=__webpack_hmr&dynamicPublicPath=true", __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack-hot-middleware/process-update.js":
/*!**************************************************!*\
  !*** (webpack)-hot-middleware/process-update.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */

/* global window __webpack_hash__ */

if (false) {}

var hmrDocsUrl = "https://webpack.js.org/concepts/hot-module-replacement/"; // eslint-disable-line max-len

var lastHash;
var failureStatuses = { abort: 1, fail: 1 };
var applyOptions = { 				
  ignoreUnaccepted: true,
  ignoreDeclined: true,
  ignoreErrored: true,
  onUnaccepted: function(data) {
    console.warn("Ignored an update to unaccepted module " + data.chain.join(" -> "));
  },
  onDeclined: function(data) {
    console.warn("Ignored an update to declined module " + data.chain.join(" -> "));
  },
  onErrored: function(data) {
    console.error(data.error);
    console.warn("Ignored an error while updating module " + data.moduleId + " (" + data.type + ")");
  } 
}

function upToDate(hash) {
  if (hash) lastHash = hash;
  return lastHash == __webpack_require__.h();
}

module.exports = function(hash, moduleMap, options) {
  var reload = options.reload;
  if (!upToDate(hash) && module.hot.status() == "idle") {
    if (options.log) console.log("[HMR] Checking for updates on the server...");
    check();
  }

  function check() {
    var cb = function(err, updatedModules) {
      if (err) return handleError(err);

      if(!updatedModules) {
        if (options.warn) {
          console.warn("[HMR] Cannot find update (Full reload needed)");
          console.warn("[HMR] (Probably because of restarting the server)");
        }
        performReload();
        return null;
      }

      var applyCallback = function(applyErr, renewedModules) {
        if (applyErr) return handleError(applyErr);

        if (!upToDate()) check();

        logUpdates(updatedModules, renewedModules);
      };

      var applyResult = module.hot.apply(applyOptions, applyCallback);
      // webpack 2 promise
      if (applyResult && applyResult.then) {
        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
        applyResult.then(function(outdatedModules) {
          applyCallback(null, outdatedModules);
        });
        applyResult.catch(applyCallback);
      }

    };

    var result = module.hot.check(false, cb);
    // webpack 2 promise
    if (result && result.then) {
        result.then(function(updatedModules) {
            cb(null, updatedModules);
        });
        result.catch(cb);
    }
  }

  function logUpdates(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function(moduleId) {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    if(unacceptedModules.length > 0) {
      if (options.warn) {
        console.warn(
          "[HMR] The following modules couldn't be hot updated: " +
          "(Full reload needed)\n" +
          "This is usually because the modules which have changed " +
          "(and their parents) do not know how to hot reload themselves. " +
          "See " + hmrDocsUrl + " for more details."
        );
        unacceptedModules.forEach(function(moduleId) {
          console.warn("[HMR]  - " + moduleMap[moduleId]);
        });
      }
      performReload();
      return;
    }

    if (options.log) {
      if(!renewedModules || renewedModules.length === 0) {
        console.log("[HMR] Nothing hot updated.");
      } else {
        console.log("[HMR] Updated modules:");
        renewedModules.forEach(function(moduleId) {
          console.log("[HMR]  - " + moduleMap[moduleId]);
        });
      }

      if (upToDate()) {
        console.log("[HMR] App is up to date.");
      }
    }
  }

  function handleError(err) {
    if (module.hot.status() in failureStatuses) {
      if (options.warn) {
        console.warn("[HMR] Cannot check for update (Full reload needed)");
        console.warn("[HMR] " + err.stack || err.message);
      }
      performReload();
      return;
    }
    if (options.warn) {
      console.warn("[HMR] Update check failed: " + err.stack || err.message);
    }
  }

  function performReload() {
    if (reload) {
      if (options.warn) console.warn("[HMR] Reloading page");
      window.location.reload();
    }
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 0:
/*!*******************************************************************************************************************!*\
  !*** multi webpack-hot-middleware/client?reload=true&path=__webpack_hmr&dynamicPublicPath=true ./client/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! webpack-hot-middleware/client?reload=true&path=__webpack_hmr&dynamicPublicPath=true */"./node_modules/webpack-hot-middleware/client.js?reload=true&path=__webpack_hmr&dynamicPublicPath=true");
module.exports = __webpack_require__(/*! ./client/index.js */"./client/index.js");


/***/ }),

/***/ "dotnetify":
/*!****************************!*\
  !*** external "dotnetify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dotnetify__;

/***/ }),

/***/ "dotnetify-elements":
/*!************************************!*\
  !*** external "dotNetifyElements" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dotnetify_elements__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "styled-components":
/*!*************************!*\
  !*** external "styled" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ });
});
//# sourceMappingURL=app.js.map