<script setup lang="ts">
	import { Ref } from "vue";
	import type { DataTableColumns } from "naive-ui";
	import { Key } from "@vicons/ionicons5";
	interface movie {
		id: number;
		name: string;
		description: string;
		duration: string;
		sourceID: number;
		classID: number;
	}
	const columns = ref<DataTableColumns<movie>>([
		{
			title: "ID",
			key: "id",
			width: "100px",
			align: "center",
		},
		{
			title: "影片名",
			key: "name",
			width: "250px",
			ellipsis: true,
			align: "center",
		},
		{
			title: "时长",
			key: "duration",
			width: "100px",
			align: "center",
		},
		{
			title: "简介",
			key: "description",
			ellipsis: true,
			align: "center",
		},
		{
			title: "资源库ID",
			key: "sourceID",
			align: "center",
			width: "100px",
		},
		{
			title: "采集类ID",
			key: "classID",
			align: "center",
			width: "100px",
		},
		{
			title: "操作",
			key: "action",
			width: "150px",
			align: "center",
		},
	]);

	const data = ref([
		{ id: 1, name: "影片1", description: "4:18" },
		{ id: 2, name: "影片2", description: "4:48" },
		{ id: 3, name: "影片3", description: "7:27" },
	]);
</script>

<template>
	<n-data-table :columns="columns" :data="data" :bordered="false" :single-line="false" />
</template>

<style></style>
