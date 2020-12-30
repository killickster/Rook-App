"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var io = require('socket.io-client');
var PORT = 6000;
bid = 80;
socketFactory = function (io, name, timeout) { return __awaiter(void 0, void 0, void 0, function () {
    var socket;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(name + " joining game");
                return [4 /*yield*/, io.connect("http://localhost:" + PORT + '/games/socket')];
            case 1:
                socket = _a.sent();
                socket.on('connected', function () {
                    console.log('socket is connected');
                    socket.emit('join_game', { player_id: name, game_id: "rook_game" });
                });
                socket.on('success', function (msg) {
                    console.log(msg);
                });
                socket.on('new_player', function (msg) {
                    console.log(msg);
                });
                socket.on('declined', function (msg) {
                    console.log(msg);
                });
                socket.on('game_ready', function (msg) {
                    setTimeout(function () {
                        socket.emit('get_cards', { player_id: name, game_id: 'rook_game' }, function (msg) {
                        }, timeout);
                    });
                });
                socket.on('cards', function (cards) {
                    console.log(cards);
                    setTimeout(function () {
                        socket.emit('check_turn', { player_id: name, game_id: 'rook_game' }, function (msg) {
                            console.log(msg);
                        });
                    }, timeout);
                });
                socket.on('bid_request', function () {
                    console.log('bidding ' + name);
                    socket.emit('bid_submit', { player_id: name, game_id: 'rook_game', bid: bid += 5 });
                });
                socket.on('bid', function (bid) {
                    console.log(bid);
                    if (name === bid.player) {
                        console.log('wierd');
                    }
                    socket.emit('check_turn', { player_id: name, game_id: 'rook_game' }, function (msg) {
                        console.log(msg);
                    });
                });
                socket.on('');
                return [2 /*return*/, socket];
        }
    });
}); };
names = ['loins', 'johnson', 'dick', 'yenis', 'genis', 'dick ho'];
sockets = [];
timeouts = [1000, 2000, 3000, 4000, 5000];
var socket = io.connect("http://localhost:" + PORT + '/games/socket');
socket.on('connected', function () {
    console.log('socket is connected');
    socket.emit('initalize_game', { player_id: 'nathan', game_id: "rook_game" });
});
socket.on('success', function (msg) {
    console.log(msg);
});
socket.on('new_player', function (msg) {
    console.log(msg);
});
socket.on('declined', function (msg) {
    console.log(msg);
});
socket.on('game_ready', function (msg) {
    console.log(msg);
    socket.emit('get_cards', { player_id: 'nathan', game_id: 'rook_game' }, function (msg) {
        console.log(msg);
    });
});
socket.on('cards', function (cards) {
    console.log(cards);
    setTimeout(function () {
        socket.emit('check_turn', { player_id: 'nathan', game_id: 'rook_game' }, function (msg) {
            console.log(msg);
        });
    }, 1000);
});
socket.on('bid_request', function () {
    console.log('bidding ' + 'nathan');
    setTimeout(function () {
        socket.emit('bid_submit', { player_id: 'nathan', game_id: 'rook_game', bid: bid += 5 });
    }, 2000);
});
socket.on('bid', function (bid) {
    console.log(bid);
    setTimeout(function () {
        socket.emit('check_turn', { player_id: 'nathan', game_id: 'rook_game' }, function (msg) {
            console.log(msg);
        });
    }, 5000);
});
var i = 0;
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name = names_1[_i];
    sockets.push(socketFactory(io, name, timeouts[i]));
    i++;
    if (i >= timeouts.length) {
        i = 0;
    }
}
