import {defineStore} from "pinia";
import axios from "axios";


export const useDocumentStore = defineStore('document', {
    state: () => ({
        listDocuments: [],
        loading: true,
        selectedDocument: null  // selected document
    }),
    getters: {},
    actions: {
       /**
        * Get list of documents
        * @param search - search string
        * **/
        async getListDocuments(search) {
            this.loading = true
            await axios.get('/user/docs', {
                params: {
                    search: search
                }
            }).then((response) => {
                this.listDocuments = response?.data || []
            }).catch((error) => {
              alert(error)
            }).finally(() => {
                this.loading = false
            })
        },
        /**
         * Get document by id
         * @param id
         * @returns {Promise<axios.AxiosResponse<any>>}
         */
        getDocumentById(id) {
            this.selectedDocument = this.listDocuments.find((document) => document.id === id)
        },

    }
})
