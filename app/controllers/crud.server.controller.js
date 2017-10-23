// 자바스크립트 '엄격 모드' 적용
'use strict';


// 사용할 모듈을 로드한다.
var Crud = require('../models/crud.server.model');


// 게시판의 list를 처리한다.
exports.list = function(req, res, next) {
	var select = { crud_subject: 1, crud_writer: 1 };
	var where = {};
	
	// find method를 이용해 리스트 데이터를 받아온다.
	Crud.find(where, select).exec(function(err, result) {
		if (err) {
			err.status = 500;
			next(err);
		} else {
			res.jsonp({result: result});
		}
	});
};

// 게시판 추가를 처리한다.
exports.add = function(req, res, next) {
	var crud = new Crud();
	crud.crud_writer = req.body.crud_writer;
	crud.crud_subject = req.body.crud_subject;
	crud.crud_contents = req.body.crud_contents;

	// save method를 이용해 게시물을 DB에 추가한다.
	crud.save(function(err, result) {
		if (err) {
			err.status = 500;
			next(err);
		} else {
			res.jsonp({result: 'success'});
		}
	});
};

// 게시판의 view를 처리한다.
exports.get = function(req, res, next) {
	// findById method를 이용해 특정 id값에 맞는 데이터를 받아온다.
	Crud.findById(req.params.crud_id).exec(function(err, result) {
		if (err) {
			err.status = 500;
			next(err);
		} else {
			res.jsonp(result);
		}
	});
};

// 게시판의 수정 부분을 처리한다.
exports.update = function(req, res, next) {
	// findByIdAndUpdate method를 이용해 특정 id값의 데이터를 수정한다.
	Crud.findByIdAndUpdate(req.params.crud_id,
 	{ crud_subject: req.body.crud_subject, crud_writer: req.body.crud_writer, crud_contents: req.body.crud_contents }, function(err, updateResult) {
 		if(err){
			err.status = 500;
			next(err);
     	} else {
			res.jsonp({result: 'success'});
     	}
 	});
};

// 게시판의 삭제 부분을 처리한다.
exports.delete = function(req, res, next) {
	// findByIdAndRemove method를 이용해 특정 id값의 데이터를 삭제한다.
	Crud.findByIdAndRemove(req.params.crud_id, function(err,deleteResult) {
 		if(err){
			err.status = 500;
			next(err);
     	} else {
			res.jsonp({result: 'success'});
     	}
 	});
};
