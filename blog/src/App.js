import React, {useState} from "react";
import "./App.css";

function App() {
  let [글제목,글제목변경] = useState(['남자 코트 추천','조던1 컬러추천','덩크로우1 코디']);
  let [따봉,따봉변경] = useState(0);
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천'
    글제목변경(newArray);
  }
  function 글자순정렬(){
    var newArray1 = [...글제목];
    newArray1.sort();
    글제목변경(newArray1)
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3> {글제목[0]} <span onClick={()=>따봉변경(따봉+1)}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <button onClick={ 제목바꾸기 }>여자코트보기</button>
        <button onClick={ 글자순정렬 }>정렬</button>
        <hr/>
        <h3> {글제목[1]} </h3>
        <p>2월 18일 발행</p>
        <hr/>
        <h3> {글제목[2]} </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
      <Modal />


    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );

}
export default App;