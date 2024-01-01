import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://104.167.11.190:30000/',
    headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'example.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MmI5NzBjOWUwNTZiOTFhMDRlM2VmMzciLCJpcHYiOnRydWUsImlhdCI6MTY2MjU1NjMzMn0.YyQBRlxlgO9cAhgskdI53PpKinAaCzNFb2RoMTpGStU',
    },
});

export default  {

    getAllPostsData: () =>
        instance({
            'method': 'GET',
            'url': 'chats/?offset=0&limit=20', //+ global.appLanguage + '&user_id=' + global.userId,
            'params': {
                
            },
            transformResponse: [function (data) {
                const json = JSON.parse(data)
                return json;
            }],
        }),
          
}

      //MARK:-  ======= POST API CALL ========
    //   return fetch('http://104.167.11.190:30000/auth/token' , {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       // "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MmI5NzBjOWUwNTZiOTFhMDRlM2VmMzciLCJpcHYiOnRydWUsImlhdCI6MTY2MjU1NjMzMn0.YyQBRlxlgO9cAhgskdI53PpKinAaCzNFb2RoMTpGStU"
    //     },
    //     body: JSON.stringify ({
    //       "email": "testn4@yopmail.com",
    //       "password": "1234567890",
    //       "device_token": "string"
    //     }),
    //   })
    //   .then ( (response) => response.json () )
    //   .then ( (responseJson) => {
    //     this.setState({
    //       isLoading: false,
    //       dataSource: responseJson,
    //     })
    //   })

    //   .catch( (error) => {
    //     console.log(error)
    //   })







    // return fetch('http://104.167.11.190:30000/chats/?offset=0&limit=20' , {
    //       method: 'GET',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //         "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MmI5NzBjOWUwNTZiOTFhMDRlM2VmMzciLCJpcHYiOnRydWUsImlhdCI6MTY2MjU1NjMzMn0.YyQBRlxlgO9cAhgskdI53PpKinAaCzNFb2RoMTpGStU"
    //       },
    //     })
    //     .then ( (response) => response.json () )
    //     .then ( (responseJson) => {
    //       this.setState({
    //         isLoading: false,
    //         dataSource: responseJson,
    //       })
    //     })
  
    //     .catch( (error) => {
    //       console.log(error)
    //     })









      // try {
      //   let response = await api.getAllPostsData();
      //   this.setState({
      //     isLoading: false,
      //     dataSource: response,
      //   })
      // } catch (error) {
      //   console.warn(error);
      //   // throw error;
      // } finally {
      //   this.setState({ isLoading: false });
      // }