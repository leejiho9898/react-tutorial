import React, {useState} from "react";
import "./App.css";

function App() {
  let [글제목,글제목변경] = useState(['남자 코트 추천','조던1 컬러추천','덩크로우1 코디']);
  let [따봉,따봉변경] = useState(0);

  let [modal,modal변경] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3> {글제목[0]} <span onClick={()=>따봉변경(따봉+1)}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> {글제목[1]} </h3>
        <p>2월 18일 발행</p>
        <hr/>
        <h3> {글제목[2]} </h3>
        <p>2월 19일 발행</p>
        <hr/>
        <button onClick={()=> modal변경(!modal)}>버튼</button>
        {
        modal == true
        ? <Modal 글제묵={글제목}/>
        : null
        }
      </div>
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h2>제목 : {props.글제묵[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );

}
export default App;