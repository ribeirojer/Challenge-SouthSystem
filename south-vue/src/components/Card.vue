<template>
  <div className="w-full p-4 md:w-1/3 lg:w-1/5">
    <a
      href=´book/${{{data}}}´
            className="relative block h-48 overflow-hidden rounded"
    >
      <img
        alt="ecommerce"
        className="block h-full w-full object-cover object-center cursor-pointer"
        src=´${imagem}´
      />
    </a>
    <div className="mt-4">
      <h2 className="title-font text-lg font-medium text-gray-900">
        {data.volumeInfo.title}
      </h2>
      <p className="mt-1">{data.volumeInfo.authors}</p>
    </div>
  </div>
</template>
<script lang="ts">

export default {
  props: {
    data: String,
  },};
</script>
<style lang=""></style>
