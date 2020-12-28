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
var Game = require('../../../model/game/Game');
var Player = require('../../../model/game/Player');
var GameSchema = require('../../../model/Game');
var User = require('../../../model/User');
var games = [];
module.exports = function (io) {
    var _this = this;
    console.log('running');
    io.of('/games/socket').on('connection', function (socket) {
        console.log('hey');
        socket.on('initalize_game', function (game_data) { return __awaiter(_this, void 0, void 0, function () {
            var player_id, game_id, user, game_from_database, game, game_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('game init');
                        player_id = game_data.player_id, game_id = game_data.game_id;
                        return [4 /*yield*/, User.findOne({ _id: player_id })
                            //Check database for game
                        ];
                    case 1:
                        user = _a.sent();
                        game_from_database = GameSchema.findOne({ _id: game_id });
                        return [4 /*yield*/, games.find(function (g) {
                                return g.id === game_id;
                            })];
                    case 2:
                        game = _a.sent();
                        if (!game) return [3 /*break*/, 3];
                        socket.emit('declined', "this game already exists");
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, new Game(game_id)];
                    case 4:
                        game_1 = _a.sent();
                        games.push(game_1);
                        console.log('addin game');
                        game_1.addPlayer(new Player(player_id, user.name));
                        socket.join(game_id);
                        return [2 /*return*/, socket.emit("success", "game is created")];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        socket.on('join_game', function (request_data) { return __awaiter(_this, void 0, void 0, function () {
            var player_id, game_id, user, game, gameFull, containsPlayer, team1, team2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        player_id = request_data.player_id, game_id = request_data.game_id;
                        return [4 /*yield*/, User.findOne({ _id: player_id })
                            //Check database for game
                        ];
                    case 1:
                        user = _a.sent();
                        //Check database for game
                        console.log(games);
                        return [4 /*yield*/, games.find(function (g) {
                                return g.id === game_id;
                            })];
                    case 2:
                        game = _a.sent();
                        if (!game) {
                            console.log('no such game');
                            return [2 /*return*/, socket.emit("declined", "no such game")];
                        }
                        gameFull = game.players.length === game.numberOfPlayers;
                        if (gameFull) {
                            console.log('game full');
                            return [2 /*return*/, socket.emit("declined", "this room is full")];
                        }
                        return [4 /*yield*/, game.players.find(function (p) { return p.id === player_id; })];
                    case 3:
                        containsPlayer = _a.sent();
                        console.log(containsPlayer);
                        if (!containsPlayer) return [3 /*break*/, 4];
                        console.log('rejected');
                        return [2 /*return*/, socket.emit("declined", "this player is already in the game")];
                    case 4: return [4 /*yield*/, game.addPlayer(new Player(player_id, user.name))];
                    case 5:
                        _a.sent();
                        socket.join(game_id);
                        console.log('new player joined');
                        io.of('games/socket').to(game_id).emit("new_player", { playerName: user.name });
                        if (game.players.length === game.numberOfPlayers) {
                            game.formTeams();
                            console.log('game');
                            team1 = game.team1.map(function (player) {
                                return player.name;
                            });
                            team2 = game.team2.map(function (player) {
                                return player.name;
                            });
                            console.log(team1);
                            console.log(team2);
                            game.deal(5);
                            io.of('games/socket').in(game_id).emit("game_ready", { team1: team1, team2: team2 });
                        }
                        return [2 /*return*/, socket.emit("success", "you were added to the game")];
                }
            });
        }); });
        socket.on('get_cards', function (request_data) { return __awaiter(_this, void 0, void 0, function () {
            var player_id, game_id, game, player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        player_id = request_data.player_id, game_id = request_data.game_id;
                        return [4 /*yield*/, games.find(function (g) {
                                return g.id === game_id;
                            })];
                    case 1:
                        game = _a.sent();
                        return [4 /*yield*/, game.players.find(function (player) {
                                return player.id === player_id;
                            })];
                    case 2:
                        player = _a.sent();
                        socket.emit("cards", { "hand": player.hand });
                        if (player_id === game.currentBidder.id) {
                            return [2 /*return*/, socket.emit('bid_request')];
                        }
                        else {
                            return [2 /*return*/, socket.emit('not_your_turn')];
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on('bid_submit', function (request_data) { return __awaiter(_this, void 0, void 0, function () {
            var player_id, game_id, bid, game, player, bidWinner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        player_id = request_data.player_id, game_id = request_data.game_id, bid = request_data.bid;
                        return [4 /*yield*/, games.find(function (g) {
                                return g.id === game_id;
                            })];
                    case 1:
                        game = _a.sent();
                        return [4 /*yield*/, game.players.find(function (player) {
                                return player.id === player_id;
                            })];
                    case 2:
                        player = _a.sent();
                        bidWinner = game.submitBid(player.id, +bid);
                        if (bidWinner) {
                            console.log(bidWinner);
                            console.log('has won');
                        }
                        if (!game.bidFinished) {
                            socket.to(game_id).emit("bid", { bid: game.currentBid, player: player.name, nextBidder: game.currentBidder.id });
                        }
                        else {
                            socket.to(game_id).emit("bid_completed", { id: bidWinner.id });
                        }
                        return [2 /*return*/, socket.emit('bid_submitted')];
                }
            });
        }); });
        socket.on('get_kitty', function (request_data) { return __awaiter(_this, void 0, void 0, function () {
            var player_id, game_id, game, player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        player_id = request_data.player_id, game_id = request_data.game_id;
                        return [4 /*yield*/, games.find(function (g) {
                                return g.id === game_id;
                            })];
                    case 1:
                        game = _a.sent();
                        return [4 /*yield*/, game.players.find(function (p) {
                                return p.id === player_id;
                            })];
                    case 2:
                        player = _a.sent();
                        if (game.bidWinner.id === player.id) {
                            console.log('sending kitty');
                            socket.emit('kitty', { cards: game.kitty });
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on('decide_trump', function (request_data) { return __awaiter(_this, void 0, void 0, function () {
            var player_id, game_id, trump_color, game, player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        player_id = request_data.player_id, game_id = request_data.game_id, trump_color = request_data.trump_color;
                        return [4 /*yield*/, games.find(function (g) {
                                return g.id === game_id;
                            })];
                    case 1:
                        game = _a.sent();
                        return [4 /*yield*/, game.players.find(function (p) {
                                return p.id === player_id;
                            })];
                    case 2:
                        player = _a.sent();
                        if (player_id === game.bidWinner.id) {
                            //game.decideTrump(trump_color)
                            socket.emit('please_lead');
                            //game.beginTrick(player)
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    });
};
