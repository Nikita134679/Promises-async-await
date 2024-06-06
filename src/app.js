export default class GameSavingLoader {
    static load() {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', 'saving.json', true);
        request.onload = () => {
          if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.responseText);
            resolve(data);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.onerror = () => {
          reject(Error('Network Error'));
        };
        request.send();
      });
    }
}

GameSavingLoader.load().then((saving) => {
    console.log(saving);
 }, (error) => {
    console.log(error);
});