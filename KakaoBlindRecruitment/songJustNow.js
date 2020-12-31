// sharp 변환
const changeSharp = (str) => {
  let _str = str.replace(/C#/g, "c").replace(/D#/g, "d").replace(/F#/g, "f").replace(/G#/g, "g").replace(/A#/g, "a")
  return _str;
}

// 시간 계산
const conversionTime = (start, end) => {
  return ((parseInt(end.substring(0,2)) - parseInt(start.substring(0,2))) * 60 + 
  (parseInt(end.substring(3)) - parseInt(start.substring(3))))  
}


const solution = (m, musicinfos) => {
  let _m = changeSharp(m);
  let stack = [];
  
  // 재생시간에 따른 제목, 음계 정보
  for (let music of musicinfos) {
    let [start, end, title, notes] = music.split(",");
    let timeDiff = conversionTime(start, end);
    let _notes = changeSharp(notes);
    if (timeDiff <= _notes.length) {
      stack.push([title, _notes.slice(0, _m.length)]);
    } else {
      let cycles = Math.floor(timeDiff/_notes.length);
      let restNotes = timeDiff%_notes.length;
      stack.push([title, _notes.repeat(cycles) + _notes.slice(0, restNotes)])
    }
  }
  
  // stack에 담긴 노래 중 조건부 음악 출력

  stack.map(el => console.log(el[1]));
}