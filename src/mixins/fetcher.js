export default {
    data() {
        return {
            BASE_API: 'https://api.nasa.gov/planetary/apod?api_key=***********',
        };
    },
    methods:{
        $_getData: async function(apicall) {
            let payload = {};
            try {
                let response = await fetch(`${this.BASE_API}${apicall}`, {
                    method: "GET",
                });
                payload = await response.json();
            } catch (err) {
                payload = err;
            }
            return payload;
        },
    }
}
