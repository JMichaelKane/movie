<script setup lang="ts">
	import { DataTableColumns, NButton, NSpace, useNotification } from "naive-ui";
	import { ShowOrEdit, Category } from "../../../../composables/User/public";
	import { AddCircleOutline, FlashOutline, RefreshCircleOutline } from "@vicons/ionicons5";
	import { paths } from "../../../../composables/User/path";
	import { categories as data } from "../../../../composables/User/data";
	// GetCategories
	import { GetCategories, DelCategory } from "../../../../composables/User/api";
	paths.value = [
		{
			name: "分类",
			params: null,
			to: "",
		},
	];
	const columns = ref<DataTableColumns<Category>>([
		{
			title: "ID",
			key: "id",
			width: 100,
			align: "center",
		},
		{
			title: "名字",
			key: "name",
			align: "center",
			render(row: Category, index: number) {
				return h(ShowOrEdit, {
					value: row.name,
					onUpdateValue(v: string) {
						data.value[index].name = v;
					},
				});
			},
		},
		{
			title: "采集类数",
			key: "classNum",
			width: 100,
			align: "center",
		},
		{
			title: "影片数",
			key: "movieNum",
			width: 100,
			align: "center",
		},
		{
			title: "操作",
			key: "action",
			width: "150px",
			align: "center",
			render(row: Category, index: number) {
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
									DelCategory(row.id).then(() => {
										GetCategories();
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
	const notification = useNotification(); // 通知
</script>

<template>
	<n-card title="分类管理" size="small">
		<template #header-extra>
			<n-space>
				<n-input placeholder="搜索" :disabled="true" round>
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
					<n-button text type="info" style="font-size: 24px" @click="GetCategories">
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
