const express = require("express");
const path = require("path");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.use(express.json());
var cors = require('cors');
app.use(cors());



// 아래 코드가 있어야 특정 폴더의 파일들 전송가능
app.use(express.static(path.join(__dirname, 'react-project2/build')));

// 메인페이지로 보내졌을때 '리액트로~경로'파일 보여주세요
app.get('/', function(요청, 응답){
  응답.sendFile(path.join(__dirname, '/react-project2/build/index.html'))
})

app.get('/product', function(요청, 응답){
  응답.json({name : 'pink cup'})
})

app.get('*', function(요청, 응답){
  응답.sendFile(path.join(__dirname, 'react-project2/build/index.html'))
})


