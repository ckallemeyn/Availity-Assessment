const fs = require('fs');
const promise = require('bluebird');
promise.promisifyAll(fs);

const sortJSON = (jsonArr) => {
  let currRecords = [];
  let sortedJSON, el, nextEl, currVersion;

  for (var i = 0; i < jsonArr.length; i++) {
    if (i !== jsonArr.length - 1) {
      el = jsonArr[i];
      nextEl = jsonArr[i + 1];
      currVersion;

      if (el.UserId === nextEl.UserId) {
        currVersion = (el.Version >= nextEl.Version) ? el : nextEl;
        currRecords.push(currVersion);
      }
    }
  }

  jsonArr.forEach((el, i ) => {
    if (el.UserId === currRecords[0]['UserId'] || el.UserId === currRecords[1]['UserId']) {
      return;
    }
    currRecords.push(el);
  });

  sortedJSON = currRecords.sort((a,b) => a.Last.localeCompare(b.Last));

  return sortedJSON;
}


const csvToJSON = (csv) => {
  let data = csv.trim().split('\n');
  let jsonArr = [];
  let headings = data[0].split(',');

  for (var i = 1; i < data.length; i++) {
    let obj = {};
    let lines = data[i].split(',');
    lines.forEach((el, j) => {
      if (headings[j] === 'Version') {
        el = parseInt(el, 10)
      }
      obj[headings[j]] = el;
    });
    jsonArr.push(obj);
  }
  return jsonArr.sort((a,b) => a.Last.localeCompare(b.Last));
}

const csvConverter = () => {
  return fs.readFileAsync('example.csv','utf8')
    .then((csv) => {
      let jsonArr = csvToJSON(csv);
      let JSONRecords = sortJSON(jsonArr);
      return fs.writeFileAsync('newJSON.json', JSON.stringify(JSONRecords, null, 2))
        .then((results) => {
          console.log('success! file written', results);
        })
        .catch((error) => console.error('unable to write file', error));
    })
    .catch((err) => {
      console.error('unable to find csv file', err);
    })
}



csvConverter();
