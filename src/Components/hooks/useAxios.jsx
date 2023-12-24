import axios from 'axios';

const axiosPublic = axios.create({
 baseURL:'https://task-manager-server-site-eok54iegp-jubayer-ahmed-sajid.vercel.app'
})
const useAxios = () => {
    return axiosPublic
};

export default useAxios;