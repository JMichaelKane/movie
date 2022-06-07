<script setup lang="ts">
	import logo from "../../../assets/logo_.png";
	const options = [
		{
			label: "滨海湾金沙，新加坡",
			key: "marina bay sands",
		},
		{
			label: "布朗酒店，伦敦",
			key: "brown's hotel, london",
		},
		{
			label: "亚特兰蒂斯巴哈马，拿骚",
			key: "atlantis nahamas, nassau",
		},
		{
			label: "比佛利山庄酒店，洛杉矶",
			key: "the beverly hills hotel, los angeles",
		},
	];
	function handleSelect(key: string | number) {}
</script>

<template>
	<div>
		<n-grid cols="3 l:9" item-responsive responsive="screen">
			<n-grid-item span="2 l:2">
				<router-link :to="'/'">
					<n-image width="110" :src="logo" preview-disabled />
				</router-link>
			</n-grid-item>
			<n-grid-item span="1 l:1">
				<div style="height: 36px; display: flex; align-items: center; font-size: 1.125rem">
					<router-link to="/">
						<span>首页</span>
					</router-link>
				</div>
			</n-grid-item>
			<n-grid-item span="0 l:1">
				<div style="height: 36px; display: flex; align-items: center; font-size: 1.125rem">
					<span>分类1</span>
				</div>
			</n-grid-item>
			<n-grid-item span="0 l:1">
				<div style="height: 36px; display: flex; align-items: center; font-size: 1.125rem">
					<span>分类2</span>
				</div>
			</n-grid-item>
			<n-grid-item span="0 l:0">
				<div style="height: 36px; display: flex; align-items: center; font-size: 1.125rem">
					<n-dropdown
						trigger="hover"
						placement="bottom-start"
						:options="options"
						@select="handleSelect"
					>
						更多
					</n-dropdown>
				</div>
			</n-grid-item>
		</n-grid>
	</div>
</template>

<style></style>
