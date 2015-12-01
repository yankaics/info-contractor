/* 
 * @Author: boxizen
 * @Date:   2015-11-25 10:58:12
 * @Last Modified by:   boxizen
 * @Last Modified time: 2015-12-01 13:54:44
 */

'use strict';

var Clue = require('../../components/clue/clue');

// 添加线索
function onCreate(req, res) {
    var object = {
        url: req.body.url,
        domain: req.body.domain,
        tag: req.body.tag,
        ip: req.body.ip,
        data: req.body.data,
        eid: req.body.eid,
        weight: req.body.weight
    }
    Clue.create(object, function(err, result) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    });
}

// 检索对象
function onGet(req, res) {
    var id = req.query.id;
    Clue.search(id, function(err, result) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    });
}

// 批量获取对象
function onGetList(req, res) {
    var options = {
        num: 1
    }
    Clue.fetch(options, function(err, result) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    });
}

module.exports = [
    ['put', '/clue/onCreate', onCreate],
    ['get', '/clue/onGet', onGet],
    ['get', '/clue/onGetList', onGetList]
];