<script setup>
import DocumentPreviewPage from "@/components/DocumentPreviewPage.vue";
import ListOfDocuments from "@/components/ListOfDocuments.vue";
import BasicAlert from "@/components/BasicAlert.vue";
import {useDocumentStore} from "@/stores/documents";

const documentStore = useDocumentStore();
</script>

<template>
<div class="document-page">
  <ListOfDocuments class="document-page__list"/>
  <DocumentPreviewPage class="document-page__preview"/>
  <BasicAlert v-if="documentStore.error"/>
</div>
</template>

<style scoped lang="scss">
.document-page{
  width: 100%;
  height: 90lvh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #E0E0E0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  @media (min-width: 640px) {
    align-items: stretch;
    flex-direction: row;
    height: 575px;
  }
  &__preview{
    width: 100%;
    height: 40lvh;
    overflow: scroll;
    @media (min-width: 640px) {
      width: inherit;
      overflow: auto;
      height: 100%;
    }
  }
  &__list{
    width: 100%;
    height: 40lvh;
    border-bottom: 1px solid #E0E0E0;
    overflow: auto;
    @media (min-width: 640px) {
      width: 282px;
      min-width: 282px;
      height: 100%;
      border-bottom: none;
      border-right: 1px solid #E0E0E0;
    }
  }
}
</style>