<script setup>
import {useDocumentStore} from "@/stores/documents";
import BasicButton from "@/components/BasicButton.vue";

const documentStore = useDocumentStore();
/**
 * download .txt file with document description
 */
function downloadDocument(doc) {
  const text = doc.description
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', doc.name);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

}
</script>
<template>
  <div class="document-preview">
    <div
        v-if="documentStore.selectedDocument"
        class="document-preview__content"
    >
      <div class="document-preview__img">
          <img
            v-if="documentStore.selectedDocument.image"
            :src="documentStore.selectedDocument.image"
            alt="photo"
        />
        <img
            v-else
            src="/img/default-picture-preview.svg"
            alt="default"
        />
      </div>
      <div class="document-preview__info">
        <div>
          <div class="document-preview__title">{{documentStore.selectedDocument.name}}</div>
        <div class="document-preview__btn">
          <BasicButton
              width="114px"
              text="Скачать"
              type="primary"
              @click="downloadDocument(documentStore.selectedDocument)"
          />
          <BasicButton
              width="114px"
              text="Удалить"
              type="secondary"
              :disabled="!documentStore.selectedDocument.image"
          />
        </div>
          <div class="document-preview__title">Описание:</div>
          <p class="document-preview__description">{{documentStore.selectedDocument.description}}</p>
      </div>
    </div>
  </div>
    <div
        v-else
        class="document-preview__default-text"
    >
      <p>Выберите документ, чтобы посмотреть его содержимое</p>
    </div>
  </div>
</template>



<style scoped lang="scss">
.document-preview{
  padding: 30px;
  &__content{
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 640px) {
      width: inherit;
      flex-direction: row;
      height: 100%;
      gap: 61px;
    }
  }
  &__title{
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 14px;
  }
  &__btn{
    display: flex;
    gap: 17px;
    margin-bottom: 47px;
  }

  &__default-text{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  &__info{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    @media (min-width: 640px) {
      width: 40%;
    }

  }
  &__img{
    width: 100%;
    height: 40%;
    @media (min-width: 640px) {
      width: 424px;
      height: 286px;
    }

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;

    }
  }
}
</style>