import axios from 'axios'

export default axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1'
})