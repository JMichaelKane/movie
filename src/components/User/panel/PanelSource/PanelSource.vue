<script setup lang="ts">
	import { h, ref } from "vue";
	import { DataTableColumns, NButton, NSpace } from "naive-ui";
	import { AddCircleOutline, FlashOutline, RefreshCircleOutline } from "@vicons/ionicons5";
	import { ShowOrEdit, Source } from "../../../../composables/User/public";
	import { paths } from "../../../../composables/User/path";
	import { sources as data } from "../../../../composables/User/data";

	paths.value = [
		{
			name: "采集源",
			params: null,
			to: "",
		},
	];

	const columns = ref<DataTableColumns<Source>>([
		{
			title: "ID",
			key: "id",
			width: 100,
			align: "center",
		},
		{
			title: "资源库名",
			key: "name",
			width: 150,
			align: "center",
			render(row: Source, index: number) {
				return h(ShowOrEdit, {
					value: row.name,
					onUpdateValue(v: string) {
						data.value[index].name = v;
					},
				});
			},
		},
		{
			title: "地址",
			key: "url",
			align: "center",
			render(row: Source, index: number) {
				return h(ShowOrEdit, {
					value: row.url,
					onUpdateValue(v: string) {
						data.value[index].url = v;
					},
				});
			},
		},
		{
			title: "采集情况",
			key: "complete",
			align: "center",
			width: 150,
			render(row: Source, index: number) {
				return h("div", row.complete ? "已完成" : "未完成");
			},
		},
		{
			title: "操作",
			key: "action",
			width: "200px",
			align: "center",
			render(row: Source, index: number) {
				return h(
					NSpace,
					{
						justify: "center",
					},
					() => [
						h(
							NButton,
							{
								secondary: true,
								type: "info",
								size: "small",
							},
							() => "重新采集"
						),
						h(
							NButton,
							{
								secondary: true,
								type: "error",
								size: "small",
							},
							() => "删除"
						),
					]
				);
			},
		},
	]);
</script>

<template>
	<n-card title="采集源" size="small">
		<template #header-extra>
			<n-space>
				<n-input placeholder="搜索" round>
					<template #prefix>
						<n-icon :component="FlashOutline" />
					</template>
				</n-input>
				<div style="display: flex; align-items: center; height: 100%">
					<n-button text type="primary" style="font-size: 24px">
						<n-icon>
							<add-circle-outline />
						</n-icon>
					</n-button>
				</div>
				<div style="display: flex; align-items: center; height: 100%">
					<n-button text type="info" style="font-size: 24px">
						<n-icon>
							<refresh-circle-outline />
						</n-icon>
					</n-button>
				</div>
			</n-space>
		</template>
		<n-data-table :columns="columns" :data="data" :bordered="false" :single-line="false" />
	</n-card>
</template>

<style></style>
