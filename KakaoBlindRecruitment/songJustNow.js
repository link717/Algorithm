// Question
// 방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.
// 네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.
// 각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다.
// 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
// 음악이 00:00를 넘겨서까지 재생되는 일은 없다.
// 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
// 조건이 일치하는 음악이 없을 때에는 "(None)" 을 반환한다.



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
      stack.push([title, _notes.slice(0, timeDiff)]);
    } else {
      let cycles = Math.floor(timeDiff/_notes.length);
      let restNotes = timeDiff%_notes.length;
      stack.push([title, _notes.repeat(cycles) + _notes.slice(0, restNotes)])
    }
  }
  
  // stack에 담긴 노래 중 조건부 음악 출력
  let filteredMusics = stack.filter(el => el[1].includes(_m));
  if (filteredMusics.length === 0) {
    return "(None)";
  } else if (filteredMusics.length === 1) {
    return filteredMusics[0][0];
  } else {
    let maxTime = 0;
    let answer = "";
    for (let i = 0; i < filteredMusics.length; i++) {
      if (filteredMusics[i][1].length > maxTime) {
        maxTime = filteredMusics[i][1].length;
        answer = filteredMusics[i][0];
      }  
    }
    return answer;
  }
}