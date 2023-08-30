import {defineStore} from "pinia";
import axios from "axios";


export const useDocumentStore = defineStore('document', {
    state: () => ({
        listDocuments: [],
        loading: true, // if the documents are not loaded, the loader starts
        selectedDocument: null, // selected document
        error: null // error message
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
            }).catch(() => {
                this.error = 'Ошибка получения списка документов'
                setTimeout(() => {
                    this.error = null
                }, 3000)

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
