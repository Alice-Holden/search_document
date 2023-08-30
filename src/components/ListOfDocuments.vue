<script setup>
import {onMounted, ref} from "vue";
import {useDocumentStore} from "@/stores/documents";
import BaseLoader from "@/components/BaseLoader.vue";


const searchDocument = ref('');
const documentStore = useDocumentStore();

onMounted(() => {
  // load all documents
  documentStore.getListDocuments('');
});


</script>
<template>
<div class="document-list">
  <div class="document-list__header">
    <div class="document-list__title">
      Поиск документа
    </div>
    <div class="document-list__input-search">
      <input
          type="number"
          v-model="searchDocument"
          placeholder="Введите ID документа"
          @input="documentStore.getListDocuments(searchDocument)"
      />
    </div>
    <div class="document-list__title">
      Результаты
    </div>
  </div>
  <BaseLoader v-if="documentStore.loading"/>
  <div v-else class="document-list__documents">
    <div
        v-for="document in documentStore.listDocuments"
        :key="document.id"
        class="document-list__document"
        :class="{'document-list__document--active': documentStore.selectedDocument?.id === document.id}"
        @click="documentStore.getDocumentById(document.id)"
    >
      <div class="document-list__img">
        <img
            v-if="document.image"
            :src="document.image"
            alt="photo"
        />
        <img
            v-else
            src="/img/default-picture.svg"
            alt="default"
        />
      </div>
      <div class="document-list__document-info">
        <h5>{{document.name}}</h5>
        <p>12 MB</p>
      </div>
    </div>
      <p  v-if="!(documentStore.listDocuments).length">Ничего не найдено</p>
  </div>

</div>
</template>



<style scoped lang="scss">
.document-list{
  padding: 0 0 27px 0;
  position: relative;
  background: white;
  &__header{
    position: sticky;
    top: 0;
    padding: 27px 20px 14px 20px;
    background: #fff;
  }
  &__title{
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
  &__input-search{
    margin: 14px 0 29px 0;
    input{
      width: 240px;
      height: 40px;
      border: 1px solid #E0E0E0;
      border-radius: 8px;
      padding: 16px 24px 16px 24px;
      font-size: 14px;
      line-height: 18px;
      &::placeholder{
        color: #6C757D;
      }
      &:focus-visible{
        outline: none;
      }
    }
  }
  &__documents{
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin: 18px 0;
  }
  &__document{
    width: 100%;
    height: 70px;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    &:hover{
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    }
    &--active{
      background: rgba(13, 110, 253, 1);
      color: white;
      P{
        color: white;
      }
    }
  }
  &__img{
    width: 70px;
    height: 70px;
    overflow: hidden;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__document-info{
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}
</style>