import axios from 'axios';

const KEY = 'AIzaSyBll748D41ScuBRfElqPDCN6r8qYWGoF5s';

export default axios.create({
   baseURL:'https://www.googleapis.com/youtube/v3',
   params:{
       part:'snippet',
       type:'video',
       maxResult:5,
       key:KEY
   }
})