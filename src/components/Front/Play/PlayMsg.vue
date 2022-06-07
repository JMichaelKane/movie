<script setup lang="ts">
	import { deal } from "../../../composables/public";
	const props = defineProps(["name", "director", "actor", "description"]);
</script>

<template>
	<div>
		<n-card :title="props.name" size="medium">
			<!-- <template #header-extra> 标签</template> -->
			<div>导演：{{ props.director }}</div>
			<div>主演：{{ props.actor }}</div>
			<div>简介：{{ deal(props.description) }}</div>
		</n-card>
	</div>
</template>

<style></style>
