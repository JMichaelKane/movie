<script setup lang="ts">
	import { watchPostEffect } from "vue";
	import type { DataTableColumns } from "naive-ui";
	import { NButton, NSpace, useNotification } from "naive-ui";
	import { AddCircleOutline, FlashOutline, RefreshCircleOutline } from "@vicons/ionicons5";
	import { ShowOrEdit, Movie, createDelayFunction } from "../../../../composables/User/public";
	import { paths } from "../../../../composables/User/path";
	import { GetMovies, GetMoviesByKeyword, DelMovie } from "../../../../composables/User/api";
	paths.value = [
		{
			name: "影片",
			params: null,
			to: "",
		},
	];
	const columns = ref<DataTableColumns<Movie>>([
		{
			title: "ID",
			key: "id",
			width: "100px",
			align: "center",
		},
		{
			title: "影片名",
			key: "name",
			width: "200px",
			ellipsis: true,
			align: "center",
			render(row: Movie, index: number) {
				return h(ShowOrEdit, {
					value: row.name,
					onUpdateValue(v: string) {
						data.value[index].name = v;
					},
				});
			},
		},
		{
			title: "时长",
			key: "duration",
			width: "100px",
			align: "center",
			render(row: Movie, index: number) {
				return h(ShowOrEdit, {
					value: row.duration,
					onUpdateValue(v: string) {
						data.value[index].duration = v;
					},
				});
			},
		},
		{
			title: "简介",
			key: "description",
			ellipsis: true,
			align: "center",
			render(row: Movie, index: number) {
				return h(ShowOrEdit, {
					value: row.description,
					onUpdateValue(v: string) {
						data.value[index].description = v;
					},
				});
			},
		},
		{
			title: "导演",
			key: "director",
			ellipsis: true,
			align: "center",
			width: "200px",
		},
		{
			title: "操作",
			key: "action",
			width: "150px",
			align: "center",
			render(row: Movie, index: number) {
				return h(
					NSpace,
					{
						justify: "center",
					},

					() =>
						h(
							NButton,
							{
								secondary: true,
								type: "error",
								size: "small",
								onClick: () => {
									DelMovie(row.id).then(() => {
										notification["success"]({
											content: "恭喜你！",
											meta: "操作成功",
										});
									});
								},
							},
							() => "删除"
						)
				);
			},
		},
	]);

	const data = ref<Movie[]>([]); // 存储查询到的movie
	const keyword = ref<string>(""); // keyword
	const pg = ref<number>(0);

	const search = createDelayFunction(GetMoviesByKeyword, 500); // 防抖函数
	onMounted(() => {
		GetMovies(20, 1, data);
		watchPostEffect(() => {
			if (keyword.value != "") {
				console.log(keyword.value);
				search(keyword.value, 20, 1, data);
			}
		});
	});

	const notification = useNotification(); // 通知

	function refresh() {}
</script>

<template>
	<n-card title="影片管理" size="small">
		<template #header-extra>
			<n-space>
				<n-input v-model:value="keyword" placeholder="搜索" round>
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
