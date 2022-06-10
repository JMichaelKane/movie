<script setup lang="ts">
	import type { DataTableColumns } from "naive-ui";
	import { NButton, NSpace } from "naive-ui";
	import { AddCircleOutline, FlashOutline, RefreshCircleOutline } from "@vicons/ionicons5";
	import { ShowOrEdit, Movie } from "../../../../composables/User/public";

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
							},
							() => "删除"
						)
				);
			},
		},
	]);

	const data = ref<Movie[]>([
		{
			id: 1,
			name: "八道楼子",
			duration: "113分钟",
			description:
				"　　动作电影天王张彻又一破格之作，以澎湃的爱国情怀重现“八道楼子”抗日英雄的传奇事迹。本片荣获第十三届金马奖优等剧情片奖。1933年，日军出动兵团两万，战车五十余辆，进攻“八道楼子”的据点。我军以寡敌众，死守“八道楼子”抵御日军进攻，血战五日五夜，终于失守。日军发现楼内，只有七具血肉模糊的尸体，为之肃然起敬，立碑“支那七勇士”之墓。张彻以张家班底成员：狄龙、姜大卫、傅声、陈观泰演绎这群无名英雄的动人事迹。他以功夫动作，融入大型战争中，炮火与肌肉结合得完美无暇。“八道楼子”内，无名英魂的惊人意志，张彻用泣鬼神的影像向他们致敬。",
			sourceID: 1,
			classID: 1,
		},
	]);
</script>

<template>
	<n-card title="影片管理" size="small">
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
