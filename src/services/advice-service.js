const adviceService = () => {
    return {
        getRandomAdvice: async() => {
            return new Promise(async (resolve, reject) => {
                await fetch('https://api.adviceslip.com/advice').then(async (response)=> {
                    response.json().then((advice) => {
                        resolve(advice)
                    })
                }).catch((err) => {
                    reject(err)
                });
            });
        }   
    }
}

export default adviceService;