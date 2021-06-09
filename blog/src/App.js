import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "조던1 컬러추천",
    "덩크로우1 코디"
  ]);
  let [따봉, 따봉변경] = useState(0,0,0);
  let [modal, modal변경] = useState(false);
  let [누른제목,누른제목변경] = useState(0);
  let [입력값,입력값변경] = useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {
        글제목.map(function(a,index){
          return( 
          <div className="list" key={index}>
          <h3 onClick={()=>{누른제목변경(index)}}> {a} <span onClick={() => 따봉변경(따봉 + 1)} >👍</span>{따봉}</h3>
          <p>2월 19일 발행</p>
          <hr />
          </div>
          )
        })
      }
        <div className="publish">
          <input onChange={ (e)=>{ 입력값변경(e.target.value) }} />
          <button onClick={()=>{
            var arrayCopy =[...글제목];
            arrayCopy.unshift(입력값);
            글제목변경(arrayCopy);
          }}>저장</button>
        </div>


        <button onClick={ ()=> modal변경(!modal)}>열고닫기</button>
        {modal === true ? <Modal 글제묵={글제목} 누른제묵={누른제목}/> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 : {props.글제묵[props.누른제묵]}</h2>
      <p>날짜 : </p>
      <p>상세내용 : </p>
    </div>
  );
}
export default App;
