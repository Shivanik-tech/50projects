const jokeSh = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()
//USING THEN 
    // function generateJoke() {
    //     const config = {
    //       headers: {
    //         Accept: 'application/json',
    //       },
    //     }
      
    //     fetch('https://icanhazdadjoke.com', config)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         jokeSH.innerHTML = data.joke
    //       })
    //   }
// USING ASYNC
function generateJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
  
    fetch('https://icanhazdadjoke.com', config)
      .then((res) => res.json())
      .then((data) => {
        jokeSh.innerHTML = data.joke
      })
  }


