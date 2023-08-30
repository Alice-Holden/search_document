<script setup>
import {useDocumentStore} from "@/stores/documents";

const documentStore = useDocumentStore();

</script>
<template>
  <div class="error">
   {{documentStore.error}}
  </div>
</template>
<style>
.error {
  position: fixed;
  z-index: 2;
  bottom: 50px;
  right: 70px;
  color: #861313;
  border: 1px solid #b02121;
  font-size: 14px;
  padding: 25px;
  background: #fceeee;
  border-radius: 8px;
}
</style>