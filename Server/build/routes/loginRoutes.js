"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
// Middleware functions should never return anything, therefore we can't say return next(), need to write it as below
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Not permitted");
}
var router = express_1.Router();
exports.router = router;
router.get("/protected", requireAuth, function (req, res) {
    res.send("Welcome to protected route logged in user");
});
