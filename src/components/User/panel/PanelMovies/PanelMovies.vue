<script setup lang="ts">
	import { Ref } from "vue";
	import type { DataTableColumns } from "naive-ui";
	interface movie {
		id: number;
		name: string;
		description: string;
	}
	const columns = ref<DataTableColumns<movie>>([
		{
			title: "ID",
			key: "id",
		},
		{
			title: "影片名",
			key: "name",
			ellipsis: true,
		},
		{
			title: "简介",
			key: "description",
			ellipsis: true,
		},
		{
			title: "操作",
			key: "action",
		},
	]);

	const data = ref([
		{ id: 1, name: "影片1", description: "4:18" },
		{ id: 2, name: "影片2", description: "4:48" },
		{ id: 3, name: "影片3", description: "7:27" },
	]);
</script>

<template>
	<n-data-table :columns="columns" :data="data" :bordered="false" />
</template>

<style></style>
