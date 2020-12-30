const conversion = (musicinfos) => {
  let splitStr = musicinfos.map(el => el.split(","));
  let runNotes = {};
  
  for (let music of splitStr) {
    let runtimes = (music[1].split(":")[1] - music[0].split(":")[1]);
    let notes = music[3];
    
    if (notes.length >= runtimes) {
      runNotes[music[2]] = notes.slice(0, runtimes);
    } else {
      if (runtimes%(notes.length) === 0) {
        let cycles = runtimes/(notes.length);
        let str = "";
        for (let i = 0; i < cycles-1; i++) {
          notes += notes;
        }
        runNotes[music[2]] = notes;
      } else {
        let cycles = Math.ceil(runtimes/(notes.length));
        let restNotes = runtimes%(notes.length);
          for (let i = 0; i < cycles-1; i++) {
          notes += notes;
        }
        notes += notes.slice(0, restNotes);
        runNotes[music[2]] = notes;
      }
    }
  }
  return runNotes;
}

const solution = (m, musicinfos) => {
  let convNotes = conversion(musicinfos);
  let booleanArr = Object.entries(convNotes).map(el => el[1].includes(m));
  for (let j = 0; j < booleanArr.length; j++) {
    if (booleanArr[j]) return Object.keys(convNotes)[j];
  }
}